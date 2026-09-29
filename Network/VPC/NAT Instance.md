# NAT Instance

NAT = Network Address Translation. A NAT instance is outdated but still appears on the exam.

## Behaviour

- Allows EC2 instances in private subnets to connect to the internet.
- Must be launched in a public subnet.
- Must disable the EC2 setting **Source / destination Check**.
- Must have an Elastic IP attached.
- Route tables must route traffic from private subnets to the NAT instance.

![[SAA-v48-p716-nat-gateway.png]]

## Comments

- A pre-configured Amazon Linux AMI is available; it reached end of standard support on 31 December 2020.
- Not highly available or resilient out of the box; create an ASG in multi-AZ with a resilient user-data script.
- Internet traffic bandwidth depends on the EC2 instance type.
- You must manage security groups and rules:
	- **Inbound** – allow HTTP/HTTPS from private subnets; allow SSH from your home network.
	- **Outbound** – allow HTTP/HTTPS to the internet.

## Related

- [[Network/VPC/NAT Gateway]]
- [[Network/VPC]]

Source slides: pp. 713-715.
