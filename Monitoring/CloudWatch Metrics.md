# CloudWatch Metrics

CloudWatch provides metrics for every service in AWS.

## Concepts

- A **metric** is a variable to monitor (`CPUUtilization`, `NetworkIn`).
- Metrics belong to **namespaces**.
- A **dimension** is an attribute of a metric (instance ID, environment). Up to 30 dimensions per metric.
- Metrics have timestamps.
- Create CloudWatch dashboards of metrics.
- Create CloudWatch custom metrics, for example for RAM.

![[SAA-v48-p576-cloudwatch-metrics.png]]

## Metric Streams

- Continually stream CloudWatch metrics to a destination with near-real-time delivery and low latency.
- Destinations: Amazon Kinesis Data Firehose (and its destinations) or third-party providers such as Datadog, Dynatrace, New Relic, Splunk, and Sumo Logic.
- Option to filter metrics and stream only a subset.

## Related

- [[Monitoring/CloudWatch]]
- [[Monitoring/CloudWatch Alarms]]

Source slides: pp. 576-577.
