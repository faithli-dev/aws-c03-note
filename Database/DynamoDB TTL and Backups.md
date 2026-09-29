# DynamoDB TTL and Backups

## Time To Live (TTL)

- Automatically deletes items after an expiry timestamp.
- Use cases: reduce stored data by keeping only current items, adhere to regulatory obligations, web session handling.

![[SAA-v48-p475-ttl.png]]

## Backups for Disaster Recovery

### Continuous Backups (Point-in-Time Recovery)

- Optionally enabled for the last 35 days.
- Point-in-time recovery to any time within the backup window.
- The recovery process creates a new table.

### On-Demand Backups

- Full backups for long-term retention until explicitly deleted.
- Does not affect performance or latency.
- Can be configured and managed in AWS Backup, which enables cross-Region copy.
- The recovery process creates a new table.

## Integration with Amazon S3

- **Export to S3** (requires PITR): works for any point in time in the last 35 days, does not affect read capacity, supports analysis, auditing snapshots, and ETL on S3 data before importing back. Export formats are DynamoDB JSON or ION.
- **Import from S3**: import CSV, DynamoDB JSON, or ION; does not consume write capacity; creates a new table; import errors are logged in CloudWatch Logs.

## Related

- [[Database/DynamoDB]]
- [[Disaster Recovery/AWS Backup]]
- [[Storage/S3/S3]]

Source slides: pp. 475-477.
