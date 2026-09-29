# CloudHSM

## KMS vs CloudHSM

- **KMS** – AWS manages the software for encryption.
- **CloudHSM** – AWS provisions encryption hardware.

## Characteristics

- Dedicated hardware (HSM = Hardware Security Module).
- You manage your own encryption keys entirely, not AWS.
- The HSM device is tamper resistant and FIPS 140-2 Level 3 compliant.
- Supports both symmetric and asymmetric encryption (SSL/TLS keys).
- No free tier.
- Must use the CloudHSM client software.
- Redshift supports CloudHSM for database encryption and key management.
- A good option to use with SSE-C encryption.

![[SAA-v48-p676-cloudhsm.png]]

## High Availability

CloudHSM clusters are spread across multiple AZs for availability and durability.

## Integration with AWS Services

- Through integration with AWS KMS: configure a KMS custom key store with CloudHSM.
- Examples: EBS, S3, RDS.
- Key usage logs go to CloudTrail.

## CloudHSM vs KMS

| Feature | AWS KMS | AWS CloudHSM |
|---|---|---|
| Tenancy | Multi-tenant | Single-tenant |
| Standard | FIPS 140-2 Level 3 | FIPS 140-2 Level 3 |
| Master keys | AWS owned, AWS managed, customer managed | Customer managed |
| Key types | Symmetric, asymmetric, digital signing | Symmetric, asymmetric, digital signing and hashing |
| Key accessibility | Accessible in multiple Regions (cannot access keys outside the Region created) | Deployed and managed in a VPC; can be shared across VPCs with peering |
| Cryptographic acceleration | None | SSL/TLS acceleration, Oracle TDE acceleration |
| Access and authentication | AWS IAM | You create users and manage their permissions |

## Related

- [[Security/KMS and Encryption]]
- [[Security/KMS Keys Types]]
- [[Security/Secrets and Certificates]]

Source slides: pp. 676-681.
