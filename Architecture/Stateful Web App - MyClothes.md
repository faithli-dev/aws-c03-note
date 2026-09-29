# Stateful Web App - MyClothes

MyClothes.com sells clothes online. It has a shopping cart and hundreds of concurrent users.

## Requirements

- Scale horizontally and keep the web application as stateless as possible.
- Users must not lose their shopping cart.
- User details (address and so on) must be stored in a database.

## Progression

1. **Multi-AZ with Auto Scaling Group** – the baseline.
2. **Introduce stickiness (session affinity)** – the same user always reaches the same instance.
3. **Introduce user cookies** – send the shopping cart content in web cookies. Makes the app stateless, but HTTP requests are heavier, cookies can be altered (security risk), they must be validated, and they must be under 4 KB.
4. **Introduce server session** – send a `session_id` in web cookies and store session data in ElastiCache (DynamoDB is an alternative).

![[SAA-v48-p244-server-session.png]]

5. **Store user data in a database** – Amazon RDS stores user data such as address and name.

![[SAA-v48-p245-stateful-database.png]]

6. **Scale reads** – add RDS read replicas, or use lazy loading with ElastiCache.

![[SAA-v48-p246-stateful-read-replicas.png]]

7. **Multi-AZ to survive disasters** – ElastiCache Multi-AZ and RDS Multi-AZ.
8. **Security groups** – open HTTP/HTTPS to the internet on the ELB, restrict EC2 traffic to the load balancer security group, and restrict RDS and ElastiCache traffic to the EC2 security group.

## Concepts Discussed

- 3-tier architectures for web applications
- ELB sticky sessions
- Web clients for storing cookies and making the web app stateless
- ElastiCache for sessions (alternative: DynamoDB) and for caching data from RDS
- RDS for user data, read replicas for read scaling, Multi-AZ for disaster recovery
- Tight security with security groups referencing each other

## Related

- [[Architecture/Classic Solutions]]
- [[Database/Cache/ElastiCache]]
- [[Database/RDS/RDS]]
- [[Local Balancing/Sticky Sessions]]

Source slides: pp. 240-250.
