# Lambda in VPC

## Default Deployment

- By default a Lambda function is launched outside your own VPC, in an AWS-owned VPC.
- It therefore cannot access resources in your VPC such as RDS, ElastiCache, or an internal ELB.

![[SAA-v48-p462-lambda-in-vpc.png]]

## Lambda in a VPC

- Define the VPC ID, the subnets, and the security groups.
- Lambda creates an ENI (Elastic Network Interface) in your subnets.
- The Lambda security group and the RDS security group must allow the traffic.

## Lambda with RDS Proxy

- Lambda functions that directly access a database may open too many connections under high load.
- RDS Proxy:
	- Improves scalability by pooling and sharing DB connections.
	- Improves availability by reducing failover time by 66% and preserving connections.
	- Improves security by enforcing IAM authentication and storing credentials in Secrets Manager.
- The Lambda function must be deployed in your VPC because RDS Proxy is never publicly accessible.

![[SAA-v48-p463-lambda-rds-proxy.png]]

## Invoking Lambda from RDS and Aurora

- Invoke Lambda functions from within your DB instance to process data events from within a database.
- Supported for RDS for PostgreSQL and Aurora MySQL.
- Allow outbound traffic to the Lambda function from within the DB instance (public, NAT gateway, VPC endpoints).
- The DB instance needs permissions to invoke the function (Lambda resource-based policy and IAM policy).

![[SAA-v48-p464-invoke-lambda-from-rds.png]]

## RDS Event Notifications

- Notifications about the DB instance itself (created, stopped, started), not about the data.
- Subscribe to event categories: DB instance, DB snapshot, DB parameter group, DB security group, RDS Proxy, custom engine version.
- Near real-time events (up to 5 minutes).
- Send notifications to SNS or subscribe to events using EventBridge.

![[SAA-v48-p465-rds-event-notifications.png]]

## Related

- [[Serverless/Lambda]]
- [[Database/RDS/RDS Proxy]]
- [[Network/VPC]]

Source slides: pp. 461-465.
