# ELB Security Groups

A common pattern is to allow traffic to the load balancer from the internet, and allow traffic to the application only from the load balancer.

## Chain

- Users reach the load balancer on HTTP/HTTPS from anywhere.
- The load balancer's security group allows 80/443 inbound.
- The application security group allows traffic only from the load balancer's security group (a security group reference, not an IP range).

![[SAA-v48-p129-elb-security-groups.png]]

## Related

- [[Compute/EC2/Security Group]]
- [[Local Balancing/Load balancing]]
- [[Network/VPC Security]]

Source slides: p. 129.
