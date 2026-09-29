# EBS Volume Types

EBS volumes are characterised by **Size | Throughput | IOPS (I/O operations per second)**. There are six types across two families.

## SSD

- **gp2 / gp3** – general purpose SSD balancing price and performance for a wide variety of workloads.
- **io1 / io2 Block Express** – highest-performance SSD for mission-critical, low-latency, or high-throughput workloads.

## HDD

- **st1** – low-cost HDD for frequently accessed, throughput-intensive workloads.
- **sc1** – lowest-cost HDD for less frequently accessed workloads.

## Boot Volumes

Only **gp2/gp3** and **io1/io2 Block Express** can be used as boot volumes. HDD volumes cannot.

![[SAA-v48-p104-ebs-types.png]]

## Individual Notes

- [[Compute/Storage/Elastic Block Store (EBS)/General purpose SSD - gp2 gp3]]
- [[Compute/Storage/Elastic Block Store (EBS)/Block Express SSD - io1 io2]]
- [[Compute/Storage/Elastic Block Store (EBS)/Low cost HDD - st1]]
- [[Compute/Storage/Elastic Block Store (EBS)/Lowest Cost HDD - sc1]]

## Related

- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]

Source slides: pp. 104-108.
