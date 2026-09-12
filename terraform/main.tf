terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

variable "account_id" {
  description = "Expected AWS account id (practice account) - set via TF_VAR_account_id in .env, never hardcoded here."
  type        = string
}

data "aws_caller_identity" "current" {}

resource "terraform_data" "account_guard" {
  lifecycle {
    precondition {
      condition     = data.aws_caller_identity.current.account_id == var.account_id
      error_message = "Wrong AWS account active - expected the practice account (${var.account_id}), got ${data.aws_caller_identity.current.account_id}. Check AWS_PROFILE / direnv."
    }
  }
}
