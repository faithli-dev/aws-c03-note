# Private vs Public IP (IPv4)

## IP Versions

- **IPv4**: `1.160.10.240`, written as `[0-255].[0-255].[0-255].[0-255]`. About 3.7 billion public addresses.
- **IPv6**: `3ffe:1900:4545:3:200:f8ff:fe21:67cf`. Newer, solves Internet of Things addressing.

## Public IP

- The machine is identifiable on the internet.
- Must be unique across the whole web.
- Can be geo-located easily.

## Private IP

- The machine is identifiable only on a private network.
- Must be unique within the private network, but two different private networks can reuse the same range.
- Machines reach the internet through a NAT + internet gateway.
- Only specified ranges may be used as private IPs.

![[SAA-v48-p081-private-vs-public-ip.png]]

## Behaviour in EC2

- By default an EC2 instance gets a private IP for the AWS network and a public IP for the internet.
- You cannot SSH over the private IP from outside the VPC; use the public IP or a bastion.
- Stopping and starting an instance can change its public IP. Use an [[Network/Public/Elastic IP]] for a fixed address.

## Related

- [[Network/VPC]]
- [[Network/Public/Elastic IP]]
- [[Network/Elastic Network Interfaces]]

Source slides: pp. 79-84.
