# EBS Multi-Attach

Multi-Attach attaches the same EBS volume to multiple EC2 instances in the same Availability Zone. It is available only for the **io1 / io2 family**.

## Characteristics

- Each instance has full read and write permissions to the high-performance volume.
- Up to 16 EC2 instances at a time.
- Must use a cluster-aware file system (not XFS, EXT4, and similar).

![[SAA-v48-p109-ebs-multi-attach.png]]

## Use Cases

- Higher application availability in clustered Linux applications (for example Teradata).
- Applications must manage concurrent write operations themselves.

## Related

- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]
- [[Compute/Storage/Elastic Block Store (EBS)/Block Express SSD - io1 io2]]
- [[Compute/Storage/Elastic File System (EFS)/Elastic File System (EFS)]]

Source slides: p. 109.
