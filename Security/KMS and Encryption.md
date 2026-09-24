# AWS KMS and Encryption

## Encryption Models

- In transit: TLS encrypts data before transmission and protects against interception.
- At rest: an AWS service encrypts stored data and uses a data key protected by KMS.
- Client side: the client encrypts data before sending it; the storage service cannot decrypt it.
- Envelope encryption uses a data key for the payload and a KMS key to protect the data key.

![[SAA-v48-p649-kms-overview.png]]

## KMS

- Symmetric keys are used by most AWS service integrations. Asymmetric keys support public/private encryption or signing.
- Key policies are required to control access to KMS keys. IAM policies alone do not grant access unless the key policy permits the account or principal.
- Customer managed keys support custom rotation, grants, cross-account access, and audit through CloudTrail.
- Multi-Region keys have related key material in several Regions but remain separately managed regional keys.
- KMS protects EBS, S3, RDS, SQS, DynamoDB, SSM, and many other services.
- Sharing encrypted snapshots, AMIs, or S3 replication across accounts requires both KMS key policy permissions and the relevant service permissions.

![[SAA-v48-p661-s3-kms-replication.png]]

CloudHSM provides single-tenant, customer-controlled hardware security modules. Use it when control of the HSM and key material or specialized compliance requirements exceed the managed KMS model.

Source slides: pp. 648-663 and 676-681.
