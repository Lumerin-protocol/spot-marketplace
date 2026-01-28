################################################################################
# CLOUDWATCH DASHBOARD
# Spot Marketplace UI Monitoring Dashboard
################################################################################

resource "aws_cloudwatch_dashboard" "spot_marketplace" {
  count          = var.monitoring.create && var.monitoring.create_dashboards && var.create_marketplace_s3cf ? 1 : 0
  dashboard_name = "02-SpotMarketplace-${local.env_suffix}"

  dashboard_body = jsonencode({
    widgets = [
      # Row 1: Alarm Status
      {
        type   = "alarm"
        x      = 0
        y      = 0
        width  = 24
        height = 3
        properties = {
          title  = "Alarm Status"
          alarms = compact([
            aws_cloudwatch_composite_alarm.spot_ui_unhealthy[0].arn,
            aws_cloudwatch_metric_alarm.spot_ui_unreachable[0].arn,
            aws_cloudwatch_metric_alarm.spot_ui_5xx[0].arn,
            aws_cloudwatch_metric_alarm.spot_ui_4xx[0].arn
          ])
        }
      },
      # Row 2: CloudFront Request Metrics
      {
        type   = "metric"
        x      = 0
        y      = 3
        width  = 12
        height = 6
        properties = {
          title  = "CloudFront Requests"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Sum"
          metrics = [
            ["AWS/CloudFront", "Requests", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "Total Requests" }]
          ]
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 3
        width  = 12
        height = 6
        properties = {
          title  = "CloudFront Bytes Transferred"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Sum"
          metrics = [
            ["AWS/CloudFront", "BytesDownloaded", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "Bytes Downloaded" }],
            ["AWS/CloudFront", "BytesUploaded", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "Bytes Uploaded" }]
          ]
        }
      },
      # Row 3: Error Rates
      {
        type   = "metric"
        x      = 0
        y      = 9
        width  = 12
        height = 6
        properties = {
          title  = "CloudFront Error Rates"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Average"
          annotations = {
            horizontal = [
              {
                label = "5xx Threshold"
                value = var.alarm_thresholds.cloudfront_5xx_threshold
                color = "#d62728"
              },
              {
                label = "4xx Threshold"
                value = var.alarm_thresholds.cloudfront_4xx_threshold
                color = "#ff7f0e"
              }
            ]
          }
          metrics = [
            ["AWS/CloudFront", "5xxErrorRate", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "5xx Error Rate %", color = "#d62728" }],
            ["AWS/CloudFront", "4xxErrorRate", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "4xx Error Rate %", color = "#ff7f0e" }]
          ]
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 9
        width  = 12
        height = 6
        properties = {
          title  = "Route53 Health Check Status"
          region = "us-east-1"
          period = var.monitoring.dashboard_period
          stat   = "Minimum"
          yAxis = {
            left = {
              min = 0
              max = 1
            }
          }
          metrics = [
            ["AWS/Route53", "HealthCheckStatus", "HealthCheckId", aws_route53_health_check.spot_ui[0].id, { label = "Health Check (1=Healthy)" }]
          ]
        }
      },
      # Row 4: Cache Performance
      {
        type   = "metric"
        x      = 0
        y      = 15
        width  = 12
        height = 6
        properties = {
          title  = "CloudFront Cache Hit Rate"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Average"
          metrics = [
            ["AWS/CloudFront", "CacheHitRate", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "Cache Hit Rate %" }]
          ]
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 15
        width  = 12
        height = 6
        properties = {
          title  = "CloudFront Origin Latency"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Average"
          metrics = [
            ["AWS/CloudFront", "OriginLatency", "DistributionId", local.cloudfront_distribution_id, "Region", "Global", { label = "Origin Latency (ms)" }]
          ]
        }
      },
      # Row 5: Synthetics Canary (when enabled)
      {
        type   = "metric"
        x      = 0
        y      = 21
        width  = 12
        height = 6
        properties = {
          title  = "Canary Success Rate"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Average"
          view   = "timeSeries"
          yAxis = {
            left = {
              min = 0
              max = 100
            }
          }
          annotations = {
            horizontal = [
              {
                label = "Target"
                value = 100
                color = "#2ca02c"
              }
            ]
          }
          metrics = var.monitoring.create_synthetics_canary ? [
            ["CloudWatchSynthetics", "SuccessPercent", "CanaryName", "spot-ui-canary-${local.env_suffix}", { label = "Success %" }]
          ] : []
        }
      },
      {
        type   = "metric"
        x      = 12
        y      = 21
        width  = 12
        height = 6
        properties = {
          title  = "Canary Duration"
          region = var.default_region
          period = var.monitoring.dashboard_period
          stat   = "Average"
          metrics = var.monitoring.create_synthetics_canary ? [
            ["CloudWatchSynthetics", "Duration", "CanaryName", "spot-ui-canary-${local.env_suffix}", { label = "Duration (ms)" }]
          ] : []
        }
      }
    ]
  })
}
