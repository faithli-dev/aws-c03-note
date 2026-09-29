# Amazon Athena

Serverless query service to analyse data stored in Amazon S3.

## Characteristics

- Uses standard SQL to query files; built on Presto.
- Supports CSV, JSON, ORC, Avro, and Parquet.
- Pricing: $5.00 per TB of data scanned.
- Commonly used with Amazon QuickSight for reporting and dashboards.

![[SAA-v48-p528-athena.png]]

## Use Cases

- Business intelligence, analytics, and reporting.
- Analyse and query VPC Flow Logs, ELB logs, and CloudTrail trails.
- **Exam tip**: to analyse data in S3 using serverless SQL, use Athena.

## Performance Improvement

- Use columnar data for cost savings (less scanning); Apache Parquet or ORC is recommended. Use Glue to convert data to Parquet or ORC.
- Compress data for smaller retrievals (bzip2, gzip, lz4, snappy, zlib, zstd).
- Partition datasets in S3 for easy querying on virtual columns, for example `s3://athena-examples/flight/parquet/year=1991/month=1/day=1/`.
- Use larger files (over 128 MB) to minimise overhead.

## Federated Query

- Run SQL queries across data stored in relational, non-relational, object, and custom data sources (AWS or on-premises).
- Uses data source connectors that run on AWS Lambda.
- Store the results back in Amazon S3.

![[SAA-v48-p530-athena-federated-query.png]]

## Related

- [[Analytics/Data and Analytics]]
- [[Analytics/AWS Glue]]
- [[Database/Other Databases/Columnar Warehouse/Redshift]]

Source slides: pp. 528-530.
