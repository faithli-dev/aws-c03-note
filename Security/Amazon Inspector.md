# Amazon Inspector

Automated security assessments.

## Targets

- **EC2 instances** – leveraging the AWS Systems Manager (SSM) agent; analyse against unintended network accessibility and analyse the running OS against known vulnerabilities.
- **Container images pushed to Amazon ECR** – assessment as images are pushed.
- **Lambda functions** – identifies software vulnerabilities in function code and package dependencies; assessment as functions are deployed.

![[SAA-v48-p694-inspector.png]]

## What It Evaluates

- Only for EC2 instances, container images, and Lambda functions.
- Continuous scanning of the infrastructure, only when needed.
- Package vulnerabilities (EC2, ECR, Lambda) against a database of CVEs.
- Network reachability (EC2).
- A risk score is associated with all vulnerabilities for prioritisation.

## Reporting

- Integration with AWS Security Hub.
- Send findings to Amazon EventBridge.

## Related

- [[Security/Threat Detection]]
- [[Security/Amazon GuardDuty]]
- [[Compute/Containers/ECR]]

Source slides: pp. 694-695.
