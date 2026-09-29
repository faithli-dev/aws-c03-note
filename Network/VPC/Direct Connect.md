# AWS Direct Connect

Provides a dedicated private connection from a remote network to your VPC.

## Characteristics

- The dedicated connection must be set up between your data centre and AWS Direct Connect locations.
- You need to set up a virtual private gateway on your VPC.
- Access public resources (S3) and private resources (EC2) on the same connection.
- Supports both IPv4 and IPv6.

![[SAA-v48-p747-direct-connect.png]]

## Use Cases

- Increase bandwidth throughput for large data sets at lower cost.
- More consistent network experience for applications using real-time data feeds.
- Hybrid environments (on-premises plus cloud).

## Direct Connect Gateway

If you want to set up Direct Connect to one or more VPCs in many different Regions (same account), you must use a Direct Connect Gateway.

![[SAA-v48-p749-direct-connect-gateway.png]]

## Connection Types

- **Dedicated Connections** – 1 Gbps to 400 Gbps. A physical ethernet port dedicated to a customer. Request made to AWS first, then completed by AWS Direct Connect partners.
- **Hosted Connections** – 50 Mbps to 25 Gbps. Connection requests are made through AWS Direct Connect partners. Capacity can be added or removed on demand.
- Lead times are often longer than 1 month to establish a new connection.

## Encryption

- Data in transit is not encrypted but is private.
- AWS Direct Connect + VPN provides an IPsec-encrypted private connection, giving an extra level of security but slightly more complexity.

## Resiliency

- **High resiliency** – one connection at multiple locations.
- **Maximum resiliency** – separate connections terminating on separate devices in more than one location.

![[SAA-v48-p752-direct-connect-resiliency.png]]

## Site-to-Site VPN as a Backup

If Direct Connect fails, set up a backup Direct Connect connection (expensive) or a site-to-site VPN connection.

## Related

- [[Network/VPC]]
- [[Network/VPC/Site-to-Site VPN]]
- [[Network/VPC/Transit Gateway]]

Source slides: pp. 747-753.
