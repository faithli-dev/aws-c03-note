# ElastiCache Redis Use Case

## Gaming Leaderboards

- Gaming leaderboards are computationally complex.
- Redis Sorted Sets guarantee both uniqueness and element ordering.
- Each time a new element is added, it is ranked in real time and inserted in the correct order.

![[SAA-v48-p191-elasticache-patterns.png]]

## Related

- [[Database/Cache/ElastiCache]]
- [[Database/Cache/ElastiCache Redis vs Memcached]]

Source slides: p. 192.
