# S3 Buckets and Objects

## Use Cases

Backup and storage, disaster recovery, archive, hybrid cloud storage, application hosting, media hosting, data lakes and big data analytics, software delivery, and static websites.

## Buckets

- S3 stores objects (files) in buckets (directories).
- Buckets are defined at the Region level; S3 looks like a global service but buckets are created in a Region.
- Naming uses a shared global namespace (globally unique across all Regions and accounts) or an account Regional namespace (allows reuse of the same bucket name across Regions).
- Constraints: no uppercase, no underscore, not an IP, must start with a lowercase letter or number, must not start with `xn--`, must not end with `-s3alias`.

![[SAA-v48-p270-s3-buckets.png]]

## Objects

- Objects have a **key**, which is the full path: `s3://my-bucket/my_folder1/another_folder/my_file.txt`.
- The key is composed of prefix + object name.
- There is no concept of directories; keys are long names containing slashes.
- Object values are the content of the body.
- Maximum object size is 50 TB; uploads over 5 GB must use multipart upload.
- Metadata: list of text key/value pairs (system or user metadata).
- Tags: up to 10 Unicode key/value pairs, useful for security and lifecycle.
- Version ID, if versioning is enabled.

![[SAA-v48-p271-s3-objects.png]]

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Security and Access]]
- [[Storage/S3/S3 Versioning]]

Source slides: pp. 269-272.
