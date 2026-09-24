# AWS Storage Gateway

Storage Gateway connects on-premises applications to AWS storage through a hybrid interface.

- File Gateway exposes an NFS or SMB file share and stores objects in S3. Frequently accessed data is cached locally.
- Volume Gateway presents iSCSI block volumes. Cached volumes keep primary data in S3; stored volumes keep the full dataset on premises and asynchronously back up snapshots to S3.
- Tape Gateway presents a virtual tape library for backup applications and archives virtual tapes in S3 Glacier.
- Storage Gateway supports scheduled snapshots and lets on-premises workloads keep using familiar protocols while AWS stores the durable copy.

![[SAA-v48-p364-storage-gateway.png]]

Use Storage Gateway for hybrid storage and backup. Use DataSync for managed bulk or recurring file transfer, and Snow devices for offline migration.

Source slides: pp. 362-369.
