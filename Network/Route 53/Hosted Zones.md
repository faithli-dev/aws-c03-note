# Hosted Zones

A hosted zone is a container for records that define how to route traffic to a domain and its subdomains.

## Public Hosted Zones

- Contains records that specify how to route traffic on the internet (public domain names).
- Example: `application1.mypublicdomain.com`

## Private Hosted Zones

- Contains records that specify how to route traffic within one or more VPCs (private domain names).
- Example: `application1.company.internal`

![[SAA-v48-p200-hosted-zones.png]]

## Cost

$0.50 per month per hosted zone.

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Route 53 Records]]
- [[Network/Route 53/Hybrid DNS]]

Source slides: pp. 200-201.
