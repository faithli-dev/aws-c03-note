# S3 Event Notifications

S3 can emit events when objects change, and route them to other services.

## Events

- `S3:ObjectCreated`, `S3:ObjectRemoved`, `S3:ObjectRestore`, `S3:Replication`, and others.
- Object name filtering is possible, for example `*.jpg`.
- Use case: generate thumbnails of images uploaded to S3.
- You can create as many S3 events as desired.
- Events typically deliver in seconds but can take a minute or longer.

![[SAA-v48-p300-s3-events.png]]

## Destinations and Permissions

Destinations include Lambda, SQS, and SNS. Each requires a resource policy:

- Lambda resource policy
- SNS resource (access) policy
- SQS resource (access) policy

## With Amazon EventBridge

- S3 sends all events to EventBridge.
- EventBridge rules forward to over 18 AWS services as destinations.
- Advanced filtering with JSON rules (metadata, object size, name).
- Multiple destinations such as Step Functions and Kinesis Streams / Firehose.
- EventBridge capabilities: archive, replay events, reliable delivery.

![[SAA-v48-p302-s3-eventbridge.png]]

## Related

- [[Storage/S3/S3]]
- [[Integration/EventBridge]]
- [[Serverless/Lambda]]

Source slides: pp. 300-302.
