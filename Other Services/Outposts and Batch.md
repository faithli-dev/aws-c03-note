# AWS Outposts and Batch

## AWS Outposts
Outposts are AWS-managed racks installed in a customer data center. They provide selected AWS infrastructure, APIs, and services on premises for low latency, data residency, and gradual migration.

- Services include EC2, EBS, S3, EKS, ECS, RDS, and EMR in supported configurations.
- AWS manages the service and rack; the customer remains responsible for physical security and the local environment.

![[SAA-v48-p843-outposts.png]]

## AWS Batch
- Batch runs finite Docker-based jobs at scale and provisions the required EC2, Spot, ECS, EKS, or Fargate compute.
- Jobs can be queued, scheduled, retried, and prioritized without manually managing worker fleets.
- Compared with Lambda, Batch has no short function timeout, supports arbitrary runtimes in containers, and can use EBS or instance-store capacity.

![[SAA-v48-p846-batch.png]]

Source slides: pp. 843-847.
