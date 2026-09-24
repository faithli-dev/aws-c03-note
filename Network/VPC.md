# Amazon VPC

Amazon VPC is a logically isolated network in a Region. Design its CIDR, subnets, routes, gateways, and security controls before launching workloads.

![[SAA-v48-p698-vpc-overview.png]]

## CIDR and Subnets

- A VPC CIDR defines the private IPv4 address range. Avoid overlap with corporate networks or other VPCs.
- A subnet belongs to one Availability Zone. A public subnet has a route to an Internet Gateway; a private subnet has no direct inbound Internet route.
- AWS reserves five IPv4 addresses in every subnet: network, router, DNS, future use, and broadcast.
- The default VPC provides public connectivity and public IPv4 addresses, but production designs usually create deliberate subnets and routes.

![[SAA-v48-p700-cidr.png]]
![[SAA-v48-p707-vpc-subnets.png]]

## Gateways and Routes

- An Internet Gateway is attached to a VPC and provides Internet access only when route tables direct traffic to it.
- A NAT Gateway gives private IPv4 resources outbound Internet access. It is AZ-scoped, managed by AWS, and should be deployed per AZ for resilience.
- A bastion host is a public EC2 entry point for SSH to private instances; restrict its source CIDR and prefer Session Manager when possible.
- Route tables are associated with subnets. More specific routes win over less specific routes.

![[SAA-v48-p710-internet-gateway.png]]
![[SAA-v48-p719-nat-gateway.png]]

Source slides: pp. 697-720.
