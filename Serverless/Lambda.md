# AWS Lambda

Lambda runs code on demand without provisioning servers. It scales execution environments automatically and charges for invocations and compute duration.

## Function Design

- Supported runtimes include Node.js, Python, Java, .NET, Ruby, custom runtimes, and container images that implement the Lambda Runtime API.
- A function has code, a handler, runtime settings, memory, timeout, environment variables, a temporary filesystem, and an execution role.
- Increasing memory also increases available CPU and network capacity.
- The deck’s limits include a 15-minute maximum execution time, 10 GB maximum memory, 10 GB temporary storage, and a regional concurrency quota that can be increased.
- Use ECS/Fargate for long-running or arbitrary Docker workloads.

## Invocation and Scaling

- Synchronous callers receive the response directly: API Gateway, ALB, SDK, or CLI.
- Asynchronous events such as S3 and SNS are retried and can use a dead-letter destination.
- Event source mappings let Lambda poll SQS, Kinesis, and DynamoDB Streams.
- Reserved concurrency sets a function limit and protects capacity. Provisioned concurrency keeps execution environments warm and avoids cold starts.
- SnapStart pre-initializes supported runtimes from a cached snapshot.

![[SAA-v48-p444-lambda-integrations.png]]
![[SAA-v48-p446-lambda-schedule.png]]

## VPC and Edge Functions

- A default Lambda function runs outside the customer VPC and cannot directly reach private RDS, ElastiCache, or internal load balancers.
- A VPC-enabled function creates ENIs in selected subnets and security groups. It needs a NAT Gateway or VPC endpoints for required outbound AWS API access.
- RDS Proxy pools database connections for bursty Lambda workloads and keeps credentials in Secrets Manager.
- CloudFront Functions handle lightweight viewer request/response changes. Lambda@Edge supports more runtime features and origin events.

![[SAA-v48-p462-lambda-vpc.png]]
![[SAA-v48-p463-rds-proxy.png]]

Source slides: pp. 438-465.
