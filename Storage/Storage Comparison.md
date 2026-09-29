# Storage Comparison

## Object

- **S3** – object storage.
- **S3 Glacier** – object archival.

## Block

- **EBS volumes** – network storage for one EC2 instance at a time.
- **Instance Store** – physical storage for your EC2 instance with high IOPS.

## File

- **EFS** – network file system for Linux instances, POSIX filesystem.
- **FSx for Windows** – network file system for Windows servers.
- **FSx for Lustre** – high performance computing Linux file system.
- **FSx for NetApp ONTAP** – high OS compatibility.
- **FSx for OpenZFS** – managed ZFS file system.

## Hybrid

- **Storage Gateway** – S3 & FSx File Gateway, Volume Gateway (cached & stored), Tape Gateway.
- **Transfer Family** – FTP, FTPS, SFTP interface on top of Amazon S3 or Amazon EFS.
- **DataSync** – scheduled data sync from on-premises to AWS, or AWS to AWS.
- **Snowcone / Snowball / Snowmobile** – move large amounts of data to the cloud physically.

## Other

- **Database** – for specific workloads, usually with indexing and querying.

![[SAA-v48-p374-storage-comparison.png]]

## Related

- [[Storage/Storage]]
- [[Database/Databases]]

Source slides: p. 374.
