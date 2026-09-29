# RDS Backups and Restore

## Automated Backups

- Daily full backup of the database during the backup window.
- Transaction logs are backed up by RDS every 5 minutes.
- Gives point-in-time restore from the oldest backup to 5 minutes ago.
- Retention of 1 to 35 days; set 0 to disable automated backups.

## Manual DB Snapshots

- Manually triggered by the user.
- Retention for as long as you want.

![[SAA-v48-p180-rds-backups.png]]

## Cost Tip

A stopped RDS database still incurs storage cost. If you plan to stop it for a long time, snapshot and restore instead.

## Restore Options

- Restoring an RDS or Aurora backup or snapshot creates a **new** database.
- Restore MySQL RDS from S3: back up the on-premises database, store it in S3, restore onto a new RDS MySQL instance.
- Restore MySQL Aurora from S3: back up with Percona XtraBackup, store in S3, restore onto a new Aurora MySQL cluster.

## Related

- [[Database/RDS/RDS]]
- [[Database/RDS/Aurora]]
- [[Disaster Recovery/AWS Backup]]

Source slides: pp. 180-182.
