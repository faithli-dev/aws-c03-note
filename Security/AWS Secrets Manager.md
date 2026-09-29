# AWS Secrets Manager

A newer service meant for storing secrets.

## Characteristics

- Capability to force rotation of secrets every X days.
- Automates generation of secrets on rotation using Lambda.
- Integration with Amazon RDS (MySQL, PostgreSQL, Aurora).
- Secrets are encrypted using KMS.
- Mostly meant for RDS integration.

![[SAA-v48-p668-secrets-manager.png]]

## Multi-Region Secrets

- Replicate secrets across multiple AWS Regions.
- Secrets Manager keeps read replicas in sync with the primary secret.
- Ability to promote a read replica secret to a standalone secret.
- Use cases: multi-Region apps, disaster recovery strategies, multi-Region databases.

## Related

- [[Security/Secrets and Certificates]]
- [[Security/SSM Parameter Store]]
- [[Database/RDS/RDS]]

Source slides: pp. 668-669.
