# Aurora Global Database

## Aurora Cross-Region Read Replicas

- Useful for disaster recovery.
- Simple to put in place.

## Aurora Global Database (recommended)

- 1 primary Region (read/write).
- Up to 10 secondary (read-only) Regions, with replication lag under 1 second.
- Up to 16 read replicas per secondary Region.
- Decreases latency for global reads.
- Promoting another Region for disaster recovery has an RTO of under 1 minute.
- Typical cross-Region replication takes less than 1 second.

![[SAA-v48-p177-aurora-global.png]]

## Related

- [[Database/RDS/Aurora]]
- [[Disaster Recovery/Strategies]]
- [[Database/RDS/RDS Read Replicas]]

Source slides: p. 177.
