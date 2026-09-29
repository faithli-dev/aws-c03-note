# SQS Security

## Encryption

- In-flight encryption using the HTTPS API.
- At-rest encryption using KMS keys.
- Client-side encryption if the client wants to encrypt and decrypt itself.

## Access Controls

- IAM policies regulate access to the SQS API.
- SQS access policies, similar to S3 bucket policies:
	- Useful for cross-account access to SQS queues.
	- Useful for allowing other services (SNS, S3) to write to an SQS queue.

## Related

- [[Integration/SQS]]
- [[Security/KMS and Encryption]]
- [[Security/Role Based/IAM Permission Policies]]

Source slides: p. 385.
