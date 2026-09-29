# Elastic Beanstalk Components

## Developer Problems on AWS

- Managing infrastructure
- Deploying code
- Configuring databases, load balancers, and so on
- Scaling concerns
- Most web apps have the same architecture (ALB + ASG)

Developers just want their code to run, consistently across applications and environments.

## Elastic Beanstalk Overview

- A developer-centric view of deploying an application on AWS.
- Uses existing components: EC2, ASG, ELB, RDS, and others.
- Managed service: automatically handles capacity provisioning, load balancing, scaling, application health monitoring, and instance configuration.
- Only the application code is the developer's responsibility.
- You still have full control over the configuration.
- Beanstalk itself is free; you pay for the underlying instances.

## Components

- **Application** – a collection of Elastic Beanstalk components (environments, versions, configurations).
- **Application Version** – an iteration of your application code.
- **Environment** – a collection of AWS resources running an application version (only one version at a time).
- **Tiers** – Web Server Environment Tier and Worker Environment Tier.
- You can create multiple environments (dev, test, prod).

![[SAA-v48-p263-eb-components.png]]

## Supported Platforms

Go, Java SE, Java with Tomcat, .NET Core on Linux, .NET on Windows Server, Node.js, PHP, Python, Ruby, Packer Builder, Single Container Docker, Multi-container Docker, Preconfigured Docker.

## Related

- [[Compute/Elastic Beanstalk]]
- [[Compute/Elastic Beanstalk Web vs Worker Tier]]
- [[Compute/Elastic Beanstalk Deployment Modes]]

Source slides: pp. 261-264.
