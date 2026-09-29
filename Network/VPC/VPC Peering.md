# VPC Peering

Privately connect two VPCs using the AWS network, making them behave as if they were in the same network.

## Rules

- Must not have overlapping CIDRs.
- VPC peering is **not transitive**. A peering must be established for each pair of VPCs that need to communicate.
- Update route tables in each VPC's subnets so EC2 instances can communicate.

![[SAA-v48-p729-vpc-peering.png]]

## Good to Know

- Create peering connections between VPCs in different AWS accounts or Regions.
- You can reference a security group in a peered VPC (works cross-account within the same Region).

## Related

- [[Network/VPC]]
- [[Network/VPC/Transit Gateway]]
- [[Network/Network Connectivity]]

Source slides: pp. 729-731.
