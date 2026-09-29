# DNS Fundamentals

The Domain Name System translates human-friendly hostnames into machine IP addresses, for example `www.google.com` → `172.217.18.36`. DNS is the backbone of the internet.

## Hierarchical Naming

DNS uses a hierarchical structure:

- `.com` – Top Level Domain (TLD)
- `example.com` – Second Level Domain (SLD)
- `www.example.com`, `api.example.com` – subdomains

## Terminologies

For `http://api.www.example.com.`:

- **Domain Registrar** – Amazon Route 53, GoDaddy, and others.
- **DNS Records** – A, AAAA, CNAME, NS, and others.
- **Zone File** – contains DNS records.
- **Name Server** – resolves DNS queries (authoritative or non-authoritative).
- **Top Level Domain (TLD)** – `.com`, `.us`, `.in`, `.gov`, `.org`.
- **Second Level Domain (SLD)** – `amazon.com`, `google.com`.
- **FQDN** – fully qualified domain name.

![[SAA-v48-p194-dns.png]]

## How DNS Works

1. A web browser asks its local DNS server (assigned by the company or the ISP) for `example.com`.
2. The local DNS server asks a Root DNS server, managed by ICANN.
3. The Root server points to the TLD DNS server (`.com`), managed by IANA.
4. The TLD server points to the SLD DNS server (`example.com`), managed by the domain registrar.
5. The SLD server returns the IP address, which is cached for the record's TTL.

![[SAA-v48-p196-how-dns-works.png]]

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Route 53 Records]]
- [[Network/Route 53/Hosted Zones]]

Source slides: pp. 194-196.
