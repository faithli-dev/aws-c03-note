# CloudWatch Logs

## Structure

- **Log groups** – arbitrary name, usually representing an application.
- **Log stream** – instances within an application, log files, or containers.
- Log expiration policies can be defined (never expire, 1 day to 10 years).

![[SAA-v48-p578-cloudwatch-logs.png]]

## Destinations

CloudWatch Logs can send logs to:

- Amazon S3 (exports)
- Kinesis Data Streams
- Kinesis Data Firehose
- AWS Lambda
- OpenSearch

Logs are encrypted by default; KMS-based encryption with your own keys can be configured.

## Sources

- SDK, CloudWatch Logs Agent, CloudWatch Unified Agent
- Elastic Beanstalk (application logs)
- ECS (container logs)
- AWS Lambda (function logs)
- VPC Flow Logs
- API Gateway
- CloudTrail based on filter
- Route 53 (DNS queries)

## S3 Export

- Log data can take up to 12 hours to become available for export.
- API call: `CreateExportTask`.
- Not near-real-time; use log subscriptions instead.

## Subscriptions

- Get real-time log events for processing and analysis.
- Send to Kinesis Data Streams, Kinesis Data Firehose, or Lambda.
- A subscription filter selects which log events are delivered.

## Logs for EC2

- By default, no logs from an EC2 machine go to CloudWatch.
- Run a CloudWatch agent on EC2 to push the log files you want.
- Make sure IAM permissions are correct.
- The agent can also be set up on-premises.

## Logs Agent vs Unified Agent

- **CloudWatch Logs Agent** – the old version; can only send to CloudWatch Logs.
- **CloudWatch Unified Agent** – collects additional system-level metrics such as RAM and processes, collects logs, and uses centralised configuration with SSM Parameter Store.

## Unified Agent Metrics

CPU (active, guest, idle, system, user, steal), disk metrics (free, used, total), disk IO, RAM (free, inactive, used, total, cached), netstat (TCP/UDP connections, packets, bytes), processes (total, dead, blocked, idle, running, sleep), and swap space.

## Related

- [[Monitoring/CloudWatch]]
- [[Monitoring/CloudWatch Insights]]
- [[Monitoring/Systems Manager]]

Source slides: pp. 578-588.
