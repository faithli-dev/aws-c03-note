# Amazon DocumentDB

Amazon DocumentDB is a fully managed, MongoDB-compatible document database for JSON data.

## Data Model

- Store semi-structured documents instead of rows and tables.
- Query and index JSON fields using MongoDB-compatible APIs.
- Flexible schemas make it useful when document shapes evolve over time.

## Availability and Scaling

- Storage automatically grows as data increases.
- Replication across multiple Availability Zones provides high availability.
- Separate read replicas can handle read-heavy workloads.

## When to Choose DocumentDB

- The application already uses MongoDB drivers or APIs.
- The workload is document-oriented and needs queries across document fields.
- A managed document database is preferred over operating MongoDB yourself.

Choose DynamoDB for key-value access patterns and DocumentDB for MongoDB-compatible document queries.

Source slides: pp. 515 and 521.
