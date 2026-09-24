# Amazon S3 Security

## Encryption

- SSE-S3 uses keys managed by Amazon S3.
- SSE-KMS uses AWS KMS keys and provides key policy control plus CloudTrail audit events; account and KMS request quotas can matter at high request rates.
- SSE-C uses a customer-provided key that S3 does not store.
- Client-side encryption encrypts data before it reaches S3.
- TLS protects data in transit. A bucket policy using `aws:SecureTransport` can deny unencrypted requests.

## Protection and Access Patterns

- Default encryption protects new objects; a bucket policy can also require a particular encryption header.
- CORS controls browser requests from another origin; configure only the origins, methods, and headers required by the application.
- MFA Delete adds a second factor for version deletion and versioning changes.
- Server access logs record requests. Send them to a separate logging bucket to avoid a logging loop.
- Object Lock and Glacier Vault Lock provide WORM retention. Object Lock requires versioning.

![[SAA-v48-p661-s3-kms-replication.png]]

## Review Tools

- Access Points simplify separate application permissions and can restrict access to a VPC origin.
- S3 Object Lambda changes the response through Lambda without changing the stored object.
- Review Block Public Access, bucket policies, IAM policies, ACLs, and access point policies together; the most restrictive explicit deny wins.

Source slides: pp. 313-334.
