# AWS Firewall Manager

Manage rules in all accounts of an AWS Organization.

## Security Policy

A security policy is a common set of security rules:

- WAF rules (Application Load Balancer, API Gateway, CloudFront)
- AWS Shield Advanced (ALB, CLB, NLB, Elastic IP, CloudFront)
- Security groups for EC2, ALB, and ENI resources in a VPC
- AWS Network Firewall (VPC level)
- Amazon Route 53 Resolver DNS Firewall

![[SAA-v48-p686-firewall-manager.png]]

## Behaviour

- Policies are created at the Region level.
- Rules are applied to new resources as they are created, which is good for compliance across all current and future accounts in the Organization.

## WAF vs Firewall Manager vs Shield

- WAF, Shield, and Firewall Manager are used together for comprehensive protection.
- Define Web ACL rules in WAF; for granular protection of resources, WAF alone is the correct choice.
- To use WAF across accounts, accelerate WAF configuration, and automate protection of new resources, use Firewall Manager with WAF.
- Shield Advanced adds features on top of WAF, such as dedicated support from the Shield Response Team and advanced reporting.
- If you are prone to frequent DDoS attacks, consider purchasing Shield Advanced.

## Related

- [[Security/WAF and Shield]]
- [[Security/AWS WAF]]
- [[Security/AWS Shield]]

Source slides: pp. 686-687.
