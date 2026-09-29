# Blocking an IP Address

Several layers can block a specific IP address.

## Without a Load Balancer

- **NACL** – deny and allow rules at the subnet level (stateless).
- **Security group** – allow rules only, at the instance level.
- Optional firewall software on the EC2 instance.

![[SAA-v48-p810-blocking-ip.png]]

## With an Application Load Balancer

- The client connects to the ALB (connection termination).
- The ALB security group and the EC2 security group apply.
- NACLs still apply at the subnet level.

## With a Network Load Balancer

- Similar, but the NLB is Layer 4.
- Use the NLB security group and NACLs.

## ALB + WAF

- Attach AWS WAF to the ALB for IP address filtering.

## ALB, CloudFront, and WAF

- Attach WAF to CloudFront for IP filtering and use CloudFront geo restriction.
- Note: blocking the CloudFront public IPs is **not** helpful, because the client IP is not the CloudFront IP.

## Related

- [[Architecture/More Solutions Architecture]]
- [[Security/AWS WAF]]
- [[Network/VPC/Security Groups vs NACLs]]

Source slides: pp. 810-814.
