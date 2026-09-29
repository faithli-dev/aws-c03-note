# S3 Security and Access

## User-Based

- **IAM Policies** – which API calls are allowed for a specific user from IAM.

## Resource-Based

- **Bucket Policies** – bucket-wide rules from the S3 console; allows cross-account access.
- **Object Access Control List (ACL)** – finer grained; can be disabled.
- **Bucket Access Control List (ACL)** – less common; can be disabled.

## Access Evaluation

An IAM principal can access an S3 object if:

- The user IAM permissions ALLOW it **OR** the resource policy ALLOWS it, **AND**
- There is no explicit DENY.

## Encryption

Objects can be encrypted in Amazon S3 using encryption keys. See [[Storage/S3/S3 Object Encryption]].

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Bucket Policies]]
- [[Storage/S3/S3 Block Public Access]]

Source slides: pp. 273-279.
