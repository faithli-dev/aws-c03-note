# ElastiCache

ElastiCache provides managed Redis or Memcached, the same way RDS provides managed relational databases.

## Overview

- Caches are in-memory databases with high performance and low latency.
- Reduce load on databases for read-intensive workloads.
- Help make your application stateless.
- AWS handles OS maintenance, patching, optimisation, setup, configuration, monitoring, failure recovery, and backups.
- Using ElastiCache involves heavy application code changes.

## Solution Architecture

### DB Cache

- The application queries ElastiCache; on a cache miss it reads from RDS and writes the result to the cache.
- Relieves load on RDS.
- The cache must have an invalidation strategy so only current data is used.

### User Session Store

- A user logs into any application instance.
- The application writes the session data into ElastiCache.
- The user hits another instance and the instance retrieves the session, so the user stays logged in.

## Topics

- [[Database/Cache/ElastiCache Redis vs Memcached]]
- [[Database/Cache/ElastiCache Security]]
- [[Database/Cache/ElastiCache Patterns]]
- [[Database/Cache/ElastiCache Redis Use Case]]

## Related

- [[Database/Databases]]
- [[Database/RDS/RDS]]
- [[Serverless/Architectures]]

Source slides: pp. 186-188.
