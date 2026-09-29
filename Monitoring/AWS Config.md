# AWS Config

Helps with auditing and recording compliance of your AWS resources, and records configurations and changes over time.

## Questions It Answers

- Is there unrestricted SSH access to my security groups?
- Do my buckets have any public access?
- How has my ALB configuration changed over time?

![[SAA-v48-p612-aws-config.png]]

## Behaviour

- Receive alerts (SNS notifications) for any changes.
- AWS Config is a per-Region service, but can be aggregated across Regions and accounts.
- Configuration data can be stored in S3 and analysed with Athena.

## Config Rules

- Use AWS managed config rules (over 75) or make custom rules defined in AWS Lambda.
- Examples: evaluate if each EBS disk is of type gp2, or if each EC2 instance is `t2.micro`.
- Rules can be evaluated on each config change and/or at regular time intervals.
- **AWS Config Rules do not prevent actions from happening** (no deny).
- Pricing: no free tier; $0.003 per configuration item recorded per Region, $0.001 per config rule evaluation per Region.

## Config Resource View

- View compliance of a resource over time.
- View configuration of a resource over time.
- View CloudTrail API calls of a resource over time.

## Remediations

- Automate remediation of non-compliant resources using SSM Automation Documents.
- Use AWS-managed or custom Automation Documents.
- Custom Automation Documents can invoke a Lambda function.
- Set remediation retries if the resource is still non-compliant.

## Notifications

- Use EventBridge to trigger notifications when resources are non-compliant.
- Send configuration changes and compliance state notifications to SNS (filter with SNS filtering or client-side).

## Related

- [[Monitoring/Audit and Config]]
- [[Monitoring/CloudTrail]]
- [[Monitoring/Systems Manager]]

Source slides: pp. 612-616.
