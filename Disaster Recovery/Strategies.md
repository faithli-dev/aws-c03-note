# Disaster Recovery Strategies

Four strategies, from slowest and cheapest to fastest and most expensive RTO.

## Backup and Restore (High RPO)

- Back up data and restore it in AWS after a disaster.
- Uses AWS Storage Gateway, S3, Glacier, EBS snapshots, RDS snapshots, and Redshift.
- Scheduled regular snapshots and lifecycle policies.

## Pilot Light

- A small version of the app is always running in the cloud.
- Useful for the critical core (the pilot light).
- Very similar to backup and restore but faster, because critical systems are already up.
- Example: RDS running with data replication, EC2 not running, Route 53 ready.

![[SAA-v48-p780-pilot-light.png]]

## Warm Standby

- The full system is up and running, but at minimum size.
- On disaster, scale to production load.
- Example: RDS secondary running, ELB with a minimum-size Auto Scaling Group.

![[SAA-v48-p781-warm-standby.png]]

## Multi Site / Hot Site Approach

- Very low RTO (minutes or seconds), very expensive.
- Full production scale running both on AWS and on-premises (active-active).

![[SAA-v48-p782-multi-site.png]]

## All AWS Multi Region

- Production scale running in two AWS Regions.
- Route 53 failover with Aurora Global Database (primary and secondary).

## DR Tips

- **Backup** – EBS snapshots, RDS automated backups and snapshots; regular pushes to S3 / S3 IA / Glacier with lifecycle policies and cross-Region replication; from on-premises, Snowball or Storage Gateway.
- **High availability** – use Route 53 to migrate DNS from Region to Region; RDS Multi-AZ, ElastiCache Multi-AZ, EFS, S3; site-to-site VPN as a recovery from Direct Connect.
- **Replication** – RDS cross-Region replication, Aurora Global Databases, database replication from on-premises to RDS, Storage Gateway.
- **Automation** – CloudFormation or Elastic Beanstalk to recreate a whole environment; recover or reboot EC2 instances with CloudWatch alarms; Lambda functions for custom automations.
- **Chaos** – Netflix's "simian army" randomly terminates EC2 instances.

## Related

- [[Disaster Recovery/Disaster Recovery]]
- [[Disaster Recovery/RPO and RTO]]
- [[Disaster Recovery/AWS Backup]]

Source slides: pp. 778-784.
