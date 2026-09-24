# AWS Step Functions

Step Functions orchestrates multi-step workflows using state machines.

- A workflow can sequence tasks, branch on conditions, run parallel work, wait, retry, catch failures, and record execution history.
- Integrations include Lambda, ECS/Fargate, Batch, DynamoDB, SQS, SNS, Glue, SageMaker, and many AWS SDK actions.
- Standard Workflows suit long-running, auditable processes. Express Workflows suit high-volume, short-duration event processing.
- Retry and Catch states make transient failures explicit and reduce custom orchestration code inside Lambda.

Common patterns include an order workflow that validates, charges, reserves stock, and notifies; or a data pipeline that runs Glue, checks a result, and publishes an event.

Source slides: pp. 596 and 802-808.
