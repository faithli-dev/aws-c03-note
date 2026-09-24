# Amazon SNS

Amazon SNS is a managed publish/subscribe service. A producer publishes once to a topic, and SNS pushes the message to many subscriptions.

- Subscribers can be SQS queues, Lambda, HTTP(S) endpoints, email, SMS, mobile push, Kinesis Data Firehose, and other integrations.
- SNS is useful for fan-out notifications and event distribution. Add SQS between SNS and a worker when persistence, retry, buffering, or independent consumer scaling is required.
- Message filtering policies let each subscription receive only matching JSON attributes.
- FIFO topics provide ordering and deduplication and can deliver to SQS FIFO queues.

![[SAA-v48-p394-sns-pubsub.png]]
![[SAA-v48-p399-sns-sqs-fanout.png]]

Security includes HTTPS in transit, KMS encryption at rest, IAM policies, and SNS access policies for cross-account publishers or AWS service integrations.

Source slides: pp. 394-404.
