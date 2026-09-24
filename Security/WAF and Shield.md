# AWS WAF, Shield, and Firewall Manager

## AWS WAF

AWS WAF protects HTTP applications at Layer 7. Attach a Web ACL to CloudFront, ALB, API Gateway, AppSync, or a Cognito User Pool.

- Rules can match IP sets, headers, URI strings, request bodies, size constraints, geography, SQL injection, and XSS patterns.
- Rate-based rules limit abusive request rates. Managed rule groups provide reusable protections.
- WAF is regional except when attached to CloudFront.

![[SAA-v48-p675-waf.png]]

## Shield
- Shield Standard is automatic protection against common Layer 3 and Layer 4 DDoS attacks.
- Shield Advanced adds stronger protection for selected AWS resources, the DDoS Response Team, advanced reporting, and cost protection.
- CloudFront, Global Accelerator, Route 53, and ELB reduce exposure by absorbing or distributing traffic at the edge.

## Firewall Manager
Firewall Manager applies organization-wide WAF, Shield Advanced, security group, Network Firewall, and Route 53 Resolver DNS Firewall policies. Use it to enforce protection on existing and newly created resources across accounts and Regions.

Source slides: pp. 682-691.
