# S3 File Gateway

## Behaviour

- Configured S3 buckets are accessible using the NFS and SMB protocols.
- Most recently used data is cached in the file gateway.
- Supports S3 Standard, S3 Standard-IA, S3 One Zone-IA, and S3 Intelligent-Tiering.
- Transition to S3 Glacier using a lifecycle policy.
- Bucket access uses IAM roles for each file gateway.
- SMB protocol integrates with Active Directory for user authentication.

![[SAA-v48-p365-s3-file-gateway.png]]

## Related

- [[Storage/Storage Gateway]]
- [[Storage/Volume Gateway]]
- [[Storage/Tape Gateway]]

Source slides: p. 365.
