# Security Groups vs NACLs

## Network Access Control List (NACL)

- A firewall that controls traffic from and to subnets.
- One NACL per subnet; new subnets are assigned the default NACL.
- Rules have a number (1-32766) with higher precedence for a lower number.
- The first rule match drives the decision. Example: `#100 ALLOW 10.0.0.10/32` and `#200 DENY 10.0.0.10/32` allows the IP because 100 has higher precedence.
- The last rule is an asterisk (`*`) that denies a request when no rule matches.
- AWS recommends adding rules in increments of 100.
- Newly created NACLs deny everything.
- NACLs are a great way to block a specific IP address at the subnet level.

## Default NACL

- Accepts everything inbound and outbound with the subnets it is associated with.
- Do not modify the default NACL; create custom NACLs instead.

## Stateful vs Stateless

- Security groups are **stateful**: return traffic is automatically allowed regardless of rules.
- NACLs are **stateless**: return traffic must be explicitly allowed by rules.

![[SAA-v48-p721-security-groups-nacls.png]]

## Ephemeral Ports

- For two endpoints to establish a connection, they must use ports.
- Clients connect to a defined port and expect a response on an ephemeral port.
- IANA & Windows 10: 49152 - 65535.
- Many Linux kernels: 32768 - 60999.

![[SAA-v48-p726-nacl-ephemeral-ports.png]]

## NACL with Ephemeral Ports

For a web tier to reach a database tier on port 3306:

- Web NACL: allow outbound TCP on 3306 to the DB subnet CIDR.
- DB NACL: allow inbound TCP on 3306 from the web subnet CIDR.
- DB NACL: allow outbound TCP on 1024-65535 to the web subnet CIDR.
- Web NACL: allow inbound TCP on 1024-65535 from the DB subnet CIDR.

Create NACL rules for each target subnet CIDR.

## Related

- [[Network/VPC Security]]
- [[Compute/EC2/Security Group]]
- [[Network/VPC/CIDR and Subnets]]

Source slides: pp. 721-728.
