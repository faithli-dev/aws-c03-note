# AWS Threat Detection

- GuardDuty is a managed threat detection service using CloudTrail events, VPC Flow Logs, DNS logs, and optional EKS, RDS, EBS, Lambda, and S3 data sources. It uses anomaly detection and threat intelligence without agents.
- Findings can trigger EventBridge, SNS, or Lambda. GuardDuty includes detections for compromised resources and cryptocurrency mining.
- Inspector continuously scans EC2 packages and network reachability, ECR container images, and Lambda code or dependencies. Findings include CVE risk scores and integrate with Security Hub and EventBridge.
- Macie uses machine learning and pattern matching to discover sensitive data such as PII in S3 and publish findings.

![[SAA-v48-p686-guardduty.png]]
![[SAA-v48-p691-inspector.png]]
![[SAA-v48-p694-macie.png]]

Use GuardDuty for account and workload threat detection, Inspector for vulnerability assessment, and Macie for S3 data privacy discovery.

Source slides: pp. 692-696.
