# S3 Performance

## Baseline

- Amazon S3 automatically scales to high request rates with latency of 100-200 ms.
- At least 3,500 PUT/COPY/POST/DELETE or 5,500 GET/HEAD requests per second **per prefix** in a bucket.
- There is no limit to the number of prefixes in a bucket.
- Spreading reads evenly across four prefixes can achieve 22,000 requests per second for GET and HEAD.

Prefix examples:

- `bucket/folder1/sub1/file` → `/folder1/sub1/`
- `bucket/folder1/sub2/file` → `/folder1/sub2/`
- `bucket/1/file` → `/1/`
- `bucket/2/file` → `/2/`

## Multi-Part Upload

- Recommended for files over 100 MB; must be used for files over 5 GB.
- Parallelises uploads to speed up transfers.

## S3 Transfer Acceleration

- Increases transfer speed by sending the file to an AWS edge location, which forwards data to the S3 bucket in the target Region.
- Compatible with multi-part upload.

![[SAA-v48-p304-s3-performance.png]]

## Byte-Range Fetches

- Parallelise GETs by requesting specific byte ranges.
- Better resilience in case of failures.
- Can speed up downloads and retrieve only partial data, such as the head of a file.

![[SAA-v48-p305-byte-range-fetches.png]]

## Related

- [[Storage/S3/S3]]
- [[Network/CloudFront]]
- [[Storage/S3/S3 Batch Operations]]

Source slides: pp. 303-305.
