# Systems Manager Run Command

Execute a document (script) or run a command on managed instances.

## Characteristics

- Run commands across multiple instances using resource groups.
- No need for SSH.
- Command output can be shown in the AWS Console, sent to an S3 bucket, or sent to CloudWatch Logs.
- Send notifications to SNS about command status (in progress, success, failed).
- Integrated with IAM and CloudTrail.
- Can be invoked using EventBridge.

![[SAA-v48-p833-run-command.png]]

## Related

- [[Monitoring/Systems Manager]]
- [[Other Services/Systems Manager Patch Manager]]

Source slides: p. 833.
