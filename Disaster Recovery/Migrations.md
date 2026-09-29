# AWS Migration Services

## On-Premises Strategy with AWS

- **Amazon Linux 2 AMI as a VM (.iso)** – run on VMware, KVM, VirtualBox, or Microsoft Hyper-V.
- **VM Import / Export** – migrate existing applications into EC2, create a DR repository for on-premises VMs, and export VMs back from EC2.
- **AWS Application Discovery Service** – gather information about on-premises servers to plan a migration, including server utilisation and dependency mappings; track with AWS Migration Hub.
- **AWS Database Migration Service (DMS)** – replicate on-premises → AWS, AWS → AWS, and AWS → on-premises across many database technologies.
- **AWS Application Migration Service (MGN)** – incremental replication of on-premises live servers to AWS.

## Topics

- [[Disaster Recovery/AWS Elastic Disaster Recovery]]
- [[Disaster Recovery/Database Migration Service]]
- [[Disaster Recovery/AWS Schema Conversion Tool]]
- [[Disaster Recovery/AWS Application Discovery Service]]
- [[Disaster Recovery/Application Migration Service]]
- [[Disaster Recovery/VMware Cloud on AWS]]

## Transferring Large Amounts of Data into AWS

Example: transfer 200 TB with a 100 Mbps internet connection.

- **Over the internet / site-to-site VPN** – immediate to set up; 200 TB × 1000 GB × 1000 MB × 8 Mb / 100 Mbps = 16,000,000 s ≈ 185 days.
- **Over Direct Connect 1 Gbps** – long one-time setup (over a month); 200 TB × 1000 GB × 8 Gb / 1 Gbps = 1,600,000 s ≈ 18.5 days.
- **Over Snowball** – about 1 week for the end-to-end transfer; can be combined with DMS.
- **For ongoing replication** – site-to-site VPN or Direct Connect with DMS or DataSync.

## Related

- [[Disaster Recovery/Disaster Recovery]]
- [[Storage/Snowball]]
- [[Storage/DataSync]]

Source slides: pp. 793, 798-801.
