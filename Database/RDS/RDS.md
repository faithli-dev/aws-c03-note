# Amazon RDS

RDS (Relational Database Service) is a managed service for databases that use SQL as a query language.

## Supported Engines

- Postgres
- MySQL
- MariaDB
- Oracle
- Microsoft SQL Server
- IBM DB2
- Aurora (AWS proprietary database)

## Advantages over a Database on EC2

RDS is a managed service, so AWS handles:

- Automated provisioning and OS patching
- Continuous backups and restore to a specific timestamp (Point-in-Time Restore)
- Monitoring dashboards
- Read replicas for improved read performance
- Multi-AZ setup for disaster recovery
- Maintenance windows for upgrades
- Scaling capability (vertical and horizontal)
- Storage backed by EBS

You cannot SSH into RDS instances, except with [[Database/RDS/RDS Custom]].

## Storage Auto Scaling

- Dynamically increases storage on the RDS DB instance.
- When RDS detects it is running out of free database storage, it scales automatically.
- You set a Maximum Storage Threshold.
- Storage is modified automatically when free storage is less than 10% of allocated storage, low storage lasts at least 5 minutes, and 6 hours have passed since the last modification.
- Useful for unpredictable workloads; supports all RDS engines.

## Topics

- [[Database/RDS/RDS Read Replicas]]
- [[Database/RDS/RDS Multi-AZ]]
- [[Database/RDS/RDS Custom]]
- [[Database/RDS/RDS Backups and Restore]]
- [[Database/RDS/RDS & Aurora Security]]
- [[Database/RDS/RDS Proxy]]
- [[Database/RDS/Aurora]]

## Related

- [[Database/Databases]]
- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]

Source slides: pp. 161-169, 180-185.
