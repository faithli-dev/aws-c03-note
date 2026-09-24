# Amazon Route 53

Route 53 is AWS’s managed, authoritative DNS service and domain registrar. DNS answers a hostname query; it does not forward application traffic like a load balancer.

## Records and Hosted Zones

- A maps a name to an IPv4 address; AAAA maps to IPv6.
- CNAME maps a non-root hostname to another hostname. It cannot be used at the zone apex.
- NS identifies the name servers for a hosted zone.
- A public hosted zone answers Internet DNS queries. A private hosted zone answers names inside associated VPCs.
- TTL controls how long resolvers cache a response. Higher TTL lowers query traffic but delays changes.
- Alias records point to AWS resources such as ELB, CloudFront, API Gateway, S3 website endpoints, VPC interface endpoints, and Global Accelerator. They work at the zone apex, use A/AAAA, are free, and do not expose a configurable TTL.

![[SAA-v48-p196-dns-resolution.png]]
![[SAA-v48-p201-route53-hosted-zones.png]]

## Routing Policies

- Simple: one resource or multiple values returned together; no health check association.
- Weighted: split traffic by relative weights for testing or regional distribution.
- Latency-based: answer with the Region that provides the lowest measured latency.
- Failover: active-passive routing using primary and secondary records plus health checks.
- Geolocation: route by user location; geoproximity adds bias using Traffic Flow.
- Multi-value answer: return several healthy records to improve availability; it is not a replacement for a load balancer.

![[SAA-v48-p208-route53-weighted-routing.png]]

## Health Checks

Health checks can monitor public HTTP, HTTPS, or TCP endpoints, calculated health checks, or CloudWatch alarms. They support DNS failover and can be attached to routing records. Private resources normally use a CloudWatch alarm or calculated check because Route 53 health checkers are outside the VPC.

![[SAA-v48-p210-route53-health-check.png]]

Source slides: pp. 193-226.
