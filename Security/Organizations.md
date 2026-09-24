# AWS Organizations and SCP

AWS Organizations manages multiple AWS accounts under one organization.

- The management account creates and governs member accounts. Accounts can be grouped into Organizational Units.
- Consolidated billing combines usage and can share volume discounts, Reserved Instances, and Savings Plans.
- Centralize CloudTrail and CloudWatch Logs, standardize tags, and use cross-account administrator roles.
- Service Control Policies set the maximum permissions available to accounts, OUs, users, and roles. SCPs do not grant permissions; an IAM policy must still allow the action.
- The management account is not restricted by SCPs. A member account needs an explicit allow through every OU in the path and must not be denied by any SCP.
- Tag Policies standardize tag keys and values and help with billing and attribute-based access control.

![[SAA-v48-p621-organizations.png]]

Use Organizations for account isolation, central billing, guardrails, and delegated administration. Prefer multiple accounts when workload, environment, security, or billing boundaries need to be independent.

Source slides: pp. 619-626.
