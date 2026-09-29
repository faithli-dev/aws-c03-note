# IPv6 and Egress-Only Internet Gateway

## What is IPv6?

- IPv4 was designed to provide 4.3 billion addresses, which will be exhausted.
- IPv6 is the successor, designed to provide 3.4 x 10^38 unique IP addresses.
- Every IPv6 address in AWS is public and internet-routable (no private range).
- Format: `x.x.x.x.x.x.x.x` where `x` is hexadecimal from `0000` to `ffff`.
- Examples: `2001:db8:3333:4444:5555:6666:7777:8888`.
- Short forms: `::` means all 8 segments are zero; `2001:db8::` means the last 6 segments are zero; `::1234:5678` means the first 6 are zero; `2001:db8::1234:5678` means the middle 4 are zero.

## IPv6 in a VPC

- IPv4 cannot be disabled for your VPC and subnets.
- You can enable IPv6 (public IP addresses) to operate in dual-stack mode.
- EC2 instances get at least a private internal IPv4 and a public IPv6.
- They can communicate using either IPv4 or IPv6 to the internet through an internet gateway.

## IPv4 Troubleshooting

- IPv4 cannot be disabled for your VPC and subnets.
- If you cannot launch an EC2 instance in your subnet, it is not because it cannot acquire an IPv6 address (the space is very large).
- It is because there are no available IPv4 addresses in your subnet.
- Solution: create a new IPv4 CIDR in your subnet.

## Egress-Only Internet Gateway

- Provides outbound-only internet access for IPv6, similar to how a NAT gateway works for IPv4.
- Prevents the internet from initiating connections to your IPv6 instances.

## Related

- [[Network/VPC]]
- [[Network/VPC/NAT Gateway]]
- [[Network/VPC/CIDR and Subnets]]

Source slides: pp. 760-764.
