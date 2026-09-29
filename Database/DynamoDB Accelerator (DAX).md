# DynamoDB Accelerator (DAX)

A fully managed, highly available, seamless in-memory cache for DynamoDB.

## Characteristics

- Helps solve read congestion by caching.
- Microsecond latency for cached data.
- Does not require application logic modification; compatible with existing DynamoDB APIs.
- 5 minutes TTL for the cache by default.

![[SAA-v48-p470-dax.png]]

## DAX vs ElastiCache

- **DAX** – individual object cache and query/scan cache; sits directly in front of DynamoDB.
- **ElastiCache** – store aggregation results; the application manages the cache logic.

## Related

- [[Database/DynamoDB]]
- [[Database/Cache/ElastiCache]]

Source slides: pp. 470-471.
