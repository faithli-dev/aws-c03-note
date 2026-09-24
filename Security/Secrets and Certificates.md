# Secrets, Parameters, and Certificates

## SSM Parameter Store

- Stores configuration and secrets in a hierarchical path.
- Standard parameters are free and smaller; advanced parameters support larger values and parameter policies.
- SecureString uses KMS. IAM controls reads, and EventBridge can notify on expiration or no-change policies.
- Parameter Store integrates with EC2, Lambda, ECS, CloudFormation, and deployment tools.

![[SAA-v48-p664-parameter-store.png]]

## Secrets Manager

- Stores sensitive secrets with KMS encryption and automatic rotation.
- Rotation uses Lambda and integrates directly with RDS, Aurora, and other databases.
- Multi-Region secrets keep read replicas synchronized for regional applications and recovery.

## ACM and CloudHSM

- AWS Certificate Manager provisions and renews public and private TLS certificates.
- DNS validation is preferred for automated renewal. Imported certificates must be renewed and re-imported by the customer.
- ACM integrates with ALB, NLB, CloudFront, and API Gateway.
- CloudHSM is dedicated, customer-managed cryptographic hardware. KMS can use a CloudHSM custom key store.

![[SAA-v48-p670-acm.png]]

Source slides: pp. 664-681.
