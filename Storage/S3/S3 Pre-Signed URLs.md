# S3 Pre-Signed URLs

Pre-signed URLs grant temporary access to a private S3 object.

## Generating URLs

- Use the S3 Console, AWS CLI, or SDK.
- Expiration:
	- S3 Console – 1 minute up to 720 minutes (12 hours).
	- AWS CLI – `--expires-in` in seconds (default 3600, max 604800 ≈ 168 hours).

![[SAA-v48-p329-pre-signed-urls.png]]

## Permissions

Users given a pre-signed URL inherit the permissions of the user who generated the URL, for GET or PUT.

## Use Cases

- Allow only logged-in users to download a premium video from your S3 bucket.
- Allow an ever-changing list of users to download files by generating URLs dynamically.
- Allow a user to temporarily upload a file to a precise location in your S3 bucket.

## Related

- [[Storage/S3/S3 Security and Access]]
- [[Storage/S3/S3]]

Source slides: p. 329.
