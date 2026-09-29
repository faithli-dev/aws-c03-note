# IAM Guidelines and Best Practices

## Best Practices

- Don't use the root account except for AWS account setup.
- One physical user = one AWS user.
- Assign users to groups and assign permissions to groups.
- Create a strong password policy.
- Use and enforce Multi Factor Authentication (MFA).
- Create and use roles for giving permissions to AWS services.
- Use access keys for programmatic access (CLI / SDK).
- Audit permissions with the IAM Credentials Report and IAM Access Advisor.
- Never share IAM users and access keys.

![[SAA-v48-p039-iam-best-practices.png]]

## Related

- [[Security/Role Based/Identity and Access Management (IAM)]]
- [[Security/Role Based/IAM Security Tools]]
- [[Connectivity/How to Access AWS]]

Source slides: p. 39.
