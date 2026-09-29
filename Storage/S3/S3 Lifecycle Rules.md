# S3 Lifecycle Rules

## Transition Actions

Configure objects to transition to another storage class:

- Move objects to Standard IA 60 days after creation.
- Move to Glacier for archiving after 6 months.

## Expiration Actions

Configure objects to expire (be deleted) after some time:

- Delete access log files after 365 days.
- Delete old versions of files when versioning is enabled.
- Delete incomplete multipart uploads.

## Scope

- Rules can be created for a certain prefix, for example `s3://mybucket/mp3/*`.
- Rules can be created for certain object tags, for example `Department: Finance`.

![[SAA-v48-p295-lifecycle-rules.png]]

## Moving Between Storage Classes

Objects can transition between storage classes. Automate this with lifecycle rules.

![[SAA-v48-p294-moving-between-classes.png]]

## Scenario 1

An EC2 application creates image thumbnails after profile photos are uploaded. Thumbnails can be recreated and only need to be kept 60 days. Source images must be immediately retrievable for 60 days; afterwards the user can wait up to 6 hours.

- Source images: S3 Standard, with a lifecycle transition to Glacier after 60 days.
- Thumbnails: S3 One Zone-IA, with a lifecycle expiration after 60 days.

## Scenario 2

Deleted S3 objects must be recoverable immediately for 30 days, and recoverable within 48 hours for up to 365 days.

- Enable S3 Versioning so deleted objects are hidden by a delete marker and can be recovered.
- Transition noncurrent versions to Standard IA.
- Then transition noncurrent versions to Glacier Deep Archive.

## Related

- [[Storage/S3/S3 Storage Classes]]
- [[Storage/S3/S3 Versioning]]
- [[Storage/S3/S3 Analytics]]

Source slides: pp. 294-297.
