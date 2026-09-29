# IAM Roles for Services

Some AWS services need to perform actions on your behalf. Instead of storing access keys, assign permissions to the service with an IAM role.

## How It Works

- A role is assumed by an AWS service, not by a person.
- The service receives temporary credentials from AWS Security Token Service (STS).
- Roles are the recommended way to grant EC2, Lambda, and CloudFormation permissions.

![[SAA-v48-p037-iam-service-role.png]]

## Common Roles

- EC2 Instance Roles
- Lambda Function Roles
- Roles for CloudFormation

## Related

- [[Security/Role Based/Identity and Access Management (IAM)]]
- [[Connectivity/How to Access AWS]]
- [[Security/Role Based/IAM Guidelines and Best Practices]]

Source slides: p. 37.
