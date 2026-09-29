# AWS Global Services

Before creating a resource, know whether the service is global or Region-scoped. Global services are not tied to one Region; most other services are created inside a chosen Region.

## Global Services

- [[Security/Role Based/Identity and Access Management (IAM)]] – users, groups, roles, and policies.
- [[Network/Route 53]] – DNS service.
- [[Network/CloudFront]] – content delivery network.
- [[Security/WAF and Shield]] – web application firewall.

## Region-Scoped Services

- [[Compute/EC2/EC2]] – Infrastructure as a Service.
- [[Compute/Elastic Beanstalk]] – Platform as a Service.
- [[Serverless/Lambda]] – Function as a Service.
- Amazon Rekognition – Software as a Service.

![[SAA-v48-p023-global-vs-regional-services.png]]

## Region Table

Not every service is available in every Region. Check the AWS regional product services table before choosing a Region.

Source slides: p. 23.
