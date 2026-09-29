# EC2 Hibernate

Hibernate preserves the in-memory (RAM) state of an instance so it can resume without a full boot.

## Stop vs Terminate vs Hibernate

- **Stop** – data on EBS is kept intact for the next start.
- **Terminate** – root EBS volumes set to delete-on-termination are lost.
- **Start** – first start boots the OS and runs EC2 User Data; later starts only boot the OS. Applications then start and caches warm up, which takes time.
- **Hibernate** – the RAM state is preserved, so boot is much faster. The OS is not stopped or restarted.

![[SAA-v48-p091-ec2-hibernate.png]]

## How It Works

- The RAM state is written to a file in the root EBS volume.
- The root EBS volume must be encrypted.

## Good to Know

- Supported instance families: C3, C4, C5, I3, M3, M4, R3, R4, T2, T3, and others.
- Instance RAM must be less than 150 GB.
- Not supported for bare metal instances.
- AMIs: Amazon Linux 2, Linux AMI, Ubuntu, RHEL, CentOS, and Windows.
- Root volume must be EBS, encrypted, not instance store, and large enough.
- Available for On-Demand, Reserved, and Spot Instances.
- An instance cannot be hibernated for more than 60 days.

## Use Cases

- Long-running processing
- Saving the RAM state
- Services that take time to initialize

## Related

- [[Compute/EC2/EC2]]
- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]
- [[Compute/Storage/EC2 Instance Store]]

Source slides: pp. 90-92.
