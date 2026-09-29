# IAM Roles vs Resource-Based Policies

## Cross-Account Access

Two options:

1. Attach a resource-based policy to the resource, for example an S3 bucket policy.
2. Use a role as a proxy.

![[SAA-v48-p632-roles-vs-resource-policies.png]]

## Difference

- When you **assume a role** (user, application, or service), you give up your original permissions and take the permissions assigned to the role.
- When using a **resource-based policy**, the principal does not have to give up their permissions.

## Example

A user in Account A needs to scan a DynamoDB table in Account A and dump it into an S3 bucket in Account B. A resource-based policy lets the user keep their original permissions while accessing the bucket.

Supported by Amazon S3 buckets, SNS topics, SQS queues, and others.

## EventBridge Security

When an EventBridge rule runs, it needs permissions on the target:

- **Resource-based policy** – Lambda, SNS, SQS, S3 buckets, API Gateway.
- **IAM role** – EC2 Auto Scaling, Systems Manager Run Command, ECS task.

## Related

- [[Security/Role Based/IAM Roles for Services]]
- [[Security/Role Based/IAM Permission Policies]]
- [[Integration/EventBridge]]

Source slides: pp. 631-633.
