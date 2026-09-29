# CloudWatch Insights

## Logs Insights

- Search and analyse log data stored in CloudWatch Logs.
- Example: find a specific IP in a log, count occurrences of "ERROR".
- Provides a purpose-built query language.
- Automatically discovers fields from AWS services and JSON log events.
- Fetch event fields, filter on conditions, calculate aggregate statistics, sort events, limit events.
- Queries can be saved and added to CloudWatch dashboards.
- Can query multiple log groups in different AWS accounts.
- It is a query engine, not a real-time engine.

## Container Insights

- Collect, aggregate, and summarise metrics and logs from containers.
- Available for Amazon ECS, Amazon EKS, Kubernetes platforms on EC2, and Fargate (for ECS and EKS).
- In EKS and Kubernetes, uses a containerised version of the CloudWatch agent to discover containers.

![[SAA-v48-p600-container-insights.png]]

## Lambda Insights

- Monitoring and troubleshooting solution for serverless applications on Lambda.
- Collects, aggregates, and summarises system-level metrics including CPU time, memory, disk, and network.
- Collects diagnostic information such as cold starts and Lambda worker shutdowns.
- Provided as a Lambda Layer.

## Contributor Insights

- Analyse log data and create time series that display contributor data.
- See metrics about the top-N contributors, the total number of unique contributors, and their usage.
- Helps find top talkers and understand what impacts system performance.
- Works for any AWS-generated logs (VPC, DNS).
- Find bad hosts, heaviest network users, or URLs that generate the most errors.
- Build rules from scratch or use AWS sample rules.

## Application Insights

- Automated dashboards showing potential problems with monitored applications, to help isolate ongoing issues.
- Applications run on EC2 instances with select technologies (Java, .NET, Microsoft IIS, databases) and can use other AWS resources such as EBS, RDS, ELB, ASG, Lambda, SQS, DynamoDB, S3, ECS, EKS, SNS, API Gateway.
- Powered by SageMaker.
- Findings and alerts are sent to Amazon EventBridge and SSM OpsCenter.

## Summary

- Container Insights – ECS, EKS, Kubernetes on EC2, Fargate; metrics and logs.
- Lambda Insights – detailed metrics for serverless applications.
- Contributor Insights – find top-N contributors through CloudWatch Logs.
- Application Insights – automatic dashboards to troubleshoot applications and related AWS services.

## Related

- [[Monitoring/CloudWatch]]
- [[Monitoring/CloudWatch Logs]]

Source slides: pp. 580-581, 600-604.
