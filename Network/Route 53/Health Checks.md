# Route 53 Health Checks

HTTP health checks are only for public resources. They enable automated DNS failover.

## Three Types

1. Health checks that monitor an endpoint (application, server, or other AWS resource).
2. Health checks that monitor other health checks (calculated health checks).
3. Health checks that monitor CloudWatch alarms (full control), useful for private resources and metrics such as DynamoDB throttles or RDS alarms.

Health checks are integrated with CloudWatch metrics.

![[SAA-v48-p210-health-checks.png]]

## Monitoring an Endpoint

- About 15 global health checkers check the endpoint health.
- Healthy/unhealthy threshold: 3 by default.
- Interval: 30 seconds by default; can be set to 10 seconds at higher cost.
- Supported protocols: HTTP, HTTPS, and TCP.
- If more than 18% of health checkers report healthy, Route 53 considers it healthy; otherwise unhealthy.
- You can choose which locations Route 53 uses.
- Health checks pass only on 2xx and 3xx status codes.
- Can be configured to pass/fail based on text in the first 5120 bytes of the response.
- Configure your router/firewall to allow incoming requests from Route 53 health checker IP ranges (`ip-ranges.json`).

## Calculated Health Checks

- Combine the results of multiple health checks into a single health check.
- Use OR, AND, or NOT.
- Monitor up to 256 child health checks.
- Specify how many need to pass for the parent to pass.
- Use case: perform website maintenance without failing all health checks.

![[SAA-v48-p212-calculated-health-checks.png]]

## Private Hosted Zones

- Route 53 health checkers are outside the VPC and cannot access private endpoints.
- Create a CloudWatch metric, associate a CloudWatch alarm, then create a health check that checks the alarm.

![[SAA-v48-p213-private-hosted-zone-health.png]]

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Route 53 Routing Policies]]
- [[Monitoring/CloudWatch]]

Source slides: pp. 210-213.
