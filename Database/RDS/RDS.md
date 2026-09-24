- RDS stands for Relational Database Service
- It’s a managed DB service for DB that use SQL as a query language.
- It allows you to create databases in the cloud that are managed by AWS
	- Postgres
	- MySQL
	- MariaDB
	- Oracle
	- Microsoft SQL Server
	- IBM DB2
	- Aurora (AWS Proprietary database)
	
# Advantage

- RDS is a managed service:
	- Automated provisioning, OS patching
	- Continuous backups and restore to specific timestamp (Point in Time Restore)!
	- Monitoring dashboards
	- Read replicas for improved read performance
	- Multi AZ setup for DR (Disaster Recovery)
	- Maintenance windows for upgrades
	- Scaling capability (vertical and horizontal)
	- Storage backed by EBS

- BUT you can’t SSH into your instances

# Storage Auto Scaling
![[Pasted image 20260924105112.png|239]]
 Helps you increase storage on your RDS DB instance dynamically
- When RDS detects you are running out of free database storage, it scales automatically
- Avoid manually scaling your database storage
- You have to set Maximum Storage Threshold (maximum limit for DB storage)
- Automatically modify storage if:
- Free storage is less than 10% of allocated storage
- Low-storage lasts at least 5 minutes
- 6 hours have passed since last modification
- Useful for applications with unpredictable workloads
- Supports all RDS database engines

# Read Scalability
![[Pasted image 20260924105153.png|412]]
- Up to 15 Read Replicas
- Within AZ, Cross AZ or Cross Region
- Replication is ASYNC, so reads are eventually consistent
- Replicas can be promoted to their own DB
- Applications must update the connection string to leverage read replicas

## Use Cases
![[Pasted image 20260924105226.png|299]]
- You have a production database that is taking on normal load
- You want to r un a reporting application to run some analytics
- You create a Read Replica to run the new workload there
- The production application is unaffected
- Read replicas are used for SELECT (=read) only kind of statements (not INSERT, UPDATE, DELETE)

## Network Cost
![[Pasted image 20260924105252.png|652]]
- In AWS there’s a network cost when data goes from one AZ to another
- For RDS Read Replicas within the same region, you don’t pay that fee

# Multi AZ (Disaster Recovery)
![[Pasted image 20260924105326.png|346]]
- SYNC replication
- One DNS name – automatic app failover to standby
- Increase availability
- Failover in case of loss of AZ, loss of network, instance or storage failure
- No manual intervention in apps
- Not used for scaling
- Note: The Read Replicas be setup as
Multi AZ for Disaster Recovery (DR)


# From Single-AZ to Multi-AZ
![[Pasted image 20260924105450.png|361]]
- Zero downtime operation (no need to stop the DB)
- Just click on “modify” for the
- The following happens internally:
	- A snapshot is taken
	- A new DB is restored from the snapshot in a new AZ
	- Synchronization is established between the two databases

# RDS Custom
![[Pasted image 20260924105627.png|256]]
- Magaged Oracle and Microsoft SQL Server Database with OS and database customization
- RDS: Automates setup, operation, and scaling of database in AWS
- Custom: access to the underlying database and OS so you can
	- Configure settings
	- Install patches
	- Enable native features
	- Access the underlying EC2 Instance using SSH or SSM Session Manager
- De-activate Automation Mode to perform your customization, better to take a DB snapshot before
- RDS vs. RDS Custom
	- RDS: entire database and the OS to be managed by AWS
	- RDS Custom: full admin access to the underlying OS and the database

# Backups & Restore

• Automated backups:
	• Daily full backup of the database (during the backup window)
	• Transaction logs are backed-up by RDS every 5 minutes
	• => ability to restore to any point in time (from oldest backup to 5 minutes ago)
	• 1 to 35 days of retention, set 0 to disable automated backups
• Manual DB Snapshots
	• Manually triggered by the user
	• Retention of backup for as long as you want
• Trick: in a stopped RDS database, you will still pay for storage. If you plan on stopping it for a long time, you should snapshot & restore instead

• Restoring a RDS / Aurora backup or a snapshot creates a new database
• Restoring MySQL RDS database from S3
	• Create a backup of your on-premises database
	• Store it on Amazon S3 (object storage)
	• Restore the backup file onto a new RDS instance running MySQL
