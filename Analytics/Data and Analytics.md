# AWS Data and Analytics

## Athena
Athena is a serverless SQL query service for data in S3. It supports CSV, JSON, ORC, Avro, and Parquet, and commonly feeds QuickSight dashboards.

- Store data in columnar Parquet or ORC to scan fewer bytes.
- Compress files and partition S3 prefixes by query fields such as year, month, and day.
- Use larger files to reduce per-file overhead.
- Federated Query uses Lambda connectors to query RDS, DynamoDB, CloudWatch Logs, and other sources, with results written to S3.

![[SAA-v48-p528-athena-quicksight.png]]

## Redshift and OpenSearch
- Redshift uses a leader node for planning and compute nodes for parallel queries. Load large batches through S3 COPY or Firehose rather than many small inserts.
- Redshift Spectrum queries S3 data without loading it into Redshift.
- OpenSearch supports search across arbitrary fields and integrates with DynamoDB Streams, Lambda, Firehose, Kinesis, and CloudWatch Logs.

![[SAA-v48-p532-redshift-cluster.png]]
![[SAA-v48-p537-opensearch-pattern.png]]

## EMR, QuickSight, and Glue
- EMR provisions Hadoop, Spark, HBase, Presto, or Flink clusters. Master nodes coordinate, core nodes process and store data, and task nodes can use Spot capacity.
- QuickSight is a serverless BI service. SPICE provides in-memory analysis, and Enterprise edition supports column-level security.
- Glue is serverless ETL. Glue Crawlers populate the Data Catalog; Glue Jobs transform data; Job Bookmarks avoid reprocessing.
- Lake Formation builds a governed data lake on S3 with discovery, cleansing, ingestion, and row/column-level access controls.

![[SAA-v48-p545-glue-etl.png]]
![[SAA-v48-p549-lake-formation.png]]

Source slides: pp. 527-559.
