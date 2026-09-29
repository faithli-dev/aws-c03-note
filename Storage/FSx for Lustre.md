# Amazon FSx for Lustre

Lustre is a parallel distributed file system for large-scale computing. The name is derived from "Linux" and "cluster".

## Use Cases

- Machine learning
- High Performance Computing (HPC)
- Video processing
- Financial modelling
- Electronic Design Automation

## Characteristics

- Scales to hundreds of GB/s, millions of IOPS, and sub-millisecond latencies.
- Seamless integration with S3: read S3 as a file system through FSx, and write computation output back to S3.
- Can be used from on-premises servers (VPN or Direct Connect).

![[SAA-v48-p358-fsx-lustre.png]]

## Storage Options

- **SSD** – low-latency, IOPS-intensive workloads, small and random file operations.
- **HDD** – throughput-intensive workloads, large and sequential file operations.

## Deployment Options

- **Scratch File System** – temporary storage; data is not replicated and does not persist if the file server fails; high burst (6x faster, 200 MB/s per TiB); use for short-term processing and cost optimisation.
- **Persistent File System** – long-term storage; data is replicated within the same AZ; failed files are replaced within minutes; use for long-term processing and sensitive data.

![[SAA-v48-p359-fsx-lustre-deployment.png]]

## Related

- [[Storage/FSx]]
- [[Storage/Storage Comparison]]

Source slides: pp. 358-359.
