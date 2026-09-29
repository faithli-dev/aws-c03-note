# Amazon GuardDuty

Intelligent threat discovery to protect your AWS account.

## Characteristics

- Uses machine learning algorithms, anomaly detection, and third-party data.
- One click to enable (30-day trial); no software to install.

## Input Data

- **CloudTrail event logs** – unusual API calls, unauthorised deployments.
- **CloudTrail management events** – create VPC subnet, create trail.
- **CloudTrail S3 data events** – get object, list objects, delete object.
- **VPC Flow Logs** – unusual internal traffic, unusual IP address.
- **DNS logs** – compromised EC2 instances sending encoded data within DNS queries.
- Optional features: EKS audit logs, RDS and Aurora, EBS, Lambda, S3 data events.

![[SAA-v48-p692-guardduty.png]]

## Automation

- Set up EventBridge rules to be notified of findings.
- EventBridge rules can target AWS Lambda or SNS.
- Protects against cryptocurrency attacks with a dedicated finding.

## Related

- [[Security/Threat Detection]]
- [[Security/Amazon Inspector]]
- [[Security/Amazon Macie]]

Source slides: pp. 692-693.
