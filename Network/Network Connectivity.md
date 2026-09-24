# VPC Connectivity

## VPC Peering and PrivateLink

- VPC Peering privately connects two VPCs, including cross-account or cross-Region VPCs. CIDRs cannot overlap and peering is not transitive.
- VPC endpoints keep traffic to AWS services on private paths. Gateway endpoints support S3 and DynamoDB and are free; interface endpoints create ENIs through PrivateLink and support most AWS services.
- Interface endpoints are useful for access from on-premises, another VPC, or another Region. Configure endpoint security groups, DNS resolution, and route tables.

![[SAA-v48-p733-vpc-endpoints.png]]

## VPN and Direct Connect

- Site-to-Site VPN uses a Customer Gateway on premises, a Virtual Private Gateway on AWS, and encrypted tunnels over the public Internet.
- Direct Connect is a dedicated private connection to an AWS Direct Connect location. It provides more consistent bandwidth and latency but is not encrypted by default; combine it with VPN when encryption is required.
- A Direct Connect Gateway connects one on-premises connection to VPCs across Regions.
- Use VPN as a backup path for Direct Connect. Design separate connections and locations for higher resilience.

![[SAA-v48-p748-direct-connect.png]]
![[SAA-v48-p765-site-to-site-vpn.png]]

## Transit Gateway and IPv6

- Transit Gateway is a regional hub-and-spoke router for many VPCs, VPNs, and Direct Connect attachments. Route tables control which networks communicate; Resource Access Manager enables cross-account sharing.
- Traffic Mirroring copies selected ENI traffic to security appliances through an ENI or NLB.
- VPCs support dual stack. IPv6 addresses are public and Internet-routable; an egress-only Internet Gateway allows outbound IPv6 while blocking Internet-initiated connections.

![[SAA-v48-p756-transit-gateway.png]]

Source slides: pp. 729-767.
