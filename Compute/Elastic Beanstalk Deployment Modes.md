# Elastic Beanstalk Deployment Modes

## Single Instance

- One EC2 instance with an Elastic IP and RDS master.
- Great for development.

## High Availability with Load Balancer

- An ALB in front of an Auto Scaling Group across two Availability Zones.
- RDS master with an RDS standby for Multi-AZ.
- Great for production.

![[SAA-v48-p266-eb-deployment-modes.png]]

## Related

- [[Compute/Elastic Beanstalk]]
- [[Compute/Elastic Beanstalk Components]]
- [[Compute/Scaling/Auto Scaling Group]]

Source slides: p. 266.
