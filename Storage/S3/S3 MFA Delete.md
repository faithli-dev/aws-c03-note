# S3 MFA Delete

MFA Delete forces users to generate a code on a device before performing important operations on S3.

## MFA Is Required To

- Permanently delete an object version
- Suspend versioning on the bucket

## MFA Is Not Required To

- Enable versioning
- List deleted versions

![[SAA-v48-p326-mfa-delete.png]]

## Requirements

- Versioning must be enabled on the bucket.
- Only the bucket owner (root account) can enable or disable MFA Delete.

## Related

- [[Storage/S3/S3 Versioning]]
- [[Storage/S3/S3 Object Lock]]
- [[Security/Role Based/Multi Factor Authentication (MFA)]]

Source slides: p. 326.
