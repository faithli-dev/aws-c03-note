# ECS EventBridge Integration

## ECS Tasks Invoked by EventBridge

- A client uploads an object to S3.
- EventBridge matches an event rule and runs an ECS task on Fargate.
- The task uses its ECS task role to access S3 and DynamoDB, and saves the result.

![[SAA-v48-p429-ecs-eventbridge.png]]

## ECS Tasks Invoked by EventBridge Schedule

- An EventBridge rule runs an ECS task on a schedule, for example every hour.
- Used for batch processing.

## SQS Queue Example

- ECS Service Auto Scaling scales tasks based on messages polled from an SQS queue.

## Intercept Stopped Tasks using EventBridge

- When ECS task containers exit, EventBridge matches the event pattern and triggers SNS, for example to email an administrator.

## Related

- [[Compute/ECS]]
- [[Integration/EventBridge]]
- [[Integration/SQS]]

Source slides: pp. 429-432.
