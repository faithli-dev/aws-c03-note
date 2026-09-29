# Records TTL

TTL (Time To Live) is how long a DNS record is cached at a DNS resolver.

## High TTL (for example 24 hours)

- Less traffic on Route 53.
- Records may be outdated.

## Low TTL (for example 60 seconds)

- More traffic on Route 53 (higher cost).
- Records are outdated for less time.
- Easy to change records.

![[SAA-v48-p202-ttl.png]]

## Rule

Except for Alias records, TTL is mandatory for each DNS record.

## Related

- [[Network/Route 53/Route 53 Records]]
- [[Network/Route 53/CNAME vs Alias]]

Source slides: p. 202.
