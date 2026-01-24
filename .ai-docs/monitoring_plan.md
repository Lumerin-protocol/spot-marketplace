# Spot Marketplace Monitoring Plan

## Infrastructure Overview

The Spot Marketplace is a **static website** hosted on S3 with CloudFront CDN.

### Components
| Component | Description | Control Variable |
|-----------|-------------|------------------|
| S3 Bucket | Static website files | `create_marketplace_s3cf` |
| CloudFront | CDN distribution with WAF | `create_marketplace_s3cf` |
| Route53 | DNS records | `create_marketplace_s3cf` |

### URLs by Environment
| Environment | URL | Account |
|-------------|-----|---------|
| DEV | `https://marketplace.dev.lumerin.io` | titanio-dev |
| STG | `https://marketplace.stg.lumerin.io` | titanio-stg |
| LMN (PRD) | `https://marketplace.lumerin.io` | titanio-lmn |

## Monitoring Strategy

Since this is a simple static site (no backend services), monitoring is straightforward:

### 1. Route53 Health Check (All Environments)
- **Purpose**: Baseline reachability - is the site responding?
- **Method**: HTTPS probe to root path every 30 seconds
- **Failure threshold**: 3 consecutive failures

### 2. CloudFront Error Rates (All Environments)
- **5xx Error Rate**: Server/origin errors (S3 access issues, etc.)
- **4xx Error Rate**: Client errors, missing content

### 3. Synthetics Canary (Production Only)
- **Purpose**: Browser-based testing for deeper validation
- **Checks**: Page load, HTTP status, content verification
- **Schedule**: Every 5 minutes

## Alarm Architecture

```
┌─────────────────────────────────────────────────────────┐
│                COMPOSITE ALARM                          │
│            spot-ui-unhealthy-{env}                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │                 TRIGGERS IF ANY:                  │  │
│  │  • Route53 health check failing                   │  │
│  │  • CloudFront 5xx errors elevated                 │  │
│  │  • CloudFront 4xx errors elevated                 │  │
│  │  • Synthetics canary failing (prod only)         │  │
│  └──────────────────────────────────────────────────┘  │
│                         │                               │
│                         ▼                               │
│              SNS Notification                           │
│         (when notifications_enabled)                    │
└─────────────────────────────────────────────────────────┘
```

### Alarm Thresholds by Environment

| Metric | DEV | STG | LMN (PRD) |
|--------|-----|-----|-----------|
| CloudFront 5xx % | 5% | 3% | 1% |
| CloudFront 4xx % | 10% | 8% | 5% |

## Files to Create

| File | Purpose |
|------|---------|
| `70_monitoring_common.tf` | Locals, Route53 health check, Synthetics IAM/S3 |
| `72_synthetics_canary.tf` | Synthetics canary (production only) |
| `80_alarms.tf` | Component alarms (Route53, CloudFront, Canary) |
| `81_composite_alarms.tf` | Single composite alarm for UI health |
| `89_dashboards.tf` | CloudWatch dashboard |

## Variables

### `monitoring` object
```hcl
monitoring = {
  create                    = bool   # Master switch for all monitoring
  create_alarms             = bool   # Create CloudWatch alarms
  create_dashboards         = bool   # Create CloudWatch dashboard
  create_synthetics_canary  = bool   # Create Synthetics canary (prod only)
  notifications_enabled     = bool   # Send SNS notifications
  dev_alerts_topic_name     = string # Slack notifications
  devops_alerts_topic_name  = string # Cell phone (critical, prod only)
  dashboard_period          = number # Dashboard refresh period
}
```

### `alarm_thresholds` object
```hcl
alarm_thresholds = {
  cloudfront_5xx_threshold = number  # Percentage
  cloudfront_4xx_threshold = number  # Percentage
}
```

## Implementation Notes

1. **Two-tier notification strategy**: Component alarms don't notify; only composite alarm sends notifications
2. **Route53 health check**: More reliable than "no requests" metric for low-traffic sites
3. **Synthetics canary cost**: ~$12/month - only enabled in production
4. **Dashboard**: Single dashboard showing CloudFront metrics and alarm states
