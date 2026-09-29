# RDS Read Replicas

Read replicas scale read performance by serving `SELECT` traffic from copies of the primary database.

## Characteristics

- Up to 15 read replicas.
- Can be in the same AZ, cross-AZ, or cross-Region.
- Replication is **asynchronous**, so reads are eventually consistent.
- Replicas can be promoted to their own standalone database.
- Applications must update the connection string to use replicas.

![[SAA-v48-p164-rds-read-replicas.png]]

## Use Cases

- A production database takes normal load and you want to run a reporting or analytics application without affecting it.
- Read replicas serve SELECT (read) statements only, not INSERT, UPDATE, or DELETE.

## Network Cost

- There is a network cost when data crosses AZs.
- For RDS read replicas **within the same Region**, you do not pay that fee.
- Cross-Region replication incurs cost.

## Related

- [[Database/RDS/RDS]]
- [[Database/RDS/RDS Multi-AZ]]
- [[Database/RDS/RDS Backups and Restore]]

Source slides: pp. 164-166.
