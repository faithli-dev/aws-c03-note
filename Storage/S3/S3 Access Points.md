# S3 Access Points

Access Points simplify security management for S3 buckets.

## Behaviour

- Each access point has its own DNS name (Internet origin or VPC origin).
- Each access point has an access point policy, similar to a bucket policy, so security can be managed at scale.

![[SAA-v48-p332-access-points.png]]

## Example

- A finance access point with a policy granting read/write to the `/finance` prefix.
- A sales access point with a policy granting read/write to the `/sales` prefix.
- An analytics access point with a policy granting read to the entire bucket.

## VPC Origin

- Define an access point to be accessible only from within a VPC.
- You must create a VPC endpoint (gateway or interface) to access the access point.
- The VPC endpoint policy must allow access to the target bucket and access point.

## Related

- [[Storage/S3/S3 Security and Access]]
- [[Storage/S3/S3 Bucket Policies]]
- [[Network/VPC/VPC Endpoints]]

Source slides: pp. 332-333.
