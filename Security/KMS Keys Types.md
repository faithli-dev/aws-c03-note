# KMS Keys Types

KMS Keys is the new name for KMS Customer Master Keys.

## Symmetric (AES-256)

- A single encryption key used to encrypt and decrypt.
- AWS services integrated with KMS use symmetric keys.
- You never get access to the KMS key unencrypted; you must call the KMS API to use it.

## Asymmetric (RSA & ECC key pairs)

- A public key (encrypt) and private key (decrypt) pair.
- Used for encrypt/decrypt or sign/verify operations.
- The public key is downloadable, but the private key is never accessible unencrypted.
- Use case: encryption outside of AWS by users who cannot call the KMS API.

![[SAA-v48-p653-kms-key-types.png]]

## Key Types and Pricing

- **AWS Owned Keys** (free) – SSE-S3, SSE-SQS, SSE-DynamoDB default keys.
- **AWS Managed Keys** (free) – `aws/service-name`, for example `aws/rds` or `aws/ebs`.
- **Customer Managed Keys created in KMS** – $1 per month.
- **Customer Managed Keys imported** – $1 per month.
- Plus pay per API call to KMS ($0.03 per 10,000 calls).

## Automatic Key Rotation

- AWS-managed KMS key: automatic every 1 year.
- Customer-managed KMS key: automatic and on-demand (must be enabled).
- Imported KMS key: only manual rotation using an alias.

## KMS Key Policies

- Control access to KMS keys, similar to S3 bucket policies.
- Difference: you cannot control access without them.
- **Default KMS Key Policy** – created if you do not provide a specific policy; gives complete access to the key to the root user (the entire AWS account).
- **Custom KMS Key Policy** – define users and roles that can access the key, define who can administer the key, and useful for cross-account access.

## Copying Snapshots Across Regions and Accounts

- Copying a snapshot across Regions re-encrypts it with a KMS key in the target Region.
- Copying across accounts:
	1. Create a snapshot encrypted with your own customer managed key.
	2. Attach a KMS key policy to authorise cross-account access.
	3. Share the encrypted snapshot.
	4. In the target account, copy the snapshot and encrypt it with a customer managed key in that account.
	5. Create a volume from the snapshot.

## AMI Sharing Encrypted via KMS

1. The AMI in the source account is encrypted with a KMS key from the source account.
2. Modify the image attribute to add a launch permission for the target AWS account.
3. Share the KMS keys used to encrypt the snapshot the AMI references with the target account or IAM role.
4. The IAM role or user in the target account must have permissions to `DescribeKey`, `ReEncrypt*`, `CreateGrant`, and `Decrypt`.
5. When launching an EC2 instance from the AMI, the target account can optionally specify a new KMS key in its own account to re-encrypt the volumes.

## Related

- [[Security/KMS and Encryption]]
- [[Security/KMS Multi-Region Keys]]

Source slides: pp. 653-657, 663.
