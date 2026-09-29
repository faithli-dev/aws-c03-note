# ElastiCache Patterns

## Lazy Loading

- All read data is cached.
- Data can become stale in the cache.

## Write Through

- Adds or updates data in the cache when it is written to the database.
- No stale data.

## Session Store

- Store temporary session data in a cache using TTL features.

![[SAA-v48-p191-elasticache-patterns.png]]

## Quote

> There are only two hard things in Computer Science: cache invalidation and naming things.

## Related

- [[Database/Cache/ElastiCache]]
- [[Database/Cache/ElastiCache Security]]

Source slides: p. 191.
