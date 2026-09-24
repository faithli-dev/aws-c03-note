# Amazon CloudWatch

CloudWatch monitors AWS resources and applications with metrics, logs, alarms, dashboards, and event-driven integrations.

## Metrics and Logs

- Metrics belong to namespaces and use dimensions such as instance ID or environment.
- AWS services publish default metrics; custom metrics can publish application or system values.
- Log groups contain log streams. Set retention and encryption policies, and send logs to S3, Kinesis, Lambda, or OpenSearch.
- Logs Insights uses a query language to search and aggregate logs; it is a query engine, not a real-time stream.
- Subscription filters stream matching log events to Kinesis, Firehose, or Lambda.
- The Unified CloudWatch Agent collects RAM, disk, process, network, and log data from EC2 or on-premises servers.

![[SAA-v48-p578-cloudwatch-overview.png]]

## Alarms and Insights

- Alarm states are OK, ALARM, and INSUFFICIENT_DATA.
- Alarm targets include SNS, Auto Scaling, and EC2 stop, terminate, reboot, or recover actions.
- Composite alarms combine multiple alarms with AND/OR logic to reduce noise.
- Container Insights monitors ECS, EKS, Kubernetes on EC2, and Fargate. Lambda Insights adds function system metrics and cold-start diagnostics.
- Metric Streams deliver near-real-time metrics to Firehose and external monitoring tools.

![[SAA-v48-p590-cloudwatch-alarm-targets.png]]

Source slides: pp. 575-604.
