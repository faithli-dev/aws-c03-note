# VPC Flow Logs

Capture information about IP traffic going into your interfaces:

- VPC Flow Logs
- Subnet Flow Logs
- Elastic Network Interface (ENI) Flow Logs

## Characteristics

- Helps monitor and troubleshoot connectivity issues.
- Flow log data can go to S3, CloudWatch Logs, and Kinesis Data Firehose.
- Captures network information from AWS managed interfaces too: ELB, RDS, ElastiCache, Redshift, WorkSpaces, NAT gateway, Transit Gateway.

## Syntax

Key fields:

- `srcaddr` and `dstaddr` – identify problematic IPs.
- `srcport` and `dstport` – identify problematic ports.
- `action` – success or failure of the request due to security group or NACL.

Can be used for analytics on usage patterns or malicious behaviour. Query flow logs using Athena on S3 or CloudWatch Logs Insights.

![[SAA-v48-p739-vpc-flow-logs-syntax.png]]

## Troubleshooting Security Groups and NACLs

- **Inbound REJECT** → NACL or security group.
- **Inbound ACCEPT, Outbound REJECT** → NACL.
- **Outbound REJECT** → NACL or security group.
- **Outbound ACCEPT, Inbound REJECT** → NACL.

Look at the `action` field.

## Architectures

- Flow logs → CloudWatch Logs → CloudWatch Contributor Insights (top-10 IP addresses) or metric filter and alarm to SNS.
- Flow logs → S3 bucket → Athena → QuickSight.

## CloudWatch Permissions

The IAM service role associated with VPC Flow Logs must have `logs:CreateLogGroup`, `logs:CreateLogStream`, and `logs:PutLogEvents`.

## Related

- [[Network/VPC Security]]
- [[Monitoring/CloudWatch Logs]]
- [[Monitoring/CloudWatch Insights]]

Source slides: pp. 737-742.
