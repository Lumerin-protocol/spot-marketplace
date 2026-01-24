################################################################################
# COMPOSITE CLOUDWATCH ALARMS
# Composite Alarm for Spot Marketplace UI
# This is the ONLY alarm that sends SNS notifications (when enabled)
################################################################################

################################################################################
# SPOT UI UNHEALTHY
################################################################################

resource "aws_cloudwatch_composite_alarm" "spot_ui_unhealthy" {
  count             = var.monitoring.create && var.monitoring.create_alarms && var.create_marketplace_s3cf ? 1 : 0
  alarm_name        = "spot-ui-${local.env_suffix}"
  alarm_description = "Spot UI is unhealthy - Route53 health check failing, CloudFront errors, or canary failing (prod only)"

  # Alarm rule: ANY of the UI component alarms in ALARM state
  # - Route53 health check: baseline reachability (all envs)
  # - CloudFront 4xx/5xx: error rates when traffic exists
  # - Canary: browser-based testing (production only)
  alarm_rule = var.monitoring.create_synthetics_canary ? join(" OR ", [
    "ALARM(${aws_cloudwatch_metric_alarm.spot_ui_unreachable[0].alarm_name})",
    "ALARM(${aws_cloudwatch_metric_alarm.spot_ui_5xx[0].alarm_name})",
    "ALARM(${aws_cloudwatch_metric_alarm.spot_ui_4xx[0].alarm_name})",
    "ALARM(${aws_cloudwatch_metric_alarm.canary_failed[0].alarm_name})"
  ]) : join(" OR ", [
    "ALARM(${aws_cloudwatch_metric_alarm.spot_ui_unreachable[0].alarm_name})",
    "ALARM(${aws_cloudwatch_metric_alarm.spot_ui_5xx[0].alarm_name})",
    "ALARM(${aws_cloudwatch_metric_alarm.spot_ui_4xx[0].alarm_name})"
  ])

  alarm_actions = local.composite_alarm_actions
  ok_actions    = local.composite_alarm_actions

  tags = merge(
    var.default_tags,
    var.foundation_tags,
    {
      Name       = "Spot UI Unhealthy Composite Alarm",
      Capability = "Monitoring",
    },
  )

  # Include canary_failed in depends_on even when count=0
  # This ensures proper deletion order when canary is disabled
  depends_on = [
    aws_cloudwatch_metric_alarm.spot_ui_unreachable,
    aws_cloudwatch_metric_alarm.spot_ui_5xx,
    aws_cloudwatch_metric_alarm.spot_ui_4xx,
    aws_cloudwatch_metric_alarm.canary_failed
  ]
}
