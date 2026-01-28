# Spot Marketplace - Monitoring & Alerting Guide

## Overview

The Spot Marketplace is a **static website** providing a DeFi hashrate trading interface. This guide explains how we ensure the site stays healthy through CloudWatch monitoring, alarms, and dashboards.

### System Components

| Component | Purpose | Critical? |
|-----------|---------|-----------|
| **S3 Bucket** | Static website files (React SPA) | Yes - source of all content |
| **CloudFront** | CDN distribution with caching | Yes - edge delivery |
| **Route53** | DNS records | Yes - domain resolution |

### URLs by Environment

| Environment | URL |
|-------------|-----|
| DEV | `https://marketplace.dev.lumerin.io/marketplace` |
| STG | `https://marketplace.stg.lumerin.io/marketplace` |
| LMN (PRD) | `https://marketplace.lumerin.io/marketplace` |

---

## Dashboard Quick Reference

**Dashboard Name:** `00-SpotMarketplace-{env}`

Open in CloudWatch Console → Dashboards → `00-SpotMarketplace-dev` (or stg/lmn)

### Dashboard Layout

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Row 1: Spot UI Health                                                        │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                 │
│ │ Route53 Health  │ │ CloudFront 4xx  │ │ CloudFront 5xx  │                 │
│ │ Check Status    │ │ Error Rate      │ │ Error Rate      │                 │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ Row 2: CloudFront Traffic                                                    │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                 │
│ │ Request Count   │ │ Bytes Downloaded│ │ Cache Hit Rate  │                 │
│ │                 │ │                 │ │                 │                 │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ Row 3: Synthetics Canary (Production Only)                                   │
│ ┌─────────────────┐ ┌─────────────────┐                                     │
│ │ Success Percent │ │ Duration        │                                     │
│ │                 │ │                 │                                     │
│ └─────────────────┘ └─────────────────┘                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Key Metrics to Watch

| Widget | Healthy State | Warning Signs |
|--------|---------------|---------------|
| **Route53 Health** | 100% healthy | Any failures |
| **CloudFront 5xx** | < 1% errors | > 1% sustained |
| **CloudFront 4xx** | < 5% errors | > 5% sustained |
| **Canary Success** | 100% | < 90% |

---

## Alarm Architecture

### Two-Tier System

We use a **two-tier alarm system** to prevent alert flooding:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      COMPOSITE ALARM (Alert Layer)                           │
│                  ↓ Only this sends SNS notifications ↓                       │
│                                                                              │
│                        ┌──────────────────┐                                  │
│                        │   spot-ui-{env}  │                                  │
│                        └────────┬─────────┘                                  │
│                                 │                                            │
└─────────────────────────────────┼────────────────────────────────────────────┘
                                  │ monitors state of
                                  ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│                     COMPONENT ALARMS (State Layer)                            │
│                 ↓ NO notifications - state tracking only ↓                    │
│                                                                               │
│   ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐    │
│   │ unreachable   │ │  5xx_errors   │ │  4xx_errors   │ │ canary_failed │    │
│   │ (Route53)     │ │ (CloudFront)  │ │ (CloudFront)  │ │ (Prod only)   │    │
│   └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘    │
│                                                                               │
│   Visible in CloudWatch Alarms console for debugging                          │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Why This Design?

**Without composites:** If Route53 check fails, you'd get:
- Alert: "Route53 Health Check Failed" 
- Alert: "Spot UI Unhealthy" (because Route53 triggered composite)
- That's noise!

**With composites:** You get ONE alert: "Spot UI Unhealthy"
- Go to dashboard
- See which component triggered it
- Take action

---

## Composite Alarm Reference

### spot-ui-{env}
**Triggers when:** Spot UI is unreachable or erroring

| Component Alarm | Condition | Severity |
|-----------------|-----------|----------|
| `spot-ui-unreachable` | Route53 health check failing | Critical |
| `spot-ui-5xx-errors` | CloudFront 5xx rate > threshold | Critical |
| `spot-ui-4xx-errors` | CloudFront 4xx rate > threshold | Warning |
| `spot-ui-canary-failed` (LMN only) | Synthetics canary failing | Critical |

**Response:**
1. Check Route53 health check status in AWS Console
2. If unreachable: Check CloudFront distribution, S3 origin
3. If 5xx errors: Check S3 bucket permissions, CloudFront config
4. If 4xx errors: Check for missing assets, broken links
5. If canary failing (LMN): Check Synthetics console for screenshots

---

## UI Reachability Monitoring

### Route53 Health Check (All Environments)

Active probing every 30 seconds from multiple AWS edge locations.

```
Route53 Health Check
    │
    ▼
HTTPS GET → https://marketplace.{domain}/
    │
    ▼
Check: HTTP 200 response within 4 seconds
    │
    ▼
CloudWatch Metric: HealthCheckStatus (1=healthy, 0=unhealthy)
```

### Synthetics Canary (Production Only)

Browser-based testing that loads the page and verifies content renders.

```
Synthetics Canary (every 15 min in LMN)
    │
    ▼
Selenium browser loads https://marketplace.lumerin.io/marketplace
    │
    ▼
Checks:
  - Page loads successfully
  - Key content renders (root element has children)
  - No JavaScript errors
    │
    ▼
CloudWatch Metrics:
  - SuccessPercent (0-100%)
  - Duration (ms)
```

### Environment Configuration

| Environment | Route53 Health | Canary | Canary Rate |
|-------------|----------------|--------|-------------|
| DEV | ✅ Yes | ❌ No | - |
| STG | ✅ Yes | ❌ No | - |
| LMN | ✅ Yes | ✅ Yes | 15 min |

**Rationale:** Route53 health checks provide basic reachability monitoring for all environments. Production (LMN) gets the additional Synthetics Canary to verify the page actually renders correctly.

---

## Alarm Timing Configuration

### The `unhealthy_alarm_period_minutes` Concept

This variable controls how long a condition can be "bad" before a component alarm triggers:

| Environment | Unhealthy Period | Effect |
|-------------|------------------|--------|
| DEV | 60 min | Very tolerant - issues must persist 60 min |
| STG | 30 min | Moderate - issues must persist 30 min |
| LMN | 15 min | Strict - production alerts after 15 min |

### How Evaluation Periods Are Calculated

Different metric sources have different native reporting periods:

| Metric Type | Native Period | Example Metrics |
|-------------|---------------|-----------------|
| Standard CloudWatch | 5 min | CloudFront 4xx/5xx error rates |
| Route53 Health | 1 min | Health check status |
| Synthetics Canary | Configurable | SuccessPercent, Duration |

**Formula:** `evaluation_periods = unhealthy_alarm_period / native_period`

**Example (LMN with 15 min unhealthy period):**
- CloudFront alarms: `15 / 5 = 3 evaluation periods` of 5 min each
- Route53 alarms: `15 / 1 = 15 evaluation periods` of 1 min each
- Canary alarms (15 min rate): `15 / 15 = 1 evaluation period`

---

## Environment Configuration

### Notification Settings

| Environment | notifications_enabled | Alert Target |
|-------------|----------------------|--------------|
| DEV | `false` | None (console only) |
| STG | `false` | None (console only) |
| LMN/Prod | `true` | SNS → DevOps phones |

### Threshold Examples

| Threshold | DEV | STG | LMN/Prod |
|-----------|-----|-----|----------|
| `cloudfront_5xx_threshold` | 5% | 3% | 1% |
| `cloudfront_4xx_threshold` | 10% | 8% | 5% |

### Monitoring Schedule

| Setting | DEV | STG | LMN/Prod | Notes |
|---------|-----|-----|----------|-------|
| `synthetics_canary_rate_minutes` | 60 | 30 | 15 | How often canary runs (if enabled) |
| `unhealthy_alarm_period_minutes` | 60 | 30 | 15 | How long before alarm triggers |

---

## File Structure

```
.bedrock/.terragrunt/
├── 70_monitoring_common.tf     # Locals, Route53 health check, IAM, S3 bucket
├── 72_synthetics_canary.tf     # Synthetics canary (production only)
├── 80_alarms.tf                # Component alarms (no notifications)
├── 81_composite_alarms.tf      # Composite alarm (notifications)
└── 89_dashboards.tf            # CloudWatch dashboard
```

---

## Runbook: Responding to Alerts

### Alert: "spot-ui-{env}"

1. **Open Dashboard:** CloudWatch → Dashboards → `00-SpotMarketplace-{env}`

2. **Check which component is in ALARM:**
   - CloudWatch → Alarms → Filter by "spot-ui"
   - Look for ALARM state

3. **If Route53 health check failing:**
   - Route53 Console → Health checks → `spot-ui-{env}`
   - Check "Health checkers" tab for regional status
   - If all regions failing: Issue with CloudFront/S3
   - If some regions failing: Possible regional issue

4. **If CloudFront 5xx errors:**
   - CloudFront Console → Distributions → Select distribution
   - Check origin (S3) is accessible
   - Check CloudFront error pages configuration
   - Review S3 bucket policy

5. **If CloudFront 4xx errors:**
   - Check for recent deployments with missing files
   - Review S3 bucket for expected content
   - Check CloudFront behaviors/path patterns

6. **If Canary failing (LMN):**
   - CloudWatch → Synthetics → Canaries → `spot-ui-canary-lmn`
   - View screenshots from failed runs
   - Check for JavaScript errors in canary logs
   - May indicate SPA not hydrating properly

---

## Maintenance Tasks

### Weekly Review
- Check dashboard for any sustained error rate elevation
- Review CloudFront cache hit ratio (should be > 80%)
- Verify Route53 health check passing

### Monthly Review
- Review CloudWatch costs
- Check S3 storage usage
- Verify SNS subscriptions are active

### After Deployments
- Watch for increased 4xx errors (missing files)
- Monitor canary success rate (LMN)
- Verify site loads correctly in browser

---

## Terraform Variables Reference

### monitoring object
```hcl
monitoring = {
  create                   = bool   # Master switch for all monitoring
  create_alarms            = bool   # Create CloudWatch alarms
  create_dashboards        = bool   # Create CloudWatch dashboard
  create_synthetics_canary = bool   # Create Synthetics canary (LMN only)
  notifications_enabled    = bool   # Enable SNS notifications
  dev_alerts_topic_name    = string # SNS topic for Slack
  devops_alerts_topic_name = string # SNS topic for critical alerts
  dashboard_period         = number # Dashboard refresh (seconds)
}
```

### monitoring_schedule object
```hcl
monitoring_schedule = {
  synthetics_canary_rate_minutes = number  # How often canary runs (5-60 min)
  unhealthy_alarm_period_minutes = number  # How long to tolerate "bad" before alarm
}
```

**How it works:**
- `synthetics_canary_rate_minutes` - How often the browser test runs (if enabled)
- `unhealthy_alarm_period_minutes` - Controls alarm sensitivity across all alarms
- Evaluation periods are auto-calculated: `unhealthy_alarm_period / metric_native_period`

**Example (LMN with 15 min canary rate, 15 min unhealthy period):**
- Canary runs every 15 min
- If unhealthy, alarm fires after 15 min (1 consecutive bad reading)
- CloudFront alarms also fire after 15 min (3 × 5-min periods)
- Route53 alarms fire after 15 min (15 × 1-min periods)

### alarm_thresholds object
```hcl
alarm_thresholds = {
  cloudfront_5xx_threshold = number  # CloudFront 5xx error rate %
  cloudfront_4xx_threshold = number  # CloudFront 4xx error rate %
}
```

---

## Cost Considerations

| Resource | Cost | Notes |
|----------|------|-------|
| Route53 Health Check | ~$0.50/month | Per health check |
| Synthetics Canary | ~$12/month | Only enabled in LMN |
| CloudWatch Alarms | ~$0.30/month | 4 alarms × $0.10 |
| CloudWatch Dashboard | Free | First 3 dashboards free |

**Total:** ~$1/month (DEV/STG) or ~$13/month (LMN with canary)

---

*Document Version: 2.0*
*Last Updated: 2026-01-24*
*Repository: spot-marketplace*
