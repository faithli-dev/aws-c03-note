# Amazon FSx for Windows File Server

A fully managed Windows file system share drive.

## Characteristics

- Supports SMB protocol and Windows NTFS.
- Microsoft Active Directory integration, ACLs, and user quotas.
- Can be mounted on Linux EC2 instances.
- Supports Microsoft's Distributed File System (DFS) Namespaces to group files across multiple file systems.
- Scales to tens of GB/s, millions of IOPS, and hundreds of PB of data.
- Can be accessed from on-premises infrastructure (VPN or Direct Connect).
- Can be configured to be Multi-AZ for high availability.
- Data is backed up daily to S3.

![[SAA-v48-p357-fsx-windows.png]]

## Storage Options

- **SSD** – latency-sensitive workloads such as databases, media processing, data analytics.
- **HDD** – a broad spectrum of workloads such as home directories and CMS.

## Related

- [[Storage/FSx]]
- [[Storage/Storage Comparison]]

Source slides: p. 357.
