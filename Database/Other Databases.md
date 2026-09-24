# Other AWS Databases

Choose a database by access pattern, data model, latency, scale, durability, query style, retention, and operational requirements.

## Database Models at a Glance

| Data model | AWS service | Use it for |
| --- | --- | --- |
| Object storage | [[Database/Other Databases/Object Storage (S3)]] | Large unstructured objects, backups, media, data lakes, and archives. |
| Document | [[Database/Other Databases/DocumentDB]] | JSON documents, flexible schemas, and MongoDB-compatible applications. |
| Graph | [[Database/Other Databases/Neptune]] | Highly connected data such as social graphs, fraud relationships, knowledge graphs, and recommendations. |
| Wide-column | [[Database/Other Databases/Keyspaces]] | Cassandra-compatible workloads that need high write scale and predictable access patterns. |
| Time-series | [[Database/Other Databases/Timestream]] | IoT telemetry, metrics, events, and operational data queried by time windows. |
| Columnar warehouse | [[Database/Other Databases/Redshift]] | OLAP analytics, aggregations, and large joins across structured data. |
| Search and log analytics | [[Database/Other Databases/OpenSearch]] | Full-text search, filtering, log analysis, dashboards, and observability. |
| Ledger | [[Database/Other Databases/QLDB]] | Immutable transaction history that can be cryptographically verified. |

## Individual Notes

- [[Database/Other Databases/Object Storage (S3)]]
- [[Database/Other Databases/DocumentDB]]
- [[Database/Other Databases/Neptune]]
- [[Database/Other Databases/Keyspaces]]
- [[Database/Other Databases/Timestream]]
- [[Database/Other Databases/Redshift]]
- [[Database/Other Databases/OpenSearch]]
- [[Database/Other Databases/QLDB]]

## Quick Selection
- Relational transactions and joins: RDS or Aurora.
- Key/value serverless access: DynamoDB.
- Cache: ElastiCache or DAX.
- Large objects and archives: S3 and Glacier storage classes.
- JSON documents and MongoDB compatibility: [[Database/Other Databases/DocumentDB]].
- Connected relationships: [[Database/Other Databases/Neptune]].
- Cassandra-compatible wide-column data: [[Database/Other Databases/Keyspaces]].
- Immutable audit history: [[Database/Other Databases/QLDB]].
- BI warehouse: [[Database/Other Databases/Redshift]].
- Search: [[Database/Other Databases/OpenSearch]].
- Time-series events: [[Database/Other Databases/Timestream]].

Source slides: pp. 514-526.
