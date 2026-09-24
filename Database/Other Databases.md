# Other AWS Databases

Choose a database by access pattern, data model, latency, scale, durability, query style, retention, and operational requirements.

## Database Models at a Glance

| Data model | AWS service | Use it for |
| --- | --- | --- |
| Object storage | [[Database/Other Databases/Object Storage/S3]] | Large unstructured objects, backups, media, data lakes, and archives. |
| Document | [[Database/Other Databases/Document DB/DocumentDB]] | JSON documents, flexible schemas, and MongoDB-compatible applications. |
| Graph | [[Database/Other Databases/Graph/Neptune]] | Highly connected data such as social graphs, fraud relationships, knowledge graphs, and recommendations. |
| Wide-column | [[Database/Other Databases/Wide Column/Keyspaces]] | Cassandra-compatible workloads that need high write scale and predictable access patterns. |
| Time-series | [[Database/Other Databases/Time Series/Timestream]] | IoT telemetry, metrics, events, and operational data queried by time windows. |
| Columnar warehouse | [[Database/Other Databases/Columnar Warehouse/Redshift]] | OLAP analytics, aggregations, and large joins across structured data. |
| Search and log analytics | [[Database/Other Databases/Search/OpenSearch]] | Full-text search, filtering, log analysis, dashboards, and observability. |
| Ledger | [[Database/Other Databases/Ledger/QLDB]] | Immutable transaction history that can be cryptographically verified. |

## Individual Notes

- [[Database/Other Databases/Object Storage/S3]]
- [[Database/Other Databases/Document DB/DocumentDB]]
- [[Database/Other Databases/Graph/Neptune]]
- [[Database/Other Databases/Wide Column/Keyspaces]]
- [[Database/Other Databases/Time Series/Timestream]]
- [[Database/Other Databases/Columnar Warehouse/Redshift]]
- [[Database/Other Databases/Search/OpenSearch]]
- [[Database/Other Databases/Ledger/QLDB]]

## Quick Selection
- Relational transactions and joins: RDS or Aurora.
- Key/value serverless access: DynamoDB.
- Cache: ElastiCache or DAX.
- Large objects and archives: S3 and Glacier storage classes.
- JSON documents and MongoDB compatibility: [[Database/Other Databases/Document DB/DocumentDB]].
- Connected relationships: [[Database/Other Databases/Graph/Neptune]].
- Cassandra-compatible wide-column data: [[Database/Other Databases/Wide Column/Keyspaces]].
- Immutable audit history: [[Database/Other Databases/Ledger/QLDB]].
- BI warehouse: [[Database/Other Databases/Columnar Warehouse/Redshift]].
- Search: [[Database/Other Databases/Search/OpenSearch]].
- Time-series events: [[Database/Other Databases/Time Series/Timestream]].

Source slides: pp. 514-526.
