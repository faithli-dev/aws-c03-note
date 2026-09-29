# Routing Policy - Multi-Value

- Used when routing traffic to multiple resources.
- Route 53 returns multiple values/resources.
- Can be associated with health checks, returning only values for healthy resources.
- Up to 8 healthy records are returned for each Multi-Value query.
- Multi-Value is **not** a substitute for an ELB.

![[SAA-v48-p220-routing-multi-value.png]]

## Related

- [[Network/Route 53/Route 53 Routing Policies]]
- [[Local Balancing/Load balancing]]

Source slides: p. 220.
