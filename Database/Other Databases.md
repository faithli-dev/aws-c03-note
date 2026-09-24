# Other AWS Databases

Choose a database by access pattern, data model, latency, scale, durability, query style, retention, and operational requirements.

## Database Models at a Glance

| Data model | AWS service | Use it for |
| --- | --- | --- |
| Object storage | [[Storage/S3/S3]] | Large unstructured objects, backups, media, data lakes, and archives. S3 is object storage rather than a transactional database. |
| Document | Amazon DocumentDB | JSON documents, flexible schemas, and MongoDB-compatible applications. |
| Graph | Amazon Neptune | Highly connected data such as social graphs, fraud relationships, knowledge graphs, and recommendations. |
| Wide-column | Amazon Keyspaces | Cassandra-compatible workloads that need high write scale, predictable access patterns, and serverless capacity. |
| Time-series | Amazon Timestream | IoT telemetry, metrics, events, and operational data queried by time windows. |
| Columnar warehouse | Amazon Redshift | OLAP analytics, aggregations, and large joins across structured data. |
| Search and log analytics | Amazon OpenSearch Service | Full-text search, filtering, log analysis, dashboards, and observability. |
| Ledger | Amazon QLDB | Immutable transaction history that can be cryptographically verified. |

## DocumentDB

- Managed, MongoDB-compatible document database for JSON data and indexes.
- Choose it when the application already uses MongoDB APIs or needs document-oriented querying.
- It is different from DynamoDB: DocumentDB is document and query oriented, while DynamoDB is primarily key-value and access-pattern oriented.

## Neptune

- Managed graph database for relationships between entities.
- Supports property graph and RDF graph models.
- Use it for social networks, fraud detection, knowledge graphs, route finding, and recommendations.
- Neptune Streams expose ordered graph changes for downstream processing.

## Keyspaces

- Serverless, Cassandra-compatible wide-column database using CQL.
- Supports on-demand or provisioned capacity and multi-AZ replication.
- Model tables around known partition-key and clustering-key access patterns.
- Use it for very high scale, predictable queries where Cassandra compatibility matters.

## Timestream

- Serverless time-series database for IoT and operational telemetry.
- Recent data is kept in memory for fast access; historical data is tiered to lower-cost storage.
- Queries are optimized around timestamps, dimensions, measures, and time windows.

## Redshift, OpenSearch, and QLDB

- **Redshift:** columnar OLAP warehouse for analytics and large joins. It is not an OLTP replacement for RDS.
- **OpenSearch:** managed or serverless search and analytics with full-text search, dashboards, and log analysis.
- **QLDB:** append-only ledger with a cryptographically verifiable transaction history.

![[SAA-v48-p526-timestream-architecture.png]]

## Quick Selection
- Relational transactions and joins: RDS or Aurora.
- Key/value serverless access: DynamoDB.
- Cache: ElastiCache or DAX.
- Large objects and archives: S3 and Glacier storage classes.
- JSON documents and MongoDB compatibility: DocumentDB.
- Connected relationships: Neptune.
- Cassandra-compatible wide-column data: Keyspaces.
- Immutable audit history: QLDB.
- BI warehouse: Redshift.
- Search: OpenSearch.
- Time-series events: Timestream.

Source slides: pp. 514-526.
