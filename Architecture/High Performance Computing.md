# High Performance Computing (HPC)

The cloud is a good place for HPC: create a very high number of resources quickly, speed up time to results by adding resources, and pay only for what you use.

## Use Cases

Genomics, computational chemistry, financial risk modelling, weather prediction, machine learning, deep learning, autonomous driving.

## Data Management and Transfer

- **AWS Direct Connect** – move GB/s of data to the cloud over a private secure network.
- **Snowball and Snowmobile** – move PB of data to the cloud.
- **AWS DataSync** – move large amounts of data between on-premises and S3, EFS, or FSx for Windows.

## Compute and Networking

- **EC2 instances** – CPU-optimised or GPU-optimised.
- **Spot Instances / Spot Fleets** – cost savings plus Auto Scaling.
- **Placement Groups: Cluster** – good network performance (low latency, 10 Gbps network).

![[SAA-v48-p815-hpc.png]]

## EC2 Enhanced Networking

- **SR-IOV** – higher bandwidth, higher packets per second, lower latency.
	- Option 1: Elastic Network Adapter (ENA) up to 100 Gbps.
	- Option 2: Intel 82599 VF up to 10 Gbps (legacy).
- **Elastic Fabric Adapter (EFA)** – improved ENA for HPC, only works on Linux; great for inter-node communications and tightly coupled workloads; leverages the Message Passing Interface (MPI) standard; bypasses the underlying Linux OS to provide low-latency, reliable transport.

![[SAA-v48-p818-efa.png]]

## Storage

- **Instance-attached storage**:
	- EBS: scale up to 256,000 IOPS with io2 Block Express.
	- Instance Store: scale to millions of IOPS, linked to the EC2 instance, low latency.
- **Network storage**:
	- Amazon S3: large blob, not a file system.
	- Amazon EFS: scale IOPS based on total size, or use provisioned IOPS.
	- Amazon FSx for Lustre: HPC-optimised distributed file system with millions of IOPS, backed by S3.

## Automation and Orchestration

- **AWS Batch** – supports multi-node parallel jobs that span multiple EC2 instances; easily schedules jobs and launches EC2 instances.
- **AWS ParallelCluster** – open-source cluster management tool to deploy HPC on AWS; configured with text files; automates creation of VPC, subnets, cluster type, and instance types; can enable EFA.

## Related

- [[Architecture/More Solutions Architecture]]
- [[Compute/EC2/Placement Groups/Cluster]]
- [[Storage/FSx for Lustre]]

Source slides: pp. 815-820.
