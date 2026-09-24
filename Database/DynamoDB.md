# Amazon DynamoDB

DynamoDB is a fully managed, serverless NoSQL database with single-digit millisecond performance, multi-AZ durability, and automatic scaling.

## Data Model

- A table contains items. Items can have different attributes and evolve without a fixed relational schema.
- Every table needs a primary key: partition key only, or partition key plus sort key.
- A partition key distributes data; a sort key orders related items and supports range queries.
- The item size limit in the deck is 400 KB. Use S3 for large objects and keep only metadata or references in DynamoDB.

![[SAA-v48-p468-dynamodb-table.png]]

## Capacity and Caching

- Provisioned mode sets read and write capacity units and can use Application Auto Scaling.
- On-demand mode automatically handles variable traffic and charges per request.
- DAX is a managed, highly available in-memory cache for DynamoDB APIs and can return cached reads in microseconds.
- ElastiCache is more general purpose and can cache application objects or query results; DAX requires less application change for DynamoDB reads.

## Streams, Global Tables, and Recovery

- DynamoDB Streams records ordered item-level changes for 24 hours. Kinesis Data Streams provides longer retention and more consumer choices.
- Global Tables replicate active-active tables across Regions. Applications can read and write locally.
- TTL removes items after an expiry timestamp, useful for sessions and temporary records.
- Point-in-time recovery and on-demand backups create a new table when restored. Export to S3 requires PITR but does not consume read capacity; import from S3 creates a new table without consuming write capacity.

![[SAA-v48-p472-dynamodb-streams.png]]
![[SAA-v48-p474-dynamodb-global-tables.png]]

Source slides: pp. 466-477 and 513-520.
