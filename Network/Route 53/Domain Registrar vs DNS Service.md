# Domain Registrar vs DNS Service

- You buy or register a domain name with a Domain Registrar, usually paying annual charges (GoDaddy, Amazon Registrar Inc., and others).
- The registrar usually provides a DNS service to manage your DNS records.
- You can use another DNS service to manage your DNS records.
- Example: purchase the domain from GoDaddy and use Route 53 to manage the DNS records.

![[SAA-v48-p221-registrar-vs-dns.png]]

## Using a Third-Party Registrar with Route 53

1. Create a Hosted Zone in Route 53.
2. Update the NS records on the third-party website to use the Route 53 name servers.

## Rule

Domain Registrar != DNS Service, but every domain registrar usually comes with some DNS features.

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Hosted Zones]]

Source slides: pp. 221-223.
