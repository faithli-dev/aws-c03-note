# Routing Policy - Latency-based

- Redirects to the resource with the least latency close to the user.
- Helpful when latency for users is a priority.
- Latency is based on traffic between users and AWS Regions.
- A user in Germany may be directed to the US if that has the lowest latency.
- Can be associated with health checks and has failover capability.

![[SAA-v48-p209-routing-latency.png]]

## Related

- [[Network/Route 53/Route 53 Routing Policies]]
- [[Network/Route 53/Routing Policy - Geolocation]]

Source slides: p. 209.
