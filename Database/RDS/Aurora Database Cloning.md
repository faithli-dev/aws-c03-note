# Aurora Database Cloning

Cloning creates a new Aurora DB cluster from an existing one.

## Characteristics

- Faster than snapshot and restore.
- Uses a copy-on-write protocol.
- Initially the new cluster uses the same data volume as the original, so no copying is needed.
- When updates are made to the new cluster, additional storage is allocated and data is copied to separate it.
- Very fast and cost-effective.

![[SAA-v48-p183-aurora-cloning.png]]

## Use Case

Create a "staging" database from a "production" database without impacting production.

## Related

- [[Database/RDS/Aurora]]
- [[Database/RDS/Aurora Backups]]

Source slides: p. 183.
