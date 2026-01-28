
#Create Switches for Lumerin Marketplace and Indexer / proxy-router-ui  
create_marketplace_s3cf      = true

########################################
# Monitoring Configuration
########################################
monitoring = {
  create                    = true
  create_alarms             = true
  create_dashboards         = true
  create_synthetics_canary  = true  # Canary only in production
  notifications_enabled     = true  # Enable when needed
  dev_alerts_topic_name     = "titanio-stg-dev-alerts"
  devops_alerts_topic_name  = "titanio-stg-dev-alerts"
  dashboard_period          = 300
}

# STG environment - moderate frequency and tolerance
monitoring_schedule = {
  synthetics_canary_rate_minutes = 30  # If canary enabled, run every 30 min
  unhealthy_alarm_period_minutes = 30  # How long to tolerate "bad" before alarm triggers
}

# STG environment - moderate thresholds
alarm_thresholds = {
  cloudfront_5xx_threshold = 3
  cloudfront_4xx_threshold = 8
}

########################################
# Shared Contract Addresses
########################################
# Note: ethereum_rpc_url is defined in secret.auto.tfvars (contains API key)
# Contract addresses for the environment
# DEV uses Arbitrum Sepolia testnet, STG/LMN use Arbitrum mainnet
clone_factory_address   = "0xb5838586b43b50f9a739d1256a067859fe5b3234"
hashrate_oracle_address = "0x2c1db79d2f3df568275c940dac81ad251871faf4"
futures_address         = "0xe11594879beb6c28c67bc251aa5e26ce126b82ba"
multicall_address       = "0xcA11bde05977b3631167028862bE2a173976CA11"


########################################
# Account metadata
########################################
provider_profile  = "titanio-stg"  # Local account profile ... should match account_shortname..kept separate for future ci/cd
account_shortname = "titanio-stg"  # shortname account code 7 digit + 3 digit eg: titanio-mst, titanio-inf, or rhodium-prd
account_number    = "464450398935" # 12 digit account number 
account_lifecycle = "stg"          # [sbx, dev, stg, prd] -used for NACL and other reference
default_region    = "us-east-1"
region_shortname  = "use1"

########################################
# Environment Specific Variables
#######################################
vpc_index            = 1
devops_keypair       = "bedrock-titanio-stg-use1"
titanio_net_edge_vpn = "172.18.16.0/20"
protect_environment  = false
ecs_task_role_arn    = "arn:aws:iam::464450398935:role/ecsTaskExecutionRole" # "arn:aws:iam::330280307271:role/services/bedrock-cicd-lmntkndstui" #

# Default tag values common across all resources in this account.
# Values can be overridden when configuring a resource or module.
default_tags = {
  ServiceOffering = "Cloud Foundation"
  Department      = "DevOps"
  Environment     = "stg"
  Owner           = "aws-titanio-stg@titan.io" #AWS Account Email Address 092029861612 | aws-sandbox@titan.io | OrganizationAccountAccessRole 
  Scope           = "Global"
  CostCenter      = null
  Compliance      = null
  Classification  = null
  Repository      = "https://github.com/Lumerin-protocol/spot-marketplace.git//bedrock/03-stg"
  ManagedBy       = "Terraform"
}

# Default Tags for Cloud Foundation resources
foundation_tags = {
  Name          = null
  Capability    = null
  Application   = "Lumerin Spot Marketplace - STG"
  LifecycleDate = null
}