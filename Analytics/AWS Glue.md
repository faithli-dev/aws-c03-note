# AWS Glue

Managed extract, transform, and load (ETL) service, fully serverless. Useful to prepare and transform data for analytics.

![[SAA-v48-p545-glue.png]]

## Convert Data into Parquet Format

- Input: CSV in an S3 bucket.
- Glue ETL converts to Parquet.
- Output: Parquet in an S3 bucket.
- Athena analyses the result.
- Trigger with S3 PUT event notifications to Lambda, or use EventBridge as an alternative.

## Glue Data Catalog

A catalog of datasets:

- Crawlers write metadata from JDBC, Amazon S3, Amazon RDS, and Amazon DynamoDB.
- The catalog stores databases and tables (metadata).
- Consumers include Amazon Athena, Redshift Spectrum, Amazon EMR, and Glue jobs (ETL).

![[SAA-v48-p547-glue-data-catalog.png]]

## Things to Know at a High Level

- **Glue Job Bookmarks** – prevent re-processing old data.
- **Glue DataBrew** – clean and normalise data using pre-built transformations.
- **Glue Studio** – GUI to create, run, and monitor ETL jobs in Glue.
- **Glue Streaming ETL** – built on Apache Spark Structured Streaming; compatible with Kinesis Data Streams, Kafka, and MSK.

## Related

- [[Analytics/Data and Analytics]]
- [[Analytics/AWS Lake Formation]]
- [[Analytics/Athena]]

Source slides: pp. 545-548.
