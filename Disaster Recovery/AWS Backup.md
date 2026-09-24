# AWS Backup

AWS Backup centrally manages scheduled and on-demand backups across supported AWS services.

- Supported resources include EC2/EBS, S3, RDS/Aurora, DynamoDB, EFS, FSx, DocumentDB, Neptune, and Storage Gateway.
- Backup Plans define schedules, backup windows, retention, cold-storage transitions, and resource assignments.
- Tag-based policies simplify assigning resources.
- Backups can be copied across Regions and accounts.
- Point-in-time recovery is available for supported services.
- Backup Vault Lock enforces WORM retention and protects backup recovery points from deletion or shortened retention, including by the root user when the lock is active.

![[SAA-v48-p794-aws-backup.png]]

Source slides: pp. 794-797.
