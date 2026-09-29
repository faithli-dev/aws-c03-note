# EFS Performance and Storage Classes

## Scale

- Thousands of concurrent NFS clients and 10 GB+/s throughput.
- Grows to a petabyte-scale network file system automatically.

## Performance Mode (set at creation time)

- **General Purpose (default)** – latency-sensitive use cases such as web servers and CMS.
- **Max I/O** – higher latency but higher throughput; for highly parallel workloads such as big data and media processing.

## Throughput Mode

- **Bursting** – 1 TB = 50 MiB/s plus burst up to 100 MiB/s.
- **Provisioned** – set throughput regardless of storage size, for example 1 GiB/s for 1 TB of storage.
- **Elastic** – automatically scales throughput up or down. Up to 3 GiB/s for reads and 1 GiB/s for writes; used for unpredictable workloads.

![[SAA-v48-p114-efs-performance-classes.png]]

## Storage Classes

- **Standard** – frequently accessed files.
- **Infrequent Access (EFS-IA)** – cost to retrieve files, lower storage price.
- **Archive** – rarely accessed data (a few times per year), 50% cheaper.
- Lifecycle policies move files between tiers after N days.

![[SAA-v48-p115-efs-storage-classes.png]]

## Availability and Durability

- **Standard** – Multi-AZ, good for production.
- **One Zone** – single AZ, good for dev; backup enabled by default; compatible with IA (EFS One Zone-IA).
- Over 90% cost savings with the right tiering.

## Related

- [[Compute/Storage/Elastic File System (EFS)/Elastic File System (EFS)]]
- [[Compute/Storage/EBS vs EFS – Elastic Block Storage]]

Source slides: pp. 114-115.
