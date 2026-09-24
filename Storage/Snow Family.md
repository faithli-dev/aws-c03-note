# AWS Snow Family

The Snow Family provides secure physical devices for collecting, processing, and moving large datasets when network transfer is too slow or unreliable.

- Snowcone is the small, portable edge device.
- Snowball Edge provides storage or compute capacity and is used for bulk migration and edge processing.
- Snowmobile is a shipping container for exabyte-scale transfers.
- Snow devices can run edge workloads, collect data, and later export it to S3.
- Snowball cannot import directly to Glacier; land the data in S3 first and use an S3 lifecycle policy to transition it.

![[SAA-v48-p353-snowball-transfer.png]]

Choose Snow when the time and cost of moving data over the network exceed the logistics of shipping a device. Use Direct Connect, DataSync, or the public Internet when continuous online transfer is more suitable.

Source slides: pp. 350-355.
