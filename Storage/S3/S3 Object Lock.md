# S3 Object Lock

S3 Object Lock adopts a WORM (Write Once Read Many) model. Versioning must be enabled.

## Behaviour

- Blocks an object version deletion for a specified amount of time.

## Retention Modes

- **Compliance** – object versions cannot be overwritten or deleted by any user, including the root user. Retention modes cannot be changed and retention periods cannot be shortened.
- **Governance** – most users cannot overwrite or delete an object version or alter its lock settings; some users have special permissions to change retention or delete the object.

## Retention Period and Legal Hold

- **Retention Period** – protect the object for a fixed period; it can be extended.
- **Legal Hold** – protect the object indefinitely, independent of the retention period. Can be freely placed and removed using the `s3:PutObjectLegalHold` IAM permission.

![[SAA-v48-p331-object-lock.png]]

## S3 Glacier Vault Lock

- Adopt a WORM model for Glacier.
- Create a Vault Lock Policy and lock it for future edits, so it can no longer be changed or deleted.
- Helpful for compliance and data retention.

## Related

- [[Storage/S3/S3 Versioning]]
- [[Storage/S3/S3 MFA Delete]]
- [[Storage/S3/S3 Security and Access]]

Source slides: pp. 330-331.
