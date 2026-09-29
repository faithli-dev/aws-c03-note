# CloudTrail and AWS Config

## CloudWatch vs CloudTrail vs Config

- **CloudWatch** – performance monitoring (metrics, CPU, network) and dashboards; events and alerting; log aggregation and analysis.
- **CloudTrail** – record API calls made within your account by everyone; define trails for specific resources; global service.
- **Config** – record configuration changes; evaluate resources against compliance rules; get a timeline of changes and compliance.

![[SAA-v48-p617-cloudwatch-cloudtrail-config.png]]

## Example: Elastic Load Balancer

- **CloudWatch** – monitor incoming connections, visualise error codes as a percentage over time, build a dashboard for load balancer performance.
- **Config** – track security group rules, track configuration changes, ensure an SSL certificate is always assigned (compliance).
- **CloudTrail** – track who made any changes to the load balancer with API calls.

## Topics

- [[Monitoring/CloudTrail]]
- [[Monitoring/AWS Config]]
- [[Monitoring/CloudWatch]]

## Related

- [[Monitoring/Monitoring]]
- [[Integration/EventBridge]]

Source slides: pp. 605-618.
