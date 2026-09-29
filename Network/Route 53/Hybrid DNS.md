# Route 53 Hybrid DNS

By default, the Route 53 Resolver automatically answers DNS queries for:

- Local domain names for EC2 instances
- Records in private hosted zones
- Records in public name servers

## Hybrid DNS

Hybrid DNS resolves DNS queries between a VPC (Route 53 Resolver) and your networks (other DNS resolvers).

Networks can be:

- The VPC itself or a peered VPC
- An on-premises network connected through Direct Connect or AWS VPN

![[SAA-v48-p224-hybrid-dns.png]]

## Resolver Endpoints

### Inbound Endpoint

- Allows your DNS resolvers to resolve domain names for AWS resources (such as EC2 instances) and records in private hosted zones.

![[SAA-v48-p225-resolver-inbound.png]]

### Outbound Endpoint

- Route 53 Resolver forwards DNS queries to your DNS resolvers.

![[SAA-v48-p226-resolver-outbound.png]]

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Hosted Zones]]
- [[Network/VPC/Direct Connect]]
- [[Network/VPC/Site-to-Site VPN]]

Source slides: pp. 224-226.
