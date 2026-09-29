# ECS IAM Roles

## EC2 Instance Profile (EC2 Launch Type only)

Used by the ECS agent to:

- Make API calls to the ECS service.
- Send container logs to CloudWatch Logs.
- Pull Docker images from ECR.
- Reference sensitive data in Secrets Manager or SSM Parameter Store.

## ECS Task Role

- Allows each task to have a specific role.
- Use different roles for the different ECS services you run.
- The task role is defined in the task definition.

![[SAA-v48-p423-ecs-iam-roles.png]]

## Related

- [[Compute/ECS]]
- [[Compute/ECS Launch Types]]
- [[Security/Role Based/IAM Roles for Services]]

Source slides: p. 423.
