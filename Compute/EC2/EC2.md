EC2 is a virtual machine (VM) which is a compute for hosting and running a tons of applications. It's is one of the most popular AWS services.

# Usage

1. Virtual Machines
2. Storing data (EBS)
3. Load Balancing (ELB)
4. Scaling Services by auto-scaling group (ASG)

# Sizing & Configuration Options

1. Operating System (OS): Linux, WIndows, Mac OS
2. CPU
3. RAM
4. Storage Space
	- Network-attached (EBS & EFS)
	- hardware (EC2 Instance Store)
5. Network interface
6. Firewall rules: [[Security Group]]
7. Bootstrap script (configure at first launch): [[EC2 User Data]]

# [[Instance Types]]

## Naming convention

**m5.2xlarge**
- m: instance class
- 5: generation (AWS improves)
- 2xlarge: size within the instance class

# [[Placement Groups]]

# Network

To obtain a ip address, EC2 instance will be attach a Network interface card [[Elastic Network Interfaces]]

# Hibernate

![[Pasted image 20260921114850.png|359]]

• The in-memory (RAM) state is preserved • The instance boot is much faster! (the OS is not stopped / restarted) • Under the hood: the RAM state is written to a file in the root EBS volume • The root EBS volume must be encrypted

• Supported Instance Families – C3, C4, C5, I3, M3, M4, R3, R4, T2, T3, … • Instance RAM Size – must be less than 150 GB. • Instance Size – not supported for bare metal instances. • AMI – Amazon Linux 2, Linux AMI, Ubuntu, RHEL, CentOS & Windows… • Root Volume – must be EBS, encrypted, not instance store, and large • Available for On-Demand, Reserved and Spot Instances • An instance can NOT be hibernated more than 60 days

## Use Cases

• Long-running processing 
• Saving the RAM state 
• Services that take time to initialize

# Storage

 1. [[Elastic Block Store (EBS)]]
 2. [[EC2 Instance Store]]

# [[Purchasing Options]]

# [[Amazon Machine Image (AMI)]]