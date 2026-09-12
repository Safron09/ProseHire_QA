variable "account_id" {
  description = "Expected AWS account id (practice account) - set via TF_VAR_account_id in .env, never hardcoded here."
  type        = string
}

variable "vpc_cidr" {
  description = "CIDR block for the practice VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "provider_region" {
  description = "AWS region for the provider"
  type        = string
  default     = "us-east-1"
}

variable "sshport" {
  description = "Port for SSH access"
  type        = number
  default     = 22
}

variable "enabled" {
  description = "Whether to enable the VPC and related resources"
  type        = bool
  default     = true
}

variable "list" {
  description = "A list of strings"
  type        = list(string)
  default     = ["firwall1", "firewall2", "firewall3"]
}

variable "map" {
  description = "A map of strings"
  type        = map(string)
  default = {
    key1 = "value1"
    key2 = "value2"
    key3 = "value3"
  }
}

variable "vpc" {
  description = "Mock structured input for a VPC"
  type = object({
    name        = string
    cidr_block  = string
    dns_support = bool
    tags        = map(string)
  })
  default = {
    name        = "mock-vpc"
    cidr_block  = "10.1.0.0/16"
    dns_support = true
    tags = {
      Environment = "practice"
    }
  }
}

output "vpc_id" {
  description = "The ID of the created VPC"
  value       = aws_vpc.main.id
}

variable "vpctuple" {
  type = tuple([string, number, bool])
  default = ["example", 42, true]
}

variable "vpcobject" {
  type = object({name = string, cidr = string, enable_dns = bool})
  default = {
    name = "example", 
    cidr = "10.0.0.0/16",
  }
}
