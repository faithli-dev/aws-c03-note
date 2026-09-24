# Amazon Redshift

Amazon Redshift is a columnar data warehouse for online analytical processing (OLAP). It is based on PostgreSQL syntax but is designed for analytics rather than OLTP transactions.

## Architecture

- A leader node plans queries and aggregates results.
- Compute nodes execute queries in parallel.
- Provisioned clusters use selected capacity; Redshift Serverless manages capacity automatically.
- Columnar storage and parallel execution improve large scans, joins, and aggregations.

![[SAA-v48-p532-redshift-cluster.png]]

## Data Loading and Recovery

- Load large batches from S3 with the COPY command.
- Kinesis Data Firehose can deliver streaming data.
- Redshift Spectrum queries data in S3 without loading it into the warehouse.
- Snapshots are incremental backups that can be restored or copied to another Region.

## When to Choose Redshift

Choose Redshift for BI, reporting, historical analytics, and large joins across structured datasets. Use Athena for serverless SQL directly on S3 and RDS or Aurora for transactional workloads.

Source slides: pp. 515 and 531-535.
