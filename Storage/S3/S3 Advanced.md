# Amazon S3 Advanced

## Lifecycle and Cost

- Lifecycle transition rules move objects to a cheaper class after a prefix, tag, or age condition.
- Expiration rules delete old versions or incomplete multipart uploads.
- S3 Storage Class Analysis helps choose transitions from access patterns. Intelligent-Tiering moves objects automatically between access tiers for a monitoring fee.
- Requester Pays makes the requester pay request and transfer charges, useful for shared public datasets.

![[SAA-v48-p295-s3-lifecycle.png]]

## Performance

- Multipart upload parallelizes large uploads and improves recovery from failed parts; it is recommended for large objects.
- Byte-range fetches parallelize large downloads and can retrieve only part of an object.
- S3 Transfer Acceleration sends uploads through an edge location to the bucket’s Region.
- S3 Batch Operations applies actions to many objects using a manifest, such as copying, tagging, restoring, or invoking Lambda.
- S3 Storage Lens provides organization-wide storage, protection, access, and cost visibility.

![[SAA-v48-p304-s3-multipart.png]]

## Advanced Integrations

- Pre-signed URLs grant time-limited access using the permissions of the signer.
- Access Points give different applications separate named policies and network origins for one bucket.
- S3 Object Lambda uses Lambda to transform an object as it is retrieved, such as redacting fields or converting a format.

![[SAA-v48-p329-s3-presigned-url.png]]
![[SAA-v48-p332-s3-access-points.png]]
![[SAA-v48-p334-s3-object-lambda.png]]

Source slides: pp. 293-312.
