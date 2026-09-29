# Networking Costs in AWS

## Simplified Cost Model

- **Free** – traffic in the same Availability Zone using a private IP.
- **$0.01 per GB** – traffic across AZs within a Region using a private IP.
- **$0.02 per GB** – inter-Region traffic.
- **$0.02 per GB** – cross-AZ traffic when using a public IP or Elastic IP.

![[SAA-v48-p768-networking-costs.png]]

## Cost Optimisation

- Use private IPs instead of public IPs for good savings and better network performance.
- Use the same AZ for maximum savings, at the cost of high availability.
- Egress traffic is outbound traffic (from AWS to outside); ingress traffic is inbound (typically free).
- Try to keep as much internet traffic within AWS to minimise costs.
- Direct Connect locations co-located in the same AWS Region result in lower egress network cost.

## S3 Data Transfer Pricing (USA)

- S3 ingress: free.
- S3 to internet: $0.09 per GB.
- S3 Transfer Acceleration: 50-500% faster, additional cost of +$0.04 to $0.08 per GB.
- S3 to CloudFront: $0.00 per GB.
- CloudFront to internet: $0.085 per GB (slightly cheaper than S3), with caching for lower latency and cheaper S3 request pricing.
- S3 Cross Region Replication: $0.02 per GB.

![[SAA-v48-p770-s3-data-transfer-pricing.png]]

## NAT Gateway vs Gateway VPC Endpoint

- NAT gateway: $0.045 per hour plus $0.045 per GB of data processed, plus $0.09 per GB data transfer out to S3 cross-Region.
- Gateway VPC endpoint: no cost for using the gateway endpoint; $0.00 data transfer out to S3 in the same Region.

## Related

- [[Network/VPC]]
- [[Other Services/Cost Management]]
- [[Storage/S3/S3]]

Source slides: pp. 768-771.
