# AWS Systems Manager

Systems Manager manages EC2 instances and supported on-premises servers without requiring inbound SSH.

- Session Manager opens an audited shell through the SSM Agent and IAM. It supports Linux, macOS, and Windows and can send session logs to S3 or CloudWatch Logs.
- Run Command executes a command or SSM document across selected instances and can send output or SNS notifications.
- Patch Manager scans and installs OS, application, and security updates. Maintenance Windows define when patches or other tasks may run.
- Automation uses runbooks to restart instances, create AMIs, take EBS snapshots, remediate Config findings, or perform deployment tasks.
- Parameter Store keeps hierarchical configuration and secrets and integrates with IAM, KMS, EventBridge, and CloudFormation.

![[SAA-v48-p832-ssm-session-manager.png]]

Use Session Manager for secure administration, Patch Manager for repeatable patching, Run Command for fleet operations, and Automation for multi-step remediation.

Source slides: pp. 664-667 and 832-836.
