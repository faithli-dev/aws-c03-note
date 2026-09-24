# Amazon EventBridge

EventBridge routes events from AWS services, SaaS partners, and custom applications to targets.

- Event patterns match fields in JSON events from services such as S3, EC2, CloudTrail, CodeBuild, Trusted Advisor, and RDS.
- Scheduled rules run cron or rate expressions.
- Targets include Lambda, SQS, SNS, Kinesis, Step Functions, ECS tasks, Batch, CodeBuild, CodePipeline, SSM, and EC2 actions.
- Event buses separate default AWS events, custom application events, and partner events.
- Resource-based bus policies allow cross-account or cross-Region publishing.
- Archives retain selected events for later replay. Schema Registry infers and versions event schemas and can generate code bindings.

![[SAA-v48-p610-eventbridge-api-calls.png]]

Use EventBridge for event routing and rules. Use SNS when simple publish/subscribe fan-out is enough, and SQS when consumers need durable buffering and pull-based processing.

Source slides: pp. 595-610.
