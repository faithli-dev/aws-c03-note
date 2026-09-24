# Disaster Recovery Strategies

Disaster recovery prepares for an event that affects business continuity, data, or finances.

- RPO (Recovery Point Objective) is the maximum acceptable data loss measured in time.
- RTO (Recovery Time Objective) is the maximum acceptable downtime.

## Strategies

- Backup and Restore: copy data and rebuild infrastructure after failure. Lowest cost and highest RPO/RTO.
- Pilot Light: keep the critical data layer or core services running; start the rest during recovery.
- Warm Standby: run a complete but small environment and scale it to production after failover.
- Hot Site / Multi-Site: run production scale in two locations for the lowest RTO and highest cost.

![[SAA-v48-p779-dr-backup-restore.png]]
![[SAA-v48-p780-dr-pilot-light.png]]
![[SAA-v48-p782-dr-hot-site.png]]

## Design Patterns
- Use Route 53 health checks and failover records to move users between Regions.
- Combine RDS/Aurora replication, S3 replication, EBS snapshots, AWS Backup, and automation with CloudFormation or Lambda.
- Keep a Site-to-Site VPN as a recovery path when Direct Connect fails.
- Test recovery procedures and measure actual RPO/RTO; a backup that has never been restored is not a proven recovery plan.

Source slides: pp. 775-785.
