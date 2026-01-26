# Spot Marketplace Infrastructure

Terraform/Terragrunt infrastructure for deploying Lumerin Spot Marketplace static website to AWS S3/CloudFront across multiple environments.

## Overview

This `.bedrock` directory contains the infrastructure code for the Lumerin Spot Marketplace UI. The infrastructure is co-located with the application code in the [spot-marketplace](https://github.com/lumerin-protocol/spot-marketplace) repository.

This provides:
- Infrastructure as Code alongside application code and CI/CD pipeline in a single repository
- Visibility into infrastructure configuration for developers
- Slack notifications when infrastructure changes (see `.github/workflows/infra-update.yml`)

## Architecture

The deployment architecture consists of:

- **Source Code & Infrastructure**: GitHub repository (`lumerin-protocol/spot-marketplace`)
- **Infrastructure**: Terraform/Terragrunt (this `.bedrock/` directory)
- **Deployment**: GitHub Actions with AWS OIDC authentication
- **Secrets**: AWS Secrets Manager
- **Storage**: AWS S3 (static assets)
- **CDN**: AWS CloudFront with WAF integration
- **DNS**: Route53 DNS records
- **Monitoring**: CloudWatch Alarms, Dashboards, Synthetics Canary, Route53 Health Checks

## Environments

| Environment | Directory | AWS Account | Purpose |
|-------------|-----------|-------------|---------|
| Development | `02-dev/` | titanio-dev | Development testing |
| Staging | `03-stg/` | titanio-stg | Pre-production validation |
| Production | `04-lmn/` | titanio-lmn | Production deployment |

## Deployment Flow

```
Code Change → GitHub Push (dev/stg/main)
    ↓
GitHub Actions: Generate Version Tag
    ↓
GitHub Actions: Build React Application
    ↓
GitHub Actions: Deploy to S3
    ↓
GitHub Actions: Invalidate CloudFront Cache
    ↓
GitHub Actions: Verify Deployment
    ↓
GitHub Actions: Create Git Tag & Release (main only)
```

## Quick Start

### Prerequisites

- Terraform >= 1.5
- Terragrunt >= 0.48
- AWS CLI configured with appropriate profiles
- Access to AWS accounts (dev/stg/lmn)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/lumerin-protocol/spot-marketplace.git
   cd spot-marketplace/.bedrock
   ```

2. **Configure AWS profiles**
   Ensure you have AWS profiles configured for:
   - `titanio-dev`
   - `titanio-stg` 
   - `titanio-lmn` (production)

3. **Deploy infrastructure**
   ```bash
   cd 02-dev
   terragrunt init
   terragrunt plan
   terragrunt apply
   ```

### Deploying Application Updates

Application deployments are **automated** via GitHub Actions:

1. **Development**: Push to `dev` branch
2. **Staging**: Push to `stg` branch
3. **Production**: Push to `main` branch

GitHub Actions will automatically:
- Build the React application with environment-specific configuration
- Deploy static assets to S3
- Invalidate CloudFront cache
- Verify deployment accessibility
- Create versioned git tag

### Manual Infrastructure Updates

To update infrastructure (not application code):

```bash
cd .bedrock/02-dev  # or 03-stg, 04-lmn
terragrunt plan
terragrunt apply
```

## Infrastructure Components

### Static Website Hosting

- **S3 Bucket**: Versioned storage for static assets with CloudFront OAC
- **CloudFront Distribution**: Global CDN with:
  - HTTP/2 and HTTP/3 support
  - WAF integration
  - TLS 1.2 minimum
  - SPA routing (400/403 → index.html)
- **Route53 DNS Records**:
  - `marketplace.{env}.lumerin.io` (website)
  - `s3marketplace.{env}.lumerin.io` (origin alias)

### Secrets Management

Secrets are stored in AWS Secrets Manager:

```
spot-marketplace-secrets-v3-{env}
```

The secret contains deployment configuration auto-populated by Terraform:
- S3 bucket name
- CloudFront distribution ID
- Marketplace URL
- AWS region

GitHub Actions reads this secret to retrieve deployment targets without manual configuration.

### IAM & Security

- **OIDC Provider**: Enables GitHub Actions to authenticate without long-lived credentials
- **Deployment Role**: `github-actions-spot-v3-{env}` assumed by GitHub Actions
- **Policies**: S3 sync, CloudFront invalidation, and Secrets Manager read access

### Monitoring

Controlled by the `monitoring` configuration block in `terraform.tfvars`:

#### Route53 Health Check
- Baseline reachability monitoring (HTTPS probe every 30s)
- Works correctly for low-traffic environments

#### CloudWatch Synthetics Canary (Production)
- Browser-based monitoring using Selenium
- Verifies SPA renders correctly
- Captures screenshots for debugging
- Configurable run frequency (5-60 minutes)

#### CloudWatch Alarms
- **Component Alarms** (state tracking only, no notifications):
  - `spot-ui-unreachable-{env}`: Route53 health check failing
  - `spot-ui-5xx-errors-{env}`: CloudFront 5xx error rate
  - `spot-ui-4xx-errors-{env}`: CloudFront 4xx error rate
  - `spot-ui-canary-failed-{env}`: Synthetics canary failures (prod only)
- **Composite Alarm** (sends notifications):
  - `spot-ui-{env}`: Aggregates all component alarms

#### CloudWatch Dashboard
- Alarm status overview
- CloudFront request and bandwidth metrics
- Error rate graphs with thresholds
- Route53 health check status
- Cache hit rate and origin latency
- Canary success rate and duration (when enabled)

## Configuration

### Main Variables

Key variables in `terraform.tfvars`:

```hcl
# Environment
account_shortname = "titanio-dev"
account_lifecycle = "dev"
default_region    = "us-east-1"

# Feature Toggle
create_marketplace_s3cf = true

# Monitoring
monitoring = {
  create                   = true
  create_alarms            = true
  create_dashboards        = true
  create_synthetics_canary = false  # true for production
  notifications_enabled    = false  # true to send SNS alerts
  dev_alerts_topic_name    = "titanio-dev-dev-alerts"
  devops_alerts_topic_name = "titanio-dev-dev-alerts"
  dashboard_period         = 300
}

# Monitoring Schedule
monitoring_schedule = {
  synthetics_canary_rate_minutes = 15  # Canary run frequency
  unhealthy_alarm_period_minutes = 15  # Alarm tolerance period
}

# Alarm Thresholds
alarm_thresholds = {
  cloudfront_5xx_threshold = 5   # Percentage
  cloudfront_4xx_threshold = 10  # Percentage
}
```

## GitHub Actions Setup

### Required Secrets

Configure these in the spot-marketplace GitHub repository settings:

**Development Environment:**
- `AWS_ROLE_ARN_DEV` - IAM role ARN (output from Terraform)

**Staging Environment:**
- `AWS_ROLE_ARN_STG` - IAM role ARN (output from Terraform)

**Production Environment:**
- `AWS_ROLE_ARN_LMN` - IAM role ARN (output from Terraform)

**Shared:**
- `SLACK_WEBHOOK_URL` - For deployment notifications

### Environment Variables

Each GitHub Environment (dev/stg/main) should have these variables configured:
- `REACT_APP_CHAIN_ID`
- `REACT_APP_CLONE_FACTORY`
- `REACT_APP_ETHERSCAN_URL`
- `REACT_APP_INDEXER_URL`
- And other application-specific configuration

### Terraform Outputs

After applying Terraform, get the role ARN:

```bash
terragrunt output github_actions_role_arn
```

Add this ARN to GitHub secrets for the corresponding environment.

## Versioning

The project uses semantic versioning:

- **Production (main)**: `v3.1.0`
- **Staging (stg)**: `v3.0.5-stg`
- **Development (dev)**: `v3.0.5-dev`

Versions are automatically generated by GitHub Actions based on:
- Branch name
- Commit count since merge base
- Manual version bumps in workflow config

## Troubleshooting

### Deployment Fails

1. Check GitHub Actions logs in spot-marketplace repository
2. Verify IAM role trust policy includes the correct branch
3. Check AWS Secrets Manager for correct deployment config
4. Verify S3 bucket and CloudFront distribution exist

### Site Not Accessible

1. Check Route53 health check status in AWS Console
2. Verify CloudFront distribution is enabled
3. Check CloudFront distribution aliases match DNS records
4. Review CloudWatch Logs for errors

### Alarms Firing

1. Check CloudWatch Dashboard for metrics overview
2. Review component alarm details for root cause
3. Check Synthetics Canary screenshots (if enabled)
4. Verify S3 bucket contains expected files

### Terraform State Locked

```bash
terragrunt force-unlock <lock-id>
```

## Maintenance

### Scaling

CloudFront automatically scales. For cache optimization, adjust TTL values in `04_market_cloudfront.tf`:

```hcl
min_ttl     = 0
default_ttl = 600
max_ttl     = 1200
```

### Updating Monitoring Thresholds

Edit `terraform.tfvars` and apply:

```hcl
alarm_thresholds = {
  cloudfront_5xx_threshold = 3   # Stricter threshold
  cloudfront_4xx_threshold = 5
}
```

```bash
terragrunt apply
```

### Destroying Environment

**⚠️ CAUTION: This will destroy all resources!**

```bash
cd 02-dev  # Choose appropriate environment
terragrunt destroy
```

## Directory Structure

```
.bedrock/
├── .terragrunt/                    # Terraform modules
│   ├── 00_*.tf                     # Variables, providers, data sources, outputs
│   ├── 01_secrets_manager.tf       # AWS Secrets Manager
│   ├── 02_github_actions_iam.tf    # IAM roles and policies for CI/CD
│   ├── 04_market_cloudfront.tf     # CloudFront distribution and DNS
│   ├── 04_market_s3_static.tf      # S3 bucket for static assets
│   ├── 70_monitoring_common.tf     # Monitoring locals, Route53 health check, IAM
│   ├── 72_synthetics_canary.tf     # CloudWatch Synthetics Canary
│   ├── 80_alarms.tf                # Component CloudWatch alarms
│   ├── 81_composite_alarms.tf      # Composite CloudWatch alarms
│   ├── 89_dashboards.tf            # CloudWatch dashboards
│   └── manage/                     # Maintenance page templates
├── 02-dev/                         # Development environment
│   ├── terraform.tfvars            # Environment config
│   └── terragrunt.hcl              # Terragrunt config
├── 03-stg/                         # Staging environment
├── 04-lmn/                         # Production environment
├── root.hcl                        # Terragrunt root config
└── README.md                       # This documentation
```

## Environment URLs

| Environment | URL |
|-------------|-----|
| DEV | `https://marketplace.dev.lumerin.io` |
| STG | `https://marketplace.stg.lumerin.io` |
| PRD | `https://marketplace.lumerin.io` |

## Support

For issues related to:
- **Infrastructure or Application Code**: Create issue in [spot-marketplace](https://github.com/lumerin-protocol/spot-marketplace)
- **Deployment Issues**: Check GitHub Actions logs and CloudWatch metrics

## Contributing

1. Create feature branch from `dev`
2. Make changes (application code and/or infrastructure)
3. Test in development environment
4. Submit pull request
5. Deploy to staging for validation
6. Deploy to production after approval

## License

See LICENSE file in the repository root.
