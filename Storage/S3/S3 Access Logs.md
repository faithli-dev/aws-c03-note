# S3 Access Logs

For audit purposes, all access to S3 buckets can be logged.

## Behaviour

- Any request made to S3, from any account, authorised or denied, is logged into another S3 bucket.
- The data can be analysed with data analysis tools.
- The target logging bucket must be in the same AWS Region.

![[SAA-v48-p327-access-logs.png]]

## Warning

Do not set the logging bucket to be the monitored bucket. This creates a logging loop and the bucket grows exponentially.

## Related

- [[Storage/S3/S3]]
- [[Monitoring/Audit and Config]]
- [[Storage/S3/S3 Storage Lens]]

Source slides: pp. 327-328.
