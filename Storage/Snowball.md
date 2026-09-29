# AWS Snowball

Snowball devices are highly secure, portable devices that collect and process data at the edge and migrate data into and out of AWS. They help migrate up to petabytes of data.

## Snowball Edge Devices

| Device | vCPUs | Memory | Storage (SSD) |
|---|---|---|---|
| Snowball Edge Storage Optimized | 104 | 416 GB | 210 TB |
| Snowball Edge Compute Optimized | 104 | 416 GB | 28 TB |

![[SAA-v48-p351-snowball-edge.png]]

## When to Use Snowball

Transfer time over the network for 10 TB, 100 TB, and 1 PB:

| Bandwidth | 10 TB | 100 TB | 1 PB |
|---|---|---|---|
| 100 Mbps | 12 days | 124 days | 3 years |
| 1 Gbps | 30 hours | 12 days | 124 days |
| 10 Gbps | 3 hours | 30 hours | 12 days |

Challenges with network transfer: limited connectivity, limited bandwidth, high network cost, shared bandwidth, and connection stability.

If it takes more than a week to transfer over the network, use Snowball devices.

## Solution Architecture: Snowball into Glacier

Snowball cannot import to Glacier directly. Import to Amazon S3 first, then use an S3 lifecycle policy to transition to Glacier.

## Related

- [[Storage/Snow Family]]
- [[Storage/Edge Computing]]
- [[Storage/DataSync]]

Source slides: pp. 351-355.
