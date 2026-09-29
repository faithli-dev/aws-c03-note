# S3 Object Encryption

Objects in S3 buckets can be encrypted using one of four methods.

## Server-Side Encryption (SSE)

### SSE-S3

- Keys handled, managed, and owned by AWS.
- Object is encrypted server-side.
- Encryption type is AES-256.
- Must set the header `"x-amz-server-side-encryption": "AES256"`.
- Enabled by default for new buckets and new objects.

### SSE-KMS

- Keys handled and managed by AWS KMS.
- KMS advantages: user control and audit of key usage using CloudTrail.
- Object is encrypted server-side.
- Must set the header `"x-amz-server-side-encryption": "aws:kms"`.
- Limitation: uploads call `GenerateDataKey` and downloads call `Decrypt`, which count towards the KMS quota per second (5,500, 10,000, or 30,000 req/s depending on Region). Request a quota increase using the Service Quotas Console.

### SSE-C

- Keys fully managed by the customer outside of AWS.
- Amazon S3 does **not** store the encryption key you provide.
- HTTPS must be used.
- The encryption key must be provided in HTTP headers for every request.

## Client-Side Encryption

- Use client libraries such as the Amazon S3 Client-Side Encryption Library.
- Clients encrypt data before sending to S3 and decrypt it when retrieving.
- The customer fully manages the keys and encryption cycle.

![[SAA-v48-p314-object-encryption.png]]

## Encryption in Transit (SSL/TLS)

- S3 exposes an HTTP endpoint (unencrypted) and an HTTPS endpoint (encryption in flight).
- HTTPS is recommended and mandatory for SSE-C.
- Most clients use the HTTPS endpoint by default.

## Forcing Encryption

- `aws:SecureTransport` in a bucket policy rejects HTTP requests.
- SSE-S3 is automatically applied to new objects.
- A bucket policy can force encryption by refusing any PUT without encryption headers (SSE-KMS or SSE-C).
- Bucket policies are evaluated before default encryption.

## Related

- [[Storage/S3/S3 Security and Access]]
- [[Security/KMS and Encryption]]
- [[Storage/S3/S3 Bucket Policies]]

Source slides: pp. 314-322.
