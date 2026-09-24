# Amazon FSx

FSx provides managed third-party file systems for workloads that need a specific file system protocol or performance profile.

- FSx for Windows File Server provides SMB, Windows NTFS, Active Directory integration, and shared Windows file storage.
- FSx for Lustre is a parallel file system for HPC, machine learning, and large-scale processing. Scratch deployments are temporary and high performance; persistent deployments provide recovery options.
- FSx for NetApp ONTAP supports NFS, SMB, and iSCSI, with NetApp features such as snapshots and storage efficiency.
- FSx for OpenZFS provides managed OpenZFS with NFS and low-latency file access.

![[SAA-v48-p356-fsx-overview.png]]

Select FSx when EFS or EBS does not provide the required protocol, Windows compatibility, or specialized throughput.

Source slides: pp. 356-361.
