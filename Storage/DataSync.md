# AWS DataSync

DataSync moves large amounts of data between on-premises storage, other clouds, and AWS storage.

- On-premises sources such as NFS, SMB, HDFS, and S3 API require a DataSync agent.
- AWS-to-AWS transfers between S3, EFS, and FSx do not require an agent.
- Transfers preserve file permissions and metadata and can run hourly, daily, weekly, or on demand.
- Destinations include S3 storage classes, EFS, and FSx for Windows, Lustre, NetApp ONTAP, or OpenZFS.
- Use bandwidth limits when synchronization shares a production network.

DataSync is suited to recurring online synchronization. Use Snow devices for offline bulk migration and Storage Gateway when an on-premises application needs a continuously mounted hybrid interface.

![[SAA-v48-p372-datasync.png]]

Source slides: pp. 371-374 and 816.
