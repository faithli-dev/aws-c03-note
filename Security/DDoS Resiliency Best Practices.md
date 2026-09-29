# DDoS Resiliency Best Practices

## Edge Location Mitigation

- **CloudFront (BP1)** – web application delivery at the edge; protects from common DDoS attacks (SYN floods, UDP reflection).
- **Global Accelerator (BP1)** – access your application from the edge with Shield integration; helpful if your backend is not compatible with CloudFront.
- **Route 53 (BP3)** – domain name resolution at the edge with DDoS protection.

## Infrastructure Layer Defense

- Protect Amazon EC2 against high traffic using Global Accelerator, Route 53, CloudFront, and Elastic Load Balancing.
- **Amazon EC2 with Auto Scaling (BP7)** – scale for sudden traffic surges including flash crowds or DDoS attacks.
- **Elastic Load Balancing (BP6)** – scales with traffic increases and distributes traffic to many EC2 instances.

## Application Layer Defense

- **Detect and filter malicious web requests (BP1, BP2)** – CloudFront caches static content at the edge, protecting the backend; AWS WAF on top of CloudFront and ALB filters and blocks requests based on signatures; WAF rate-based rules block bad actors automatically; managed rules block based on IP reputation or anonymous IPs; CloudFront can block specific geographies.
- **Shield Advanced (BP1, BP2, BP6)** – automatic application layer DDoS mitigation creates, evaluates, and deploys WAF rules to mitigate Layer 7 attacks.

## Attack Surface Reduction

- **Obfuscating AWS resources (BP1, BP4, BP6)** – use CloudFront, API Gateway, and Elastic Load Balancing to hide backend resources (Lambda functions, EC2 instances).
- **Security groups and NACLs (BP5)** – filter traffic based on specific IPs at the subnet or ENI level; Elastic IPs are protected by Shield Advanced.
- **Protecting API endpoints (BP4)** – hide EC2 and Lambda behind edge-optimized mode or CloudFront plus regional mode; use WAF with API Gateway for burst limits, header filtering, and API keys.

## Related

- [[Security/AWS Shield]]
- [[Security/AWS WAF]]
- [[Network/CloudFront]]
- [[Network/Global Accelerator]]

Source slides: pp. 688-691.
