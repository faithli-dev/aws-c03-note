# AWS Elastic Beanstalk

Elastic Beanstalk is a managed application platform. Upload application code and Beanstalk provisions the underlying resources, including EC2, Auto Scaling, load balancing, and CloudWatch monitoring.

## Core Concepts

- An application contains environments such as development, staging, and production.
- An environment can be single-instance or load-balanced and scalable.
- Beanstalk supports common runtimes including Java, .NET, Node.js, PHP, Python, Ruby, Go, Tomcat, and Docker.
- Configuration files and environment properties control capacity, networking, instance types, health checks, and application settings.
- Beanstalk manages platform updates, deployment versions, health reporting, and rolling or immutable deployments.

Use Beanstalk when the team wants a managed deployment workflow but still needs access to the underlying AWS resources. It is not a replacement for Lambda when the workload is event-driven and short-lived.

Source slides: pp. 257-266.
