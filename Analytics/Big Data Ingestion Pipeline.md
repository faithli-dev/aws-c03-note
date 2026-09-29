# Big Data Ingestion Pipeline

## Requirements

- The ingestion pipeline should be fully serverless.
- Collect data in real time.
- Transform the data.
- Query the transformed data using SQL.
- Reports created using the queries should be in S3.
- Load the data into a warehouse and create dashboards.

## Architecture

![[SAA-v48-p558-big-data-pipeline.png]]

1. IoT devices send data to Amazon Kinesis Data Streams.
2. Amazon Data Firehose delivers data to an S3 ingestion bucket in near real-time (about 1 minute).
3. AWS Lambda performs data transformations, triggered every minute.
4. S3 sends event notifications to Amazon SQS.
5. Lambda pulls data from SQS.
6. Amazon Athena queries the data with serverless SQL; results are stored in an S3 reporting bucket.
7. Amazon QuickSight and Amazon Redshift Serverless consume the reporting bucket for dashboards.

## Discussion

- IoT Core harvests data from IoT devices.
- Kinesis is great for real-time data collection.
- Firehose helps with data delivery to S3 in near real-time.
- Lambda can help Firehose with data transformations.
- Amazon S3 can trigger notifications to SQS.
- Lambda can subscribe to SQS (S3 could also be connected directly to Lambda).
- Athena is a serverless SQL service and results are stored in S3.
- The reporting bucket contains analysed data and can be used by reporting tools such as QuickSight and Redshift.

## Related

- [[Analytics/Data and Analytics]]
- [[Integration/Kinesis Data Streams]]
- [[Analytics/Amazon QuickSight]]

Source slides: pp. 557-559.
