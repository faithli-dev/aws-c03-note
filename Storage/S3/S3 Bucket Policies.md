# S3 Bucket Policies

S3 bucket policies are JSON-based resource policies attached to a bucket.

## Elements

- **Resources** – buckets and objects.
- **Effect** – Allow or Deny.
- **Actions** – set of APIs to allow or deny.
- **Principal** – the account or user the policy applies to.

![[SAA-v48-p274-bucket-policy.png]]

## Use Cases

- Grant public access to the bucket.
- Force objects to be encrypted at upload.
- Grant access to another account (cross-account access).

## Examples

- **Public access** – an anonymous website visitor reads objects because the bucket policy allows public access.
- **User access to S3** – an IAM policy grants an IAM user access.
- **EC2 instance access** – use an IAM role, not keys.
- **Cross-account access** – an IAM user in another AWS account is granted access by the bucket policy.

## Related

- [[Storage/S3/S3 Security and Access]]
- [[Storage/S3/S3]]
- [[Security/Role Based/IAM Permission Policies]]

Source slides: pp. 274-278.
