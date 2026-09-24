# AWS Migration Services

## Elastic Disaster Recovery
AWS Elastic Disaster Recovery continuously replicates physical, virtual, or cloud servers at block level into a low-cost staging area. During a disaster, launch target EC2 instances and perform failover; failback is supported after recovery.

![[SAA-v48-p785-elastic-disaster-recovery.png]]

## Database Migration Service
- AWS DMS migrates databases while the source remains available.
- It supports homogeneous and heterogeneous migrations and ongoing Change Data Capture replication.
- Sources and targets include on-premises databases, RDS, Aurora, Redshift, DynamoDB, S3, OpenSearch, Kinesis, Kafka, DocumentDB, Neptune, and others.
- DMS runs replication tasks on a replication instance; Multi-AZ adds a synchronous standby.
- AWS Schema Conversion Tool converts schemas between engines such as Oracle or SQL Server to Aurora or PostgreSQL. It is unnecessary when only moving the same engine to RDS.

![[SAA-v48-p786-dms.png]]

## Server and Data Migration
- Application Discovery Service inventories servers, utilization, dependencies, and network connections.
- Application Migration Service performs lift-and-shift rehosting with continuous replication.
- VM Import/Export moves supported virtual machines between on-premises and EC2.
- Use Snowball, Direct Connect, DataSync, or VPN based on the data size, transfer frequency, and time available.

Source slides: pp. 785-801.
