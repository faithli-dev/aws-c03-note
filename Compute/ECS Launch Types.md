# ECS Launch Types

Amazon ECS (Elastic Container Service) launches Docker containers as ECS Tasks on ECS Clusters.

## EC2 Launch Type

- You provision and maintain the infrastructure (the EC2 instances).
- Each EC2 instance must run the ECS Agent to register in the ECS cluster.
- AWS takes care of starting and stopping containers.

![[SAA-v48-p421-ecs-ec2-launch.png]]

## Fargate Launch Type

- You do not provision the infrastructure; there are no EC2 instances to manage.
- Fully serverless.
- You create task definitions and AWS runs ECS tasks based on the CPU and RAM you need.
- To scale, increase the number of tasks.

![[SAA-v48-p422-ecs-fargate.png]]

## Related

- [[Compute/ECS]]
- [[Compute/ECS IAM Roles]]
- [[Compute/ECS Auto Scaling]]

Source slides: pp. 421-422.
