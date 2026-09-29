# Stateless Web App - WhatIsTheTime

A classic solutions architect walkthrough: an app that reports the time, with no database and no need for a database.

## Requirements

- No database needed.
- Start small and accept downtime at first.
- Eventually scale vertically and horizontally with no downtime.

## Progression

1. **Starting simple** – one public EC2 instance with an Elastic IP.
2. **Scaling vertically** – move to a bigger instance. This causes downtime during the upgrade.
3. **Scaling horizontally** – add more instances and remove the Elastic IP, using Route 53 A records instead.
4. **Problem** – with DNS TTL caching, clients still reach instances that no longer exist.
5. **Add a load balancer** – instances become private, reachable only through the ELB with health checks; use an Alias record instead of an A record.
6. **Add an Auto Scaling Group** – instances are managed automatically.
7. **Make it multi-AZ** – deploy across AZs 1 to 3 so a disaster in one AZ does not take the app down.
8. **Reserve capacity** – with a minimum of 2 AZs, reserved instances on the minimum capacity give cost savings.

![[SAA-v48-p237-stateless-multi-az.png]]

## Concepts Discussed

- Public vs private IP and EC2 instances
- Elastic IP vs Route 53 vs load balancers
- Route 53 TTL, A records, and Alias records
- Manual EC2 management vs Auto Scaling Groups
- Multi-AZ to survive disasters
- ELB health checks
- Security group rules
- Reserving capacity for cost savings

## Related

- [[Architecture/Classic Solutions]]
- [[Compute/EC2/EC2]]
- [[Compute/Scaling/Auto Scaling Group]]
- [[Local Balancing/Load balancing]]

Source slides: pp. 229-239.
