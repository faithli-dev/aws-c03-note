# VPC Traffic Mirroring

Capture and inspect network traffic in your VPC.

## Behaviour

- Route the traffic to security appliances that you manage.
- **Capture from (source)** – ENIs.
- **Capture to (targets)** – an ENI or a Network Load Balancer.
- Capture all packets or only packets of interest (optionally truncating packets).
- Source and target can be in the same VPC or different VPCs (VPC peering).

![[SAA-v48-p759-traffic-mirroring.png]]

## Use Cases

Content inspection, threat monitoring, troubleshooting.

## Related

- [[Network/VPC]]
- [[Network/VPC Security]]
- [[Local Balancing/Network Load Balancer]]

Source slides: p. 759.
