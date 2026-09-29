# S3 Versioning

## Behaviour

- Versioning is enabled at the bucket level.
- Overwriting the same key creates a new version: 1, 2, 3, and so on.
- Versioning is best practice for buckets.

## Benefits

- Protect against unintended deletes (restore a previous version).
- Easy roll back to a previous version.

![[SAA-v48-p281-versioning.png]]

## Notes

- Any file that is not versioned before enabling versioning has version `null`.
- Suspending versioning does not delete previous versions.

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Replication]]
- [[Storage/S3/S3 MFA Delete]]

Source slides: p. 281.
