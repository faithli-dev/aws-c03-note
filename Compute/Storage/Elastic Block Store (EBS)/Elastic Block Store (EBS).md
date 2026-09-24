![[Pasted image 20260921115408.png]]

- An EBS (Elastic Block Store) Volume is a network drive you can attach to your instances while they run
- It allows your instances to persist data, even after their termination
- They can only be mounted to one instance at a time (at the CCP level)
- They are bound to a specific availability zone
- Analogy: Think of them as a “network USB stick”

- It’s a network drive (i.e. not a physical drive)
	- It uses the network to communicate the instance, which means there might be a bit of latency
	- It can be detached from an EC2 instance and attached to another one quickly
- It’s locked to an Availability Zone (AZ)
	- An EBS Volume in us-east-1a cannot be attached to us-east-1b
	- To move a volume across, you fir st need to snapshot it
- Have a provisioned capacity (size in GBs, and IOPS)
	- You get billed for all the provisioned capacity
	- You can increase the capacity of the drive over time

# Snapshots

• Make a backup (snapshot) of your EBS volume at a point in time
• Not necessary to detach volume to do snapshot, but recommended
• Can copy snapshots across AZ or Region
![[Pasted image 20260921115513.png]]
## Features
![[Pasted image 20260921115649.png|253]]

• EBS Snapshot Archive
	• Move a Snapshot to an ”archive tier” that is 75% cheaper
	• Takes within 24 to 72 hours for restoring the archive
• Recycle Bin for EBS Snapshots
	• Setup rules to retain deleted snapshots so you can recover them after an accidental deletion
	• Specify retention (from 1 day to 1 year)
• Fast Snapshot Restore (FSR)
	• Force full initialization of snapshot to have no latency on the first use ($)

# Volume Type

• EBS Volumes are characterized in Size | Throughput | IOPS (I/O Ops Per Sec)
• When in doubt always consult the AWS documentation – it’s good!
• Only gp2/gp3 and io1/io2 Block Express can be used as boot volumes
![[Pasted image 20260921153444.png]]

1. [[General purpose SSD - gp2 gp3]]
2. [[Block Express SSD - io1 io2]]
3. [[Low cost HDD - st1]]
4. [[Lowest Cost HDD - sc1]]

# Multi-Attach - io1/io2 family
![[Pasted image 20260921153603.png|325]]
• Attach the same EBS volume to multiple EC2 instances in the same AZ
• Each instance has full read & write permissions to the high-performance volume
• Use case:
	• Achieve higher application availability in clustered Linux applications (ex: Teradata)
	• Applications must manage concurrent write operations
• Up to 16 EC2 Instances at a time
• Must use a file system that’s cluster-aware (not XFS, EXT4, etc…)

# Encryption

• When you create an encrypted EBS volume, you get the following:
	• Data at rest is encrypted inside the volume
	• All the data in flight moving between the instance and the volume is encrypted
	• All snapshots are encrypted
	• All volumes created from the snapshot
• Encryption and decryption are handled transparently (you have nothing to do)
• Encryption has a minimal impact on latency
• EBS Encryption leverages keys from KMS (AES-256)
• Copying an unencrypted snapshot allows encryption
• Snapshots of encrypted volumes are encrypted

## E[]()ncrypt an unencrypted EBS volume

• Create an EBS snapshot of the volume
• Encrypt the EBS snapshot ( using copy )
• Create new EBS volume from the snapshot ( the volume will also be encrypted )
• Now you can attach the encrypted volume to the original instance