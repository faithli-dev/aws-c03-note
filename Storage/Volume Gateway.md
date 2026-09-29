# Volume Gateway

## Behaviour

- Block storage using the iSCSI protocol, backed by S3.
- Backed by EBS snapshots, which can restore on-premises volumes.
- **Cached volumes** – low-latency access to the most recent data.
- **Stored volumes** – the entire dataset is on-premises, with scheduled backups to S3.

![[SAA-v48-p366-volume-gateway.png]]

## Related

- [[Storage/Storage Gateway]]
- [[Storage/S3 File Gateway]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Snapshots]]

Source slides: p. 366.
