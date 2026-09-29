# S3 Storage Classes

## Classes

- Amazon S3 Standard – general purpose
- Amazon S3 Standard-Infrequent Access (IA)
- Amazon S3 One Zone-Infrequent Access
- Amazon S3 Glacier Instant Retrieval
- Amazon S3 Glacier Flexible Retrieval
- Amazon S3 Glacier Deep Archive
- Amazon S3 Intelligent-Tiering

Objects can move between classes manually or using S3 Lifecycle configurations.

## Durability and Availability

- **Durability** – 99.999999999% (11 nines) across multiple AZs, the same for all storage classes. Storing 10,000,000 objects means losing a single object once every 10,000 years on average.
- **Availability** – how readily available the service is; varies by storage class. S3 Standard has 99.99% availability, which means about 53 minutes unavailable per year.

![[SAA-v48-p285-durability-availability.png]]

## S3 Standard

- 99.99% availability.
- For frequently accessed data.
- Low latency and high throughput.
- Sustains 2 concurrent facility failures.
- Use cases: big data analytics, mobile and gaming applications, content distribution.

## Infrequent Access

- For data less frequently accessed but requiring rapid access.
- Lower cost than S3 Standard.
- **S3 Standard-IA** – 99.9% availability; use cases: disaster recovery, backups.
- **S3 One Zone-IA** – high durability in a single AZ, but data is lost when the AZ is destroyed; 99.5% availability; use cases: secondary backup copies or recreatable data.

## Glacier

Low-cost object storage for archiving and backup. Pricing is storage plus object retrieval cost.

- **Glacier Instant Retrieval** – millisecond retrieval, for data accessed once a quarter. Minimum storage duration 90 days.
- **Glacier Flexible Retrieval** – Expedited (1-5 minutes), Standard (3-5 hours), Bulk (5-12 hours, free). Minimum storage duration 90 days.
- **Glacier Deep Archive** – long-term storage. Standard (12 hours), Bulk (48 hours). Minimum storage duration 180 days.

## S3 Intelligent-Tiering

- Small monthly monitoring and auto-tiering fee.
- Moves objects automatically between access tiers based on usage.
- No retrieval charges.
- Tiers: Frequent Access (default), Infrequent Access (30 days), Archive Instant Access (90 days), Archive Access (optional, 90-700+ days), Deep Archive Access (optional, 180-700+ days).

![[SAA-v48-p284-s3-storage-classes.png]]

## Comparison

![[SAA-v48-p290-storage-class-comparison.png]]

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Lifecycle Rules]]
- [[Storage/S3/S3 Express One Zone]]

Source slides: pp. 284-291.
