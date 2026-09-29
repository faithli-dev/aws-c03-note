# EBS Snapshots

A snapshot is a point-in-time backup of an EBS volume.

## Basics

- Not necessary to detach the volume to take a snapshot, but recommended.
- Can be copied across AZs or Regions.
- Used to move a volume to another AZ: snapshot, then restore in the target AZ.

![[SAA-v48-p098-ebs-snapshot.png]]

## Features

- **EBS Snapshot Archive** – move a snapshot to an archive tier that is 75% cheaper. Restoring takes 24 to 72 hours.
- **Recycle Bin for EBS Snapshots** – rules that retain deleted snapshots so you can recover them after accidental deletion. Retention from 1 day to 1 year.
- **Fast Snapshot Restore (FSR)** – forces full initialization of the snapshot so there is no latency on first use. Expensive.

![[SAA-v48-p099-ebs-snapshot-features.png]]

## Related

- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Encryption]]
- [[Compute/EC2/Amazon Machine Image (AMI)]]

Source slides: pp. 98-99.
