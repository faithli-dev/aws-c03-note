# Database Migration Service (DMS)

Quickly and securely migrate databases to AWS, resilient and self-healing.

## Characteristics

- The source database remains available during the migration.
- Supports homogeneous migrations (Oracle to Oracle) and heterogeneous migrations (Microsoft SQL Server to Aurora).
- Continuous data replication using CDC (change data capture).
- You must create an EC2 instance to perform the replication tasks.

![[SAA-v48-p786-dms.png]]

## Sources

- On-premises and EC2 instance databases: Oracle, MS SQL Server, MySQL, MariaDB, PostgreSQL, MongoDB, SAP, DB2
- Azure SQL Database
- Amazon RDS, all including Aurora
- Amazon S3
- DocumentDB

## Targets

- On-premises and EC2 instance databases: Oracle, MS SQL Server, MySQL, MariaDB, PostgreSQL, SAP
- Amazon RDS
- Redshift, DynamoDB, S3
- OpenSearch Service
- Kinesis Data Streams
- Apache Kafka
- DocumentDB and Amazon Neptune
- Redis and Babelfish

## Multi-AZ Deployment

When Multi-AZ is enabled, DMS provisions and maintains a synchronously replicated standby in a different AZ.

Advantages:

- Provides data redundancy
- Eliminates I/O freezes
- Minimises latency spikes

![[SAA-v48-p790-dms-multi-az.png]]

## RDS and Aurora MySQL Migrations

- RDS MySQL to Aurora MySQL:
	- Option 1: DB snapshots from RDS MySQL restored as MySQL Aurora DB.
	- Option 2: create an Aurora read replica from RDS MySQL and, when replication lag is 0, promote it as its own DB cluster (can take time and cost money).
- External MySQL to Aurora MySQL:
	- Option 1: use Percona XtraBackup to create a file backup in Amazon S3 and create an Aurora MySQL DB from S3.
	- Option 2: create an Aurora MySQL DB and use `mysqldump` to migrate (slower than the S3 method).
	- Use DMS if both databases are up and running.

## RDS and Aurora PostgreSQL Migrations

- RDS PostgreSQL to Aurora PostgreSQL:
	- Option 1: DB snapshots from RDS PostgreSQL restored as PostgreSQL Aurora DB.
	- Option 2: create an Aurora read replica and promote it when replication lag is 0.
- External PostgreSQL to Aurora PostgreSQL: create a backup, put it in Amazon S3, and import it using the `aws_s3` Aurora extension.
- Use DMS if both databases are up and running.

## Related

- [[Disaster Recovery/Migrations]]
- [[Disaster Recovery/AWS Schema Conversion Tool]]
- [[Database/RDS/RDS]]

Source slides: pp. 786-792.
