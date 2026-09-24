# CloudTrail and AWS Config

## AWS CloudTrail

CloudTrail records API activity from the console, CLI, SDK, and AWS services for governance, audit, and investigation.

- Management events cover control-plane operations such as creating or deleting resources.
- Data events cover high-volume operations such as S3 object access and Lambda invocations.
- Insights detects unusual API activity and provisioning patterns.
- Events are available for a limited period in the console; create a trail to deliver them to S3 for long-term retention and Athena analysis.
- CloudWatch Logs, EventBridge, and SNS can react to selected events.

![[SAA-v48-p606-cloudtrail.png]]

## AWS Config

- Config records resource configuration and changes over time and evaluates compliance.
- Managed or custom rules check conditions such as public S3 buckets or unrestricted SSH.
- Rules can evaluate on every configuration change or on a schedule.
- Config does not prevent an action. Use IAM, SCP, or a resource policy for prevention; use Config and SSM Automation for detection and remediation.
- Aggregate data across accounts and Regions, store snapshots in S3, and notify through EventBridge or SNS.

![[SAA-v48-p613-config-rules.png]]

![[SAA-v48-p614-config-resource.png]]

## Quick Comparison

- CloudWatch: performance, metrics, logs, dashboards, alarms.
- CloudTrail: who called which API and when.
- Config: what a resource configuration was and whether it complied with a rule.

Source slides: pp. 605-618.
