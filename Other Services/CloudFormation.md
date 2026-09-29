# AWS CloudFormation

CloudFormation is a declarative way of outlining your AWS infrastructure for any resources (most are supported).

## Declarative Model

Within a CloudFormation template you say:

- I want a security group.
- I want two EC2 instances using this security group.
- I want an S3 bucket.
- I want a load balancer in front of these machines.

CloudFormation creates them in the right order with the exact configuration you specify.

## Benefits

### Infrastructure as Code

- No resources are manually created, which is excellent for control.
- Changes to the infrastructure are reviewed through code.

### Cost

- Each resource within the stack is tagged with an identifier, so you can see how much a stack costs.
- Estimate the cost of resources using the template.
- Savings strategy: in dev, automate deletion of templates at 5 PM and recreation at 8 AM.

### Productivity

- Destroy and recreate infrastructure on the fly.
- Automated generation of diagrams for your templates.
- Declarative programming: no need to figure out ordering and orchestration.
- Leverage existing templates and documentation.
- Supports almost all AWS resources; use custom resources for unsupported ones.

## Infrastructure Composer

CloudFormation plus Infrastructure Composer visualises a stack, for example a WordPress stack, showing all resources and the relations between components.

![[SAA-v48-p828-infrastructure-composer.png]]

## Service Role

An IAM role that allows CloudFormation to create, update, and delete stack resources on your behalf. It lets users create, update, and delete stack resources even if they do not have permissions to work with those resources directly.

Use cases: achieve least privilege without giving users all required permissions to create stack resources. The user must have `iam:PassRole` permission.

![[SAA-v48-p829-cloudformation-service-role.png]]

## Related

- [[Other Services/Other Services]]
- [[Security/Role Based/IAM Roles for Services]]

Source slides: pp. 825-829.
