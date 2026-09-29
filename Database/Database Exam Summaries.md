# Database Exam Summaries

Quick revision summaries of the core AWS databases.

## Amazon RDS

- Managed PostgreSQL / MySQL / Oracle / SQL Server / DB2 / MariaDB / Custom.
- Provisioned instance size and EBS volume type and size.
- Auto-scaling capability for storage.
- Support for read replicas and Multi-AZ.
- Security through IAM, security groups, KMS, and SSL in transit.
- Automated backup with point-in-time restore up to 35 days.
- Manual DB snapshot for longer-term recovery.
- Managed and scheduled maintenance (with downtime).
- Support for IAM authentication and integration with Secrets Manager.
- RDS Custom for access to and customisation of the underlying instance (Oracle & SQL Server).
- **Use case**: store relational datasets (RDBMS / OLTP), perform SQL queries and transactions.

## Amazon Aurora

- Compatible API for PostgreSQL / MySQL, with separation of storage and compute.
- **Storage**: data stored in 6 replicas across 3 AZs, highly available, self-healing, auto-scaling.
- **Compute**: cluster of DB instances across multiple AZs, auto-scaling of read replicas.
- **Cluster**: custom endpoints for writer and reader DB instances.
- Same security, monitoring, and maintenance features as RDS.
- Aurora Serverless for unpredictable or intermittent workloads, with no capacity planning.
- Aurora Global: up to 16 DB read instances in each Region, under 1 second storage replication.
- Aurora Machine Learning: ML using SageMaker and Comprehend on Aurora.
- Aurora Database Cloning: new cluster from an existing one, faster than restoring a snapshot.
- **Use case**: same as RDS, but with less maintenance, more flexibility, more performance, more features.

## Amazon ElastiCache

- Managed Redis / Memcached, similar to RDS but for caches.
- In-memory data store with sub-millisecond latency.
- Select an ElastiCache instance type such as `cache.m6g.large`.
- Support for clustering (Redis), Multi-AZ, and read replicas (sharding).
- Security through IAM, security groups, KMS, and Redis AUTH.
- Backup, snapshot, and point-in-time restore.
- Managed and scheduled maintenance.
- Requires some application code changes.
- **Use case**: key/value store, frequent reads and fewer writes, caching DB query results, storing session data, no SQL.

## Amazon DynamoDB

- AWS proprietary technology: managed serverless NoSQL database with millisecond latency.
- Capacity modes: provisioned with optional auto-scaling, or on-demand.
- Can replace ElastiCache as a key/value store, for example storing session data with TTL.
- Highly available, Multi-AZ by default, reads and writes decoupled, transaction capability.
- DAX cluster for read cache with microsecond read latency.
- Security, authentication, and authorisation through IAM.
- Event processing: DynamoDB Streams integrated with Lambda, or Kinesis Data Streams.
- Global Tables for an active-active setup.
- Automated backups up to 35 days with PITR (restore to a new table), or on-demand backups.
- Export to S3 without using RCU within the PITR window; import from S3 without using WCU.
- Great for rapidly evolving schemas.
- **Use case**: serverless application development (small documents of hundreds of KB), distributed serverless cache.

## Amazon S3

- A key/value store for objects.
- Great for bigger objects, less so for many small objects.
- Serverless, scales infinitely, max object size 50 TB, versioning capability.
- Tiers: S3 Standard, S3 Infrequent Access, S3 Intelligent-Tiering, S3 Glacier, plus lifecycle policies.
- Features: versioning, encryption, replication, MFA Delete, access logs.
- Security: IAM, bucket policies, ACLs, access points, Object Lambda, CORS, Object Lock / Vault Lock.
- Encryption: SSE-S3, SSE-KMS, SSE-C, client-side, TLS in transit, default encryption.
- Batch operations using S3 Batch, listing files using S3 Inventory.
- Performance: multi-part upload, S3 Transfer Acceleration, S3 Select.
- Automation: S3 Event Notifications (SNS, SQS, Lambda, EventBridge).
- **Use case**: static files, key/value store for big files, website hosting.

## Related

- [[Database/Databases]]
- [[Database/Choosing the Right Database]]
- [[Database/Other Databases]]

Source slides: pp. 516-520.
