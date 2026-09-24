# Object Storage: Amazon S3

Amazon S3 is an object store rather than a transactional database. It stores objects in buckets and is the AWS choice for large unstructured data, backups, media, static files, data lakes, and archives.

## Data Model

- A bucket stores objects; each object has a key, metadata, and optional tags.
- Objects are addressed by key and are not queried with relational joins.
- Versioning, lifecycle rules, replication, encryption, and Object Lock provide durability and governance.

## When to Choose S3

- Store large files or objects at very high scale.
- Build a data lake and query the data with Athena.
- Keep backups and archives in S3 and Glacier storage classes.
- Host static website assets or receive event-driven uploads.

For object lifecycle, security, and performance details, see [[Storage/S3/S3]], [[Storage/S3/S3 Advanced]], and [[Storage/S3/S3 Security]].

## Exam Distinction

Use S3 for objects and files. Use RDS or Aurora for relational transactions, DynamoDB for key-value access, and a specialized database when the data model requires search, graph, time-series, or ledger behavior.

Source slides: pp. 515 and 520.
