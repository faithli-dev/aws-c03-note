# ELB Health Checks

Health checks tell a load balancer whether the instances it forwards traffic to can reply to requests.

## How They Work

- Configured on a port and a route; `/health` is a common route.
- If the response is not HTTP 200 (OK), the instance is marked unhealthy.
- Unhealthy instances are removed from rotation until they pass again.

![[SAA-v48-p127-elb-health-check.png]]

## Per Load Balancer

- **ALB / NLB** – health checks are configured at the target group level.
- **NLB** – supports TCP, HTTP, and HTTPS health checks.
- **CLB** – health checks are TCP or HTTP based.

## Related

- [[Local Balancing/Load balancing]]
- [[Compute/Scaling/Auto Scaling Group]]
- [[Monitoring/CloudWatch]]

Source slides: p. 127.
