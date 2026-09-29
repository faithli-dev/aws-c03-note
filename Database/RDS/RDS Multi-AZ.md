# RDS Multi-AZ

Multi-AZ gives an RDS database a synchronous standby in another Availability Zone for disaster recovery.

## Characteristics

- **Synchronous** replication to a standby instance in a second AZ.
- One DNS name; automatic application failover to the standby.
- Increases availability, not read scaling.
- Failover on loss of AZ, loss of network, instance failure, or storage failure.
- No manual intervention required in applications.
- Read replicas can themselves be set up as Multi-AZ for DR.

![[SAA-v48-p167-rds-multi-az.png]]

## From Single-AZ to Multi-AZ

- Zero-downtime operation; no need to stop the database.
- Click "modify" on the database.
- Internally: a snapshot is taken, a new DB is restored from the snapshot in a new AZ, and synchronisation is established.

## Related

- [[Database/RDS/RDS]]
- [[Database/RDS/RDS Read Replicas]]
- [[Disaster Recovery/Strategies]]

Source slides: pp. 167-168.
