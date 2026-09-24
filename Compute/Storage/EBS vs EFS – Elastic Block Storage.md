
# EBS
![[Pasted image 20260921160043.png|332]]

• EBS volumes…
	• one instance (except multi-attach io1/io2)
	• are locked at the Availability Zone (AZ) level
	• gp2: IO increases if the disk size increases
	• gp3 & io1: can increase IO independently
• To migrate an EBS volume across AZ
	• Take a snapshot
	• Restore the snapshot to another AZ
	• EBS backups use IO and you shouldn’t run them while your application is handling a lot of traffic
• Root EBS Volumes of instances get

# EFS
![[Pasted image 20260921160135.png|285]]
• Mounting 100s of instances across AZ
• EFS share website files (WordPress)
• Only for Linux Instances (POSIX)

• EFS has a higher price point than EBS
• Can leverage Storage Tiers for cost savings

• Remember: EFS vs EBS vs Instance Store