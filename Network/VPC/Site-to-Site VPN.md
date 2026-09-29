# AWS Site-to-Site VPN

## Components

- **Virtual Private Gateway (VGW)** – a VPN concentrator on the AWS side of the VPN connection. Created and attached to the VPC from which you want to create the connection. The ASN (Autonomous System Number) can be customised.
- **Customer Gateway (CGW)** – a software application or physical device on the customer side of the VPN connection.

## Connection Details

- Customer gateway device (on-premises) IP address:
	- Use the public internet-routable IP address of the customer gateway device.
	- If it is behind a NAT device enabled for NAT traversal (NAT-T), use the public IP address of the NAT device.
- Important: enable **route propagation** for the virtual private gateway in the route table associated with your subnets.
- To ping EC2 instances from on-premises, add the ICMP protocol to the inbound rules of your security groups.

## AWS VPN CloudHub

- Provides secure communication between multiple sites when you have multiple VPN connections.
- Low-cost hub-and-spoke model for primary or secondary network connectivity between different locations (VPN only).
- It is a VPN connection, so it goes over the public internet.
- To set it up, connect multiple VPN connections on the same VGW, set up dynamic routing, and configure route tables.

![[SAA-v48-p746-vpn-cloudhub.png]]

## Related

- [[Network/VPC]]
- [[Network/Network Connectivity]]
- [[Network/VPC/Direct Connect]]

Source slides: pp. 743-746.
