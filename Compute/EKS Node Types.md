# EKS Node Types

## Managed Node Groups

- Creates and manages nodes (EC2 instances) for you.
- Nodes are part of an ASG managed by EKS.
- Supports On-Demand or Spot Instances.

## Self-Managed Nodes

- Nodes created by you and registered to the EKS cluster, managed by an ASG.
- You can use the prebuilt Amazon EKS Optimized AMI.
- Supports On-Demand or Spot Instances.

## AWS Fargate

- No maintenance required; no nodes managed.

![[SAA-v48-p436-eks-node-types.png]]

## Related

- [[Compute/EKS]]
- [[Compute/ECS Launch Types]]

Source slides: p. 436.
