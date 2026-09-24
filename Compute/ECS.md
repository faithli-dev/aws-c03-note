# Amazon ECS

Amazon Elastic Container Service runs Docker containers as ECS tasks inside an ECS cluster.

## Launch Types

- EC2 launch type: provision and maintain the EC2 worker instances. The ECS agent registers each instance and ECS places tasks on it.
- Fargate launch type: serverless containers. Define CPU, memory, networking, and task settings; AWS runs the tasks without customer-managed nodes.
- Use an Application Load Balancer for most HTTP services. Use a Network Load Balancer for high-throughput TCP/UDP or PrivateLink integrations.

![[SAA-v48-p421-ecs-ec2.png]]
![[SAA-v48-p422-ecs-fargate.png]]

## IAM and Storage

- The EC2 instance profile is used by the ECS agent to pull images, send logs, and access configuration or secrets.
- The task role gives each task its own permissions, such as access to S3 or DynamoDB.
- Mount EFS into ECS tasks when multiple tasks across AZs need shared persistent files. S3 is object storage and cannot be mounted as a file system.

![[SAA-v48-p425-ecs-efs.png]]

## Scaling and Integrations

- ECS Service Auto Scaling changes the desired task count using CPU, memory, ALB request count, target tracking, step, or scheduled policies.
- EC2 launch type may also need an Auto Scaling Group or Capacity Provider to add worker capacity.
- EventBridge can start scheduled or event-driven Fargate tasks. ECS tasks can poll SQS for buffered work.
- ECS task definitions specify the image, ports, CPU, memory, environment, logging, roles, and volumes.

Source slides: pp. 420-432.
