# Amazon OpenSearch Service

Amazon OpenSearch Service provides search, log analytics, and dashboards for data that must be searched across arbitrary fields or partial text matches.

## Core Characteristics

- Supports managed clusters and OpenSearch Serverless.
- Searches fields and partial matches more freely than a key-value database.
- OpenSearch Dashboards provides visualization.
- Security integrates with IAM and Cognito, with KMS encryption and TLS.
- It is commonly used alongside a source database rather than as the system of record.

![[SAA-v48-p537-opensearch-pattern.png]]

## Ingestion Patterns

- DynamoDB Streams → Lambda → OpenSearch for searchable copies of application data.
- CloudWatch Logs subscription filters → Lambda or Kinesis Data Firehose → OpenSearch.
- Kinesis Data Streams and Firehose support near-real-time ingestion and transformation.

## When to Choose OpenSearch

Choose OpenSearch for full-text search, log analysis, observability, and dashboards. Keep transactional truth in RDS, DynamoDB, or another source database, then index the data that users need to search.

Source slides: pp. 515 and 536-539.
