# Other AWS Databases

## Database Models at a Glance

| Model | Service | Use case |
|---|---|---|
| Columnar warehouse | [[Database/Other Databases/Columnar Warehouse/Redshift]] | OLAP analytics and BI |
| Document | [[Database/Other Databases/Document DB/DocumentDB]] | MongoDB-compatible JSON documents |
| Graph | [[Database/Other Databases/Graph/Neptune]] | Highly connected datasets |
| Ledger | [[Database/Other Databases/Ledger/QLDB]] | Immutable, verifiable transaction log |
| Object storage | [[Database/Other Databases/Object Storage/S3]] | Large objects, not a database |
| Search | [[Database/Other Databases/Search/OpenSearch]] | Free-text and unstructured search |
| Time series | [[Database/Other Databases/Time Series/Timestream]] | IoT and operational metrics |
| Wide column | [[Database/Other Databases/Wide Column/Keyspaces]] | Apache Cassandra workloads |

## Individual Notes

[[Database/Other Databases/Columnar Warehouse/Redshift]]
[[Database/Other Databases/Document DB/DocumentDB]]
[[Database/Other Databases/Graph/Neptune]]
[[Database/Other Databases/Ledger/QLDB]]
[[Database/Other Databases/Object Storage/S3]]
[[Database/Other Databases/Search/OpenSearch]]
[[Database/Other Databases/Time Series/Timestream]]
[[Database/Other Databases/Wide Column/Keyspaces]]

## Quick Selection

- Need SQL joins and transactions: RDS or Aurora.
- Need serverless key-value at any scale: DynamoDB.
- Need full-text search: OpenSearch.
- Need relationships and traversals: Neptune.
- Need analytics over petabytes: Redshift.

## Related

- [[Database/Databases]]
- [[Database/Choosing the Right Database]]
