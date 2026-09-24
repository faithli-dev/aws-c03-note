![[Pasted image 20260924161528.png|213]]
• Fully managed database proxy for RDS
• Allows apps to pool and share DB connections established with the database
• Improving database efficiency by reducing the stress on database resources (e.g., CPU, RAM) and minimize open connections (and timeouts)
• Serverless, autoscaling, highly available (multi-AZ)
• Reduced RDS & Aurora failover time by up 66%
• Supports RDS (MySQL, PostgreSQL, MariaDB, MS SQL Server) and Aurora (MySQL, PostgreSQL)
• No code changes required for most apps
• Enforce IAM Authentication for DB, and securely store credentials in AWS Secrets Manager
• RDS Proxy is never publicly accessible (must be accessed from VPC)
