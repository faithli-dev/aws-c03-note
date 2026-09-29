# Elastic Block Store (EBS)

EBS is a network drive you can attach to an EC2 instance while it runs. It persists data after instance termination, unlike [[Compute/Storage/EC2 Instance Store]].

## Key Characteristics

- A network drive, not a physical drive: it communicates over the network, so there can be slight latency.
- Can be detached from one instance and attached to another quickly.
- Locked to one Availability Zone. A volume in `us-east-1a` cannot attach to `us-east-1b`; snapshot and restore to move it.
- Has provisioned capacity (size in GB and IOPS). You are billed for all provisioned capacity.
- Capacity can be increased over time.
- Normally mounted to one instance at a time; the io1/io2 family supports [[Compute/Storage/Elastic Block Store (EBS)/EBS Multi-Attach]].

![[SAA-v48-p094-ebs-volume.png]]

## Topics

- [[Compute/Storage/Elastic Block Store (EBS)/EBS Volume Types]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Snapshots]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Multi-Attach]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Encryption]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Delete on Termination]]

## Related

- [[Compute/EC2/EC2]]
- [[Compute/Storage/EC2 Instance Store]]
- [[Compute/Storage/EBS vs EFS – Elastic Block Storage]]
- [[Compute/Storage/Elastic File System (EFS)/Elastic File System (EFS)]]

Source slides: pp. 94-97.
