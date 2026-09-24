# Amazon Timestream

Amazon Timestream is a serverless time-series database for IoT telemetry, operational metrics, events, and real-time analytics.

## Storage and Queries

- Automatically scales capacity with the workload.
- Keeps recent data in memory for fast queries and moves historical data to cost-optimized storage.
- Supports SQL, scheduled queries, multi-measure records, and built-in time-series functions.
- Organizes data around timestamps, dimensions, and measures.

## Integrations

Timestream can receive data from AWS IoT, Kinesis Data Streams, Lambda, Amazon MSK, and Kinesis Data Analytics for Apache Flink. Query results can feed QuickSight, SageMaker, or JDBC clients.

![[SAA-v48-p526-timestream-architecture.png]]

## When to Choose Timestream

Choose Timestream when queries are naturally time-window based, such as “what happened during the last five minutes?” or “show the metric trend for the last month.” Choose Keyspaces for Cassandra-compatible access patterns and DynamoDB for general key-value workloads.

Source slides: pp. 515 and 525-526.
