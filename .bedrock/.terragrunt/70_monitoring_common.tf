################################################################################
# MONITORING COMMON - Locals, Data Sources, IAM
################################################################################

locals {
  # Environment suffix for resource naming
  env_suffix = substr(var.account_shortname, 8, 3)
  
  # Monitoring namespace for custom metrics
  monitoring_namespace = "SpotMarketplace/${local.env_suffix}"
  
  # SNS Topic ARNs for alerting
  dev_alerts_sns_arn    = var.monitoring.create && var.monitoring.dev_alerts_topic_name != "" ? "arn:aws:sns:${var.default_region}:${var.account_number}:${var.monitoring.dev_alerts_topic_name}" : ""
  devops_alerts_sns_arn = var.monitoring.create && var.monitoring.devops_alerts_topic_name != "" ? "arn:aws:sns:${var.default_region}:${var.account_number}:${var.monitoring.devops_alerts_topic_name}" : ""
  
  # Use devops alerts for critical (production) or dev alerts for non-prod
  critical_sns_arn = var.account_lifecycle == "prd" ? local.devops_alerts_sns_arn : local.dev_alerts_sns_arn
  
  # Alarm action strategy:
  # - Component alarms: NO notifications (just state tracking for composites)
  # - Composite alarms: YES notifications when notifications_enabled = true
  # This prevents double-alerting when a component triggers its parent composite
  
  # Component alarms - never send notifications (empty actions)
  component_alarm_actions = []
  
  # Composite alarms - send notifications only when enabled
  composite_alarm_actions = var.monitoring.notifications_enabled ? [local.critical_sns_arn] : []
  
  # CloudFront distribution ID (for metrics)
  cloudfront_distribution_id = var.create_marketplace_s3cf ? aws_cloudfront_distribution.marketplace[0].id : ""
  
  # Spot UI URL for Synthetics Canary and Route53 Health Check
  spot_ui_url = var.account_lifecycle == "prd" ? "https://marketplace.lumerin.io/marketplace" : "https://marketplace.${var.account_lifecycle}.lumerin.io/marketplace"
  
  # Extract domain for Route53 health check (remove https://)
  spot_ui_domain = var.account_lifecycle == "prd" ? "marketplace.lumerin.io" : "marketplace.${var.account_lifecycle}.lumerin.io"
}

################################################################################
# ROUTE53 HEALTH CHECK - Baseline reachability for all environments
################################################################################

resource "aws_route53_health_check" "spot_ui" {
  count             = var.monitoring.create && var.monitoring.create_alarms && var.create_marketplace_s3cf ? 1 : 0
  fqdn              = local.spot_ui_domain
  port              = 443
  type              = "HTTPS"
  resource_path     = "/"
  failure_threshold = 3
  request_interval  = 30

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot UI Health Check - ${local.env_suffix}",
      Capability = "Monitoring",
    },
  )
}

################################################################################
# IAM ROLE FOR SYNTHETICS CANARY
################################################################################

resource "aws_iam_role" "synthetics_canary" {
  count = var.monitoring.create && var.monitoring.create_synthetics_canary ? 1 : 0
  name  = "spot-synthetics-canary-role-${local.env_suffix}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot Synthetics Canary Role",
      Capability = "Monitoring",
    },
  )
}

resource "aws_iam_role_policy" "synthetics_canary" {
  count = var.monitoring.create && var.monitoring.create_synthetics_canary ? 1 : 0
  name  = "synthetics-canary-policy"
  role  = aws_iam_role.synthetics_canary[0].id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject"
        ]
        Resource = [
          "${aws_s3_bucket.synthetics_artifacts[0].arn}/*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "s3:GetBucketLocation"
        ]
        Resource = [
          aws_s3_bucket.synthetics_artifacts[0].arn
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogStream",
          "logs:PutLogEvents",
          "logs:CreateLogGroup"
        ]
        Resource = [
          "arn:aws:logs:${var.default_region}:${var.account_number}:log-group:/aws/lambda/cwsyn-*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "cloudwatch:PutMetricData"
        ]
        Resource = "*"
        Condition = {
          StringEquals = {
            "cloudwatch:namespace" = "CloudWatchSynthetics"
          }
        }
      }
    ]
  })
}

################################################################################
# S3 BUCKET FOR SYNTHETICS ARTIFACTS
################################################################################

resource "aws_s3_bucket" "synthetics_artifacts" {
  count  = var.monitoring.create && var.monitoring.create_synthetics_canary ? 1 : 0
  bucket = "spot-synthetics-${var.account_number}-${local.env_suffix}"

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot Synthetics Artifacts",
      Capability = "Monitoring",
    },
  )
}

resource "aws_s3_bucket_lifecycle_configuration" "synthetics_artifacts" {
  count  = var.monitoring.create && var.monitoring.create_synthetics_canary ? 1 : 0
  bucket = aws_s3_bucket.synthetics_artifacts[0].id

  rule {
    id     = "expire-old-artifacts"
    status = "Enabled"

    filter {
      prefix = ""
    }

    expiration {
      days = 30
    }
  }
}
