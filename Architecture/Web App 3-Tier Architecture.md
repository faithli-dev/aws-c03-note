# Web App 3-Tier Architecture

The typical AWS web application architecture separates public, private, and data tiers.

## Tiers

- **Public subnet** – Route 53 and the ELB face the internet.
- **Private subnet** – the Auto Scaling Group of application instances; ElastiCache stores session data and cached data.
- **Data subnet** – Amazon RDS for read/write data.

## Diagram

![[SAA-v48-p260-web-app-3-tier.png]]

## Related

- [[Architecture/Classic Solutions]]
- [[Network/VPC]]
- [[Local Balancing/Load balancing]]
- [[Database/Cache/ElastiCache]]

Source slides: p. 260.
