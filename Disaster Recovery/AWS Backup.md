# AWS Backup

A fully managed service to centrally manage and automate backups across AWS services, with no custom scripts or manual processes.

## Supported Services

- Amazon EC2 / Amazon EBS
- Amazon S3
- Amazon RDS (all DB engines) / Amazon Aurora / Amazon DynamoDB
- Amazon DocumentDB / Amazon Neptune
- Amazon EFS / Amazon FSx (Lustre and Windows File Server)
- AWS Storage Gateway (Volume Gateway)

Supports cross-Region backups and cross-account backups.

![[SAA-v48-p794-aws-backup.png]]

## Features

- Supports point-in-time recovery (PITR) for supported services.
- On-demand and scheduled backups.
- Tag-based backup policies.
- Backup policies known as **Backup Plans**:
	- Backup frequency (every 12 hours, daily, weekly, monthly, cron expression)
	- Backup window
	- Transition to cold storage (never, days, weeks, months, years)
	- Retention period (always, days, weeks, months, years)

## Backup Vault Lock

- Enforces a WORM (Write Once Read Many) state for all backups stored in an AWS Backup vault.
- Additional layer of defence against inadvertent or malicious delete operations and updates that shorten or alter retention periods.
- Even the root user cannot delete backups when enabled.

![[SAA-v48-p797-backup-vault-lock.png]]

## Related

- [[Disaster Recovery/Disaster Recovery]]
- [[Disaster Recovery/Strategies]]

Source slides: pp. 794-797.
