# Amazon Neptune

Amazon Neptune is a fully managed graph database for highly connected data.

## Graph Model

- Model entities as vertices and relationships as edges.
- Graph queries follow relationships directly instead of relying on many relational joins.
- Common workloads include social networks, fraud detection, knowledge graphs, recommendation engines, and route finding.

Neptune is designed for large relationship graphs with low-latency traversal and read replicas across Availability Zones.

## Neptune Streams

Neptune Streams expose an ordered, near-real-time sequence of graph changes. A reader application can consume the stream through the API and send changes to services such as S3, OpenSearch, or ElastiCache.

![[SAA-v48-p523-neptune-streams.png]]

## When to Choose Neptune

Choose Neptune when the relationships between records are the main part of the query. Choose DocumentDB for JSON documents and RDS or Aurora for relational joins and transactions.

Source slides: pp. 515 and 522-523.
