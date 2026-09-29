# AWS WAF

AWS WAF (Web Application Firewall) protects web applications from common web exploits at Layer 7 (HTTP), versus Layer 4 which is TCP/UDP.

## Deployment Targets

- Application Load Balancer
- API Gateway
- CloudFront
- AppSync GraphQL API
- Cognito User Pool

![[SAA-v48-p682-waf.png]]

## Web ACL Rules

- **IP Set** – up to 10,000 IP addresses; use multiple rules for more IPs.
- **HTTP headers, HTTP body, or URI strings** – protects from common attacks such as SQL injection and cross-site scripting (XSS).
- **Size constraints** and **geo-match** (block countries).
- **Rate-based rules** – count occurrences of events, for DDoS protection.

Web ACLs are Regional except for CloudFront. A rule group is a reusable set of rules that can be added to a web ACL.

## Fixed IP with WAF and a Load Balancer

- WAF does not support the Network Load Balancer (Layer 4).
- Use Global Accelerator for a fixed IP and WAF on the ALB.
- The Web ACL must be in the same AWS Region as the ALB.

## Related

- [[Security/WAF and Shield]]
- [[Local Balancing/Application Load Balancer]]
- [[Network/CloudFront]]

Source slides: pp. 682-684.
