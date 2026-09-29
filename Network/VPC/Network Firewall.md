# AWS Network Firewall

Protect your entire Amazon VPC with Layer 3 to Layer 7 protection.

## Coverage

Inspect traffic in any direction:

- VPC to VPC traffic
- Outbound to internet
- Inbound from internet
- To and from Direct Connect and site-to-site VPN

Internally, AWS Network Firewall uses the AWS Gateway Load Balancer. Rules can be centrally managed cross-account by AWS Firewall Manager and applied to many VPCs.

![[SAA-v48-p773-network-firewall.png]]

## Fine-Grained Controls

- Supports thousands of rules.
- **IP and port** – for example filtering tens of thousands of IPs.
- **Protocol** – for example block the SMB protocol for outbound communications.
- **Stateful domain list rule groups** – only allow outbound traffic to `*.mycorp.com` or a third-party software repo.
- **General pattern matching** using regex.
- **Traffic filtering** – allow, drop, or alert for matching traffic.
- **Active flow inspection** – intrusion-prevention capabilities (like Gateway Load Balancer, but all managed by AWS).
- Send logs of rule matches to Amazon S3, CloudWatch Logs, or Kinesis Data Firehose.

## Network Protection on AWS

- Network Access Control Lists (NACLs)
- Amazon VPC security groups
- AWS WAF (protects against malicious requests)
- AWS Shield and Shield Advanced
- AWS Firewall Manager (manages them across accounts)
- AWS Network Firewall (protects the entire VPC)

## Related

- [[Network/VPC Security]]
- [[Local Balancing/Gateway Load Balancer]]
- [[Security/WAF and Shield]]

Source slides: pp. 772-774.
