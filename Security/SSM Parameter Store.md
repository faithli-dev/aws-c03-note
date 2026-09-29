# SSM Parameter Store

Secure storage for configuration and secrets.

## Characteristics

- Optional seamless encryption using KMS.
- Serverless, scalable, durable, with an easy SDK.
- Version tracking of configurations and secrets.
- Security through IAM.
- Notifications with Amazon EventBridge.
- Integration with CloudFormation.

![[SAA-v48-p664-ssm-parameter-store.png]]

## Hierarchy

Parameters are organised in paths, for example:

- `/my-department/my-app/dev/db-url`
- `/my-department/my-app/prod/db-password`
- `/aws/reference/secretsmanager/secret_ID_in_Secrets_Manager`
- `/aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2` (public)

Applications use `GetParameters` or `GetParametersByPath`.

![[SAA-v48-p665-parameter-hierarchy.png]]

## Standard vs Advanced Parameter Tiers

| | Standard | Advanced |
|---|---|---|
| Total parameters per account and Region | 10,000 | 100,000 |
| Maximum parameter value size | 4 KB | 8 KB |
| Parameter policies available | No | Yes |
| Cost | No additional charge | Charges apply |
| Storage pricing | Free | $0.05 per advanced parameter per month |

## Parameter Policies (advanced parameters)

- Assign a TTL to a parameter (expiration date) to force updating or deleting sensitive data such as passwords.
- Can assign multiple policies at a time.
- Policy types: Expiration (delete a parameter), ExpirationNotification (EventBridge), NoChangeNotification (EventBridge).

## Related

- [[Security/Secrets and Certificates]]
- [[Security/AWS Secrets Manager]]
- [[Monitoring/Systems Manager]]

Source slides: pp. 664-667.
