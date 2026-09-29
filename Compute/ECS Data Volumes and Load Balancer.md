# ECS Data Volumes and Load Balancer

## Load Balancer Integrations

- **Application Load Balancer** – supported and works for most use cases.
- **Network Load Balancer** – recommended only for high throughput / high performance use cases, or to pair with AWS PrivateLink.
- **Classic Load Balancer** – supported but not recommended (no advanced features, no Fargate).

## Data Volumes (EFS)

- Mount EFS file systems onto ECS tasks.
- Works for both EC2 and Fargate launch types.
- Tasks running in any AZ share the same data in the EFS file system.
- Fargate + EFS = serverless.
- Use case: persistent multi-AZ shared storage for containers.
- Note: Amazon S3 cannot be mounted as a file system.

![[SAA-v48-p425-ecs-efs.png]]

## Related

- [[Compute/ECS]]
- [[Compute/Storage/Elastic File System (EFS)/Elastic File System (EFS)]]
- [[Local Balancing/Application Load Balancer]]

Source slides: pp. 424-425.
