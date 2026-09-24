# Classic Solutions Architecture

## Stateless Web Application
Start with one public EC2 instance, then evolve toward Route 53, an Alias record, an ELB, private EC2 instances, an Auto Scaling Group, and multiple AZs. Reserve capacity or use Savings Plans only after the workload is understood.

![[SAA-v48-p235-classic-stateless-alb.png]]

## Stateful Web Application
- Keep the web tier stateless so it can scale horizontally.
- Sticky sessions preserve a user-to-instance relationship but can create imbalance.
- Store session data in ElastiCache or DynamoDB and pass only a session ID in the cookie.
- Store user data in RDS, use Read Replicas for read scaling, and Multi-AZ for failover.
- Apply tiered security groups: Internet to load balancer, load balancer to EC2, EC2 to RDS and ElastiCache.

![[SAA-v48-p244-classic-session-cache.png]]

## WordPress and Shared Files
- Put the web tier behind an ALB and ASG.
- Use Aurora/RDS Multi-AZ for relational content and read replicas for reads.
- Store shared uploads in EFS when multiple instances across AZs must access the same files; EBS is instance/AZ-bound.

![[SAA-v48-p256-classic-wordpress-efs.png]]

Source slides: pp. 227-266.
