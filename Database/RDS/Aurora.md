# Amazon Aurora

Aurora is a proprietary AWS database technology, not open sourced.

## Overview

- Supports Postgres and MySQL as the DB engine, so existing drivers work as if Aurora were Postgres or MySQL.
- AWS cloud-optimised: claims 5x the performance of MySQL on RDS and over 3x the performance of Postgres on RDS.
- Storage grows automatically in increments of 10 GB, up to 256 TB.
- Up to 15 replicas with faster replication than MySQL (sub-10 ms replica lag).
- Failover is instantaneous; Aurora is high-availability native.
- Costs about 20% more than RDS but is more efficient.

## High Availability and Read Scaling

- 6 copies of your data across 3 AZs: 4 of 6 copies needed for writes, 3 of 6 for reads.
- Self-healing with peer-to-peer replication.
- Storage is striped across hundreds of volumes.
- One Aurora instance takes writes (the master).
- Automated failover for the master in less than 30 seconds.
- Master plus up to 15 Aurora read replicas serve reads.
- Supports cross-Region replication.

![[SAA-v48-p171-aurora-ha.png]]

## Aurora DB Cluster

- Writer endpoint points to the master.
- Reader endpoint provides connection load balancing across replicas.
- Shared storage volume auto-expands from 10 GB to 256 TB.

![[SAA-v48-p172-aurora-db-cluster.png]]

## Features

- Automatic failover
- Backup and recovery
- Isolation and security
- Industry compliance
- Push-button scaling
- Automated patching with zero downtime
- Advanced monitoring
- Routine maintenance
- Backtrack: restore data at any point in time without using backups

## Replica Auto Scaling

Aurora replicas can auto scale based on CPU usage behind the reader endpoint.

## Topics

- [[Database/RDS/Aurora Custom Endpoints]]
- [[Database/RDS/Aurora Serverless]]
- [[Database/RDS/Aurora Global Database]]
- [[Database/RDS/Aurora Machine Learning]]
- [[Database/RDS/Babelfish for Aurora PostgreSQL]]
- [[Database/RDS/Aurora Backups]]
- [[Database/RDS/Aurora Database Cloning]]

## Related

- [[Database/RDS/RDS]]
- [[Database/RDS/RDS & Aurora Security]]

Source slides: pp. 170-175, 181-183.
