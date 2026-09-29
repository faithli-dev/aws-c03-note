# Route 53 Records

A record defines how you want to route traffic for a domain.

## Record Contents

- **Domain/subdomain name** – for example `example.com`
- **Record type** – for example A or AAAA
- **Value** – for example `12.34.56.78`
- **Routing policy** – how Route 53 responds to queries
- **TTL** – how long the record is cached at DNS resolvers

## Record Types

Must know:

- **A** – maps a hostname to IPv4.
- **AAAA** – maps a hostname to IPv6.
- **CNAME** – maps a hostname to another hostname. The target must have an A or AAAA record. Cannot be created for the zone apex (for example `example.com`), but can for `www.example.com`.
- **NS** – name servers for the hosted zone; controls how traffic is routed for a domain.

Advanced: CAA, DS, MX, NAPTR, PTR, SOA, TXT, SPF, SRV.

![[SAA-v48-p199-record-types.png]]

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Records TTL]]
- [[Network/Route 53/CNAME vs Alias]]

Source slides: pp. 198-199.
