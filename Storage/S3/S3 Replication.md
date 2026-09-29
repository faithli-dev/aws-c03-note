# S3 Replication

## Types

- **Cross-Region Replication (CRR)** – replicate to a bucket in another Region.
- **Same-Region Replication (SRR)** – replicate to a bucket in the same Region.

## Requirements

- Versioning must be enabled on the source and destination buckets.
- Buckets can be in different AWS accounts.
- Copying is asynchronous.
- Proper IAM permissions must be given to S3.

![[SAA-v48-p282-s3-replication.png]]

## Use Cases

- **CRR** – compliance, lower latency access, replication across accounts.
- **SRR** – log aggregation, live replication between production and test accounts.

## Notes

- After enabling replication, only new objects are replicated.
- Optionally replicate existing objects using S3 Batch Replication, which also replicates objects that failed replication.
- DELETE operations: delete markers can be replicated from source to target (optional). Deletions with a version ID are not replicated, to avoid malicious deletes.
- There is no chaining of replication: if bucket 1 replicates to bucket 2 and bucket 2 to bucket 3, objects in bucket 1 are not replicated to bucket 3.

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Versioning]]
- [[Storage/S3/S3 Batch Operations]]

Source slides: pp. 282-283.
