# AWS Transit Gateway

Provides transitive peering between thousands of VPCs and on-premises networks using a hub-and-spoke (star) topology.

## Characteristics

- Regional resource, can work cross-Region.
- Share cross-account using AWS Resource Access Manager (RAM).
- Peer Transit Gateways across Regions.
- Route tables limit which VPC can talk to which VPC.
- Works with Direct Connect Gateway and VPN connections.
- Supports IP Multicast, which no other AWS service supports.

![[SAA-v48-p755-transit-gateway.png]]

## Site-to-Site VPN ECMP

- **ECMP** = Equal-cost multi-path routing, a strategy that forwards a packet over multiple best paths.
- Use case: create multiple site-to-site VPN connections to increase the bandwidth of your connection to AWS.

![[SAA-v48-p756-transit-gateway-ecmp.png]]

## Throughput with ECMP

- VPN to virtual private gateway: 1.25 Gbps per connection (2 tunnels).
- VPN to transit gateway: 2.5 Gbps with ECMP (2 tunnels used), 5.0 Gbps with 2x, 7.5 Gbps with 3x.

## Sharing Direct Connect Between Accounts

Use AWS Resource Access Manager to share a Transit Gateway with other accounts, so multiple accounts can use the same Direct Connect connection through a transit VIF.

## Related

- [[Network/VPC]]
- [[Network/VPC/VPC Peering]]
- [[Network/VPC/Direct Connect]]

Source slides: pp. 754-758.
