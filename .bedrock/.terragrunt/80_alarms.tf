################################################################################
# COMPONENT CLOUDWATCH ALARMS
# Component Alarms for Spot Marketplace UI
# Note: These alarms do NOT send notifications - they feed into composite alarms
################################################################################

################################################################################
# SPOT UI / CLOUDFRONT ALARMS
################################################################################

# Route53 Health Check - Site Unreachable
# Uses Route53 health check (probes every 30s) instead of CloudFront request count
# This works correctly for low-traffic sites (dev/stg) where no user traffic is normal
resource "aws_cloudwatch_metric_alarm" "spot_ui_unreachable" {
  count               = var.monitoring.create && var.monitoring.create_alarms && var.create_marketplace_s3cf ? 1 : 0
  provider            = aws.use1  # Route53 metrics are only in us-east-1
  alarm_name          = "spot-ui-unreachable-${local.env_suffix}"
  comparison_operator = "LessThanThreshold"
  evaluation_periods  = local.route53_alarm_evaluation_periods
  metric_name         = "HealthCheckStatus"
  namespace           = "AWS/Route53"
  period              = 60
  statistic           = "Minimum"
  threshold           = 1
  alarm_description   = "Spot UI unreachable for ${var.monitoring_schedule.unhealthy_alarm_period_minutes} min"
  treat_missing_data  = "breaching"

  dimensions = {
    HealthCheckId = aws_route53_health_check.spot_ui[0].id
  }

  alarm_actions = local.component_alarm_actions
  ok_actions    = local.component_alarm_actions

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot UI Unreachable Alarm",
      Capability = "Monitoring",
    },
  )
}

# CloudFront 5xx Error Rate
resource "aws_cloudwatch_metric_alarm" "spot_ui_5xx" {
  count               = var.monitoring.create && var.monitoring.create_alarms && var.create_marketplace_s3cf ? 1 : 0
  alarm_name          = "spot-ui-5xx-errors-${local.env_suffix}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = local.standard_alarm_evaluation_periods
  metric_name         = "5xxErrorRate"
  namespace           = "AWS/CloudFront"
  period              = 300
  statistic           = "Average"
  threshold           = var.alarm_thresholds.cloudfront_5xx_threshold
  alarm_description   = "Spot UI CloudFront 5xx errors for ${var.monitoring_schedule.unhealthy_alarm_period_minutes} min"
  treat_missing_data  = "notBreaching"

  dimensions = {
    DistributionId = local.cloudfront_distribution_id
    Region         = "Global"
  }

  alarm_actions = local.component_alarm_actions
  ok_actions    = local.component_alarm_actions

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot UI 5xx Errors Alarm",
      Capability = "Monitoring",
    },
  )
}

# CloudFront 4xx Error Rate
resource "aws_cloudwatch_metric_alarm" "spot_ui_4xx" {
  count               = var.monitoring.create && var.monitoring.create_alarms && var.create_marketplace_s3cf ? 1 : 0
  alarm_name          = "spot-ui-4xx-errors-${local.env_suffix}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = local.standard_alarm_evaluation_periods
  metric_name         = "4xxErrorRate"
  namespace           = "AWS/CloudFront"
  period              = 300
  statistic           = "Average"
  threshold           = var.alarm_thresholds.cloudfront_4xx_threshold
  alarm_description   = "Spot UI CloudFront 4xx errors for ${var.monitoring_schedule.unhealthy_alarm_period_minutes} min"
  treat_missing_data  = "notBreaching"

  dimensions = {
    DistributionId = local.cloudfront_distribution_id
    Region         = "Global"
  }

  alarm_actions = local.component_alarm_actions
  ok_actions    = local.component_alarm_actions

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot UI 4xx Errors Alarm",
      Capability = "Monitoring",
    },
  )
}
