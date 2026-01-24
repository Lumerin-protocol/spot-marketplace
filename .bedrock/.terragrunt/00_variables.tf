################################################################################
# VARIABLES 
################################################################################
# All variables set in ./terraform.tfvars must be initialized here
# Any of these variables can be used in any of this environment's .tf files

variable "create_marketplace_s3cf" {
  description = "Decide whether or not to create the Marketplace Website environment "
  type        = bool
  default     = false
}

################################################################################
# SHARED INFRASTRUCTURE (used across multiple services)
################################################################################

variable "ethereum_rpc_url" {
  description = "Ethereum RPC URL (used by oracle lambda, indexer, and margin call)"
  type        = string
  sensitive   = true
  default     = ""
}

################################################################################
# SHARED CONTRACT ADDRESSES (used across multiple services)
################################################################################

variable "clone_factory_address" {
  description = "Clone Factory contract address (used by indexer)"
  type        = string
  default     = ""
}

variable "hashrate_oracle_address" {
  description = "Hashrate Oracle contract address (used by oracle lambda, indexer, and margin call)"
  type        = string
  default     = ""
}

variable "futures_address" {
  description = "Futures Marketplace contract address (used by margin call lambda)"
  type        = string
  default     = ""
}

variable "multicall_address" {
  description = "Multicall3 contract address (same address on all EVM chains)"
  type        = string
  default     = ""
}

################################################################################
# MONITORING CONFIGURATION
################################################################################

variable "monitoring" {
  description = "Monitoring configuration for alarms, dashboards, and health checks"
  type = object({
    create                    = bool
    create_alarms             = bool
    create_dashboards         = bool
    create_synthetics_canary  = bool    # Synthetics canary for UI (production only)
    notifications_enabled     = bool    # Set false to disable SNS notifications (alarms still visible in console)
    dev_alerts_topic_name     = string  # Slack notifications
    devops_alerts_topic_name  = string  # Cell phone (critical, prod only)
    dashboard_period          = number
  })
  default = {
    create                    = false
    create_alarms             = false
    create_dashboards         = false
    create_synthetics_canary  = false
    notifications_enabled     = false
    dev_alerts_topic_name     = ""
    devops_alerts_topic_name  = ""
    dashboard_period          = 300
  }
}

variable "alarm_thresholds" {
  description = "Environment-specific alarm thresholds (relaxed for dev/stg, strict for prod)"
  type = object({
    cloudfront_5xx_threshold = number  # Percentage
    cloudfront_4xx_threshold = number  # Percentage
  })
  default = {
    cloudfront_5xx_threshold = 5
    cloudfront_4xx_threshold = 10
  }
}

########################################
# Common Account Variables
########################################
variable "account_shortname" { description = "Code describing customer  and lifecycle. E.g., mst, sbx, dev, stg, prd" }
variable "account_lifecycle" {
  description = "environment lifecycle, can be 'prod', 'nonprod', 'sandbox'...dev and stg are considered nonprod"
  type        = string
}
variable "account_number" {}
variable "default_region" {}
variable "region_shortname" {
  description = "Region 4 character shortname"
  default     = "use1"
}
variable "vpc_index" {}
variable "devops_keypair" {}
variable "titanio_net_edge_vpn" {}
variable "protect_environment" {}
variable "ecs_task_role_arn" {}
variable "default_tags" {
  description = "Default tag values common across all resources in this account. Values can be overridden when configuring a resource or module."
  type        = map(string)
}
variable "foundation_tags" {
  description = "Default Tags for Bedrock Foundation resources"
  type        = map(string)
}
variable "provider_profile" {
  description = "Provider config added for use in aws_config.tf"
}