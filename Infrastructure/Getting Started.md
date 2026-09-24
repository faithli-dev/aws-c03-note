# Getting Started with AWS

AWS provides managed services for enterprise IT, backup and storage, web hosting, mobile applications, gaming, big data, and analytics.

## Service Scope

- Global services include IAM, Route 53, CloudFront, and WAF.
- Region-scoped services include EC2, Elastic Beanstalk, Lambda, and many databases.
- Select the Region before creating a regional resource. Cross-Region access and replication must be designed explicitly.

## Choosing a Region

- Compliance and data governance may require data to remain in a particular geography.
- Proximity to users affects latency.
- Service and feature availability differs by Region.
- Prices differ by Region, so compare the service pricing page for the target workload.

## Infrastructure Layers

- Regions contain multiple Availability Zones.
- AZs contain one or more isolated data centers with redundant power, networking, and connectivity.
- Edge locations and Regional Edge Caches serve content close to end users.

![[SAA-v48-p018-global-infrastructure.png]]

Source slides: pp. 14-23.
