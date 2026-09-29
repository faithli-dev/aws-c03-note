# NAT Gateway

An AWS-managed NAT with higher bandwidth, high availability, and no administration.

## Behaviour

- Pay per hour for usage and bandwidth.
- Created in a specific Availability Zone and uses an Elastic IP.
- Cannot be used by an EC2 instance in the same subnet, only from other subnets.
- Requires an internet gateway: private subnet → NAT gateway → IGW.
- 5 Gbps of bandwidth with automatic scaling up to 100 Gbps.
- No security groups to manage or require.

![[SAA-v48-p716-nat-gateway.png]]

## High Availability

- A NAT gateway is resilient within a single AZ.
- Create multiple NAT gateways in multiple AZs for fault tolerance.
- No cross-AZ failover is needed because if an AZ goes down it does not need NAT.

## NAT Gateway vs NAT Instance

| | NAT Gateway | NAT Instance |
|---|---|---|
| Availability | Highly available within AZ (create in another AZ) | Use a script to manage failover between instances |
| Bandwidth | Up to 100 Gbps | Depends on EC2 instance type |
| Maintenance | Managed by AWS | Managed by you (software, OS patches) |
| Cost | Per hour and amount of data transferred | Per hour, EC2 instance type and size, plus network |
| Public IPv4 | Yes | No (private IPv4) |
| Security groups | No | Yes |
| Can be used as a bastion host | No | Yes |

## Regional NAT Gateway (RNAT)

- Highly available NAT gateway associated with a VPC.
- Has its own route tables.
- Eliminates the need for per-AZ deployments (shared across AZs).
- You do not need to create public subnets to host the RNAT.
- Automatically detects resources in a new AZ and expands to that AZ.

![[SAA-v48-p720-regional-nat-gateway.png]]

## Related

- [[Network/VPC/NAT Instance]]
- [[Network/VPC/Internet Gateway and Route Tables]]
- [[Network/Public/Elastic IP]]

Source slides: pp. 716-720.
