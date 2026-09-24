# Instance Scheduler on AWS

Instance Scheduler is an AWS Solutions Implementation deployed through CloudFormation, not a standalone AWS service.

- It starts and stops tagged EC2 instances, Auto Scaling Groups, and RDS instances on schedules.
- Schedules are stored in DynamoDB and executed by Lambda.
- It supports cross-account and cross-Region resources and can reduce cost for non-production workloads outside business hours.

Source slide: p. 851.
