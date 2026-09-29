# AWS Elastic Disaster Recovery (DRS)

Formerly named CloudEndure Disaster Recovery.

## Purpose

Quickly and easily recover physical, virtual, and cloud-based servers into AWS.

- Protect critical databases including Oracle, MySQL, and SQL Server.
- Protect enterprise apps such as SAP.
- Protect data from ransomware attacks.

## How It Works

- Continuous block-level replication for your servers.
- An AWS replication agent runs in the source environment.
- A staging area with low-cost EC2 instances and EBS volumes receives the replication.
- On failover, target EC2 instances and EBS volumes are launched within minutes.
- Failback to the source environment is supported.

![[SAA-v48-p785-drs.png]]

## Related

- [[Disaster Recovery/Migrations]]
- [[Disaster Recovery/Strategies]]

Source slides: p. 785.
