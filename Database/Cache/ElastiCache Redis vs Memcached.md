# ElastiCache Redis vs Memcached

## Redis

- Multi-AZ with auto-failover.
- Read replicas to scale reads and provide high availability.
- Data durability using AOF persistence.
- Backup and restore features.
- Supports Sets and Sorted Sets.

## Memcached

- Multi-node for partitioning of data (sharding).
- No high availability (no replication).
- Non-persistent.
- Backup and restore (serverless).
- Multi-threaded architecture.

![[SAA-v48-p189-redis-vs-memcached.png]]

## Exam Distinction

Choose Redis when you need replication, persistence, failover, backups, or data structures such as sorted sets. Choose Memcached when you need simple, multi-threaded, sharded caching without durability.

## Related

- [[Database/Cache/ElastiCache]]
- [[Database/Cache/ElastiCache Redis Use Case]]

Source slides: p. 189.
