# AWS CloudTrail

Provides governance, compliance, and audit for your AWS account. CloudTrail is enabled by default.

## Behaviour

- Get a history of events and API calls made in your account by the console, SDK, CLI, and AWS services.
- Logs can be sent to CloudWatch Logs or S3.
- A trail can be applied to all Regions (default) or a single Region.
- If a resource is deleted in AWS, investigate CloudTrail first.

![[SAA-v48-p605-cloudtrail.png]]

## Event Types

### Management Events

- Operations performed on resources in your AWS account.
- Examples: configuring security (`IAM AttachRolePolicy`), configuring routing (`EC2 CreateSubnet`), setting up logging (`CloudTrail CreateTrail`).
- Trails log management events by default.
- Read events (which do not modify resources) can be separated from write events (which may modify resources).

### Data Events

- Not logged by default because they are high-volume operations.
- Amazon S3 object-level activity (`GetObject`, `DeleteObject`, `PutObject`); read and write can be separated.
- AWS Lambda function execution activity (the `Invoke` API).

### Insights Events

## CloudTrail Insights

- Detects unusual activity: inaccurate resource provisioning, hitting service limits, bursts of IAM actions, gaps in periodic maintenance.
- Analyses normal management events to create a baseline, then continuously analyses write events to detect unusual patterns.
- Anomalies appear in the CloudTrail console.
- The event is sent to Amazon S3 and an EventBridge event is generated.

## Event Retention

- Events are stored for 90 days in CloudTrail.
- To keep events longer, log them to S3 and use Athena.

## Intercepting API Calls with EventBridge

CloudTrail API calls can flow to EventBridge, which triggers SNS for alerting, for example on a `DeleteTable` call.

## Related

- [[Monitoring/Audit and Config]]
- [[Monitoring/AWS Config]]
- [[Integration/EventBridge]]

Source slides: pp. 605-611.
