# Other AWS Databases

Choose a database by access pattern, data model, latency, scale, durability, query style, retention, and operational requirements.

- DocumentDB is a managed, MongoDB-compatible document database for JSON data and indexes.
- Neptune is a managed graph database for highly connected data such as social graphs, fraud relationships, and recommendations. Neptune Streams expose ordered graph changes.
- Amazon Keyspaces is a serverless, Cassandra-compatible wide-column database with CQL, multi-AZ replication, and on-demand or provisioned capacity.
- Timestream is a serverless time-series database for IoT and operational telemetry. Recent data is kept in memory and historical data is tiered to lower-cost storage.
- Redshift is a columnar OLAP data warehouse for analytics and large joins; it is not an OLTP replacement for RDS.
- OpenSearch provides free-text and partial-field search, dashboards, and managed or serverless deployments.
- QLDB is a cryptographically verifiable ledger database for immutable transaction history.

![[SAA-v48-p526-timestream-architecture.png]]

## Quick Selection
- Relational transactions and joins: RDS or Aurora.
- Key/value serverless access: DynamoDB.
- Cache: ElastiCache or DAX.
- Large objects and archives: S3 and Glacier classes.
- BI warehouse: Redshift.
- Search: OpenSearch.
- Relationships: Neptune.
- Time-series events: Timestream.

Source slides: pp. 514-526.
