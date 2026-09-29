# Instantiating Applications Quickly

When launching a full stack (EC2, EBS, RDS), time is spent installing applications, inserting initial or recovery data, configuring everything, and launching the application. The cloud can speed this up.

## EC2 Instances

- **Golden AMI** – install applications and OS dependencies beforehand, then launch instances from the Golden AMI.
- **Bootstrap using User Data** – use User Data scripts for dynamic configuration.
- **Hybrid** – mix a Golden AMI and User Data (this is what Elastic Beanstalk does).

## RDS Databases

- Restore from a snapshot so the database already has schemas and data.

## EBS Volumes

- Restore from a snapshot so the disk is already formatted and has data.

![[SAA-v48-p259-instantiate-quickly.png]]

## Related

- [[Compute/EC2/Amazon Machine Image (AMI)]]
- [[Compute/EC2/EC2 User Data]]
- [[Database/RDS/RDS Backups and Restore]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Snapshots]]

Source slides: pp. 258-259.
