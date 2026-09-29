# Bastion Hosts

A bastion host is used to SSH into private EC2 instances.

## Behaviour

- The bastion is in a public subnet, connected to all other private subnets.
- The bastion host security group must allow inbound from the internet on port 22 from a restricted CIDR, for example the public CIDR of your corporation.
- The security group of the EC2 instances must allow the security group of the bastion host, or the private IP of the bastion host.

![[SAA-v48-p712-bastion-host.png]]

## Related

- [[Network/VPC]]
- [[Compute/EC2/SSH into EC2]]
- [[Network/VPC Security]]

Source slides: p. 712.
