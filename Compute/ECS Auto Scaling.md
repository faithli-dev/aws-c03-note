# ECS Auto Scaling

Automatically increase or decrease the desired number of ECS tasks. ECS Auto Scaling uses AWS Application Auto Scaling.

## Metrics and Policies

- ECS Service Average CPU Utilization
- ECS Service Average Memory Utilization (scale on RAM)
- ALB Request Count Per Target (metric from the ALB)
- **Target Tracking** – scale based on a target value for a specific CloudWatch metric.
- **Step Scaling** – scale based on a specified CloudWatch alarm.
- **Scheduled Scaling** – scale based on a specified date/time for predictable changes.

## Task Level vs Instance Level

ECS Service Auto Scaling (task level) is different from EC2 Auto Scaling (EC2 instance level). Fargate auto scaling is much easier to set up because it is serverless.

## EC2 Launch Type Auto Scaling

- **Auto Scaling Group Scaling** – scale the ASG based on CPU utilisation, adding EC2 instances over time.
- **ECS Cluster Capacity Provider** – automatically provisions and scales infrastructure for ECS tasks. Paired with an Auto Scaling Group, it adds EC2 instances when capacity (CPU, RAM) is missing.

## Related

- [[Compute/ECS]]
- [[Compute/ECS Launch Types]]
- [[Compute/Scaling/Auto Scaling Group]]

Source slides: pp. 426-428.
