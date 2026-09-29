# Internet Gateway and Route Tables

## Internet Gateway (IGW)

- Allows resources such as EC2 instances in a VPC to connect to the internet.
- Scales horizontally and is highly available and redundant.
- Must be created separately from a VPC.
- One VPC can only be attached to one IGW and vice versa.
- An IGW on its own does not allow internet access: route tables must also be edited.

## Route Tables

- Each subnet is associated with a route table.
- A public subnet has a route `0.0.0.0/0` pointing to the internet gateway.
- A private subnet has no such route, or routes to a NAT gateway instead.

## Related

- [[Network/VPC]]
- [[Network/VPC/CIDR and Subnets]]
- [[Network/VPC/NAT Gateway]]

Source slides: pp. 709-711.
