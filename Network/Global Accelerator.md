# AWS Global Accelerator

Global Accelerator provides two static Anycast IP addresses. Users connect to the nearest AWS edge location, then traffic travels over the AWS private global network to a healthy regional endpoint.

## Endpoints

- Supports Elastic IP addresses, EC2 instances, ALB, and NLB endpoints.
- Endpoint groups are regional. Health checks remove unhealthy endpoints and traffic can fail over without changing the client-facing IP.
- Traffic dials and endpoint weights control the percentage sent to each Region or endpoint.

![[SAA-v48-p347-global-accelerator.png]]

## Global Accelerator vs. CloudFront

- Global Accelerator improves global network performance for TCP/UDP applications and provides static IPs.
- CloudFront is a CDN for HTTP content and can cache responses at the edge.
- Both use the AWS global network and integrate with Shield. Use CloudFront when caching or HTTP edge processing is the goal; use Global Accelerator when stable IPs and transport-level acceleration are the goal.

Source slides: pp. 345-349.
