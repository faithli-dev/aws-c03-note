# VPC CIDR and Subnets

## CIDR (IPv4)

Classless Inter-Domain Routing is a method for allocating IP addresses, used in security group rules and AWS networking generally.

A CIDR consists of:

- **Base IP** – an IP contained in the range, for example `10.0.0.0`, `192.168.0.0`.
- **Subnet mask** – how many bits can change, for example `/0`, `/24`, `/32`.

Subnet mask equivalents:

- `/8` ↔ `255.0.0.0`
- `/16` ↔ `255.255.0.0`
- `/24` ↔ `255.255.255.0`
- `/32` ↔ `255.255.255.255`

![[SAA-v48-p699-cidr-ipv4.png]]

## Quick Memo

- `/32` – no octet can change (1 IP)
- `/24` – last octet can change (256 IPs)
- `/16` – last 2 octets can change (65,536 IPs)
- `/8` – last 3 octets can change
- `/0` – all octets can change (all IPs)

## Exercise

- `192.168.0.0/24` → `192.168.0.0` - `192.168.0.255` (256 IPs)
- `192.168.0.0/16` → `192.168.0.0` - `192.168.255.255` (65,536 IPs)
- `134.56.78.123/32` → just `134.56.78.123`
- `0.0.0.0/0` → all IPs

## Private IP Ranges

- `10.0.0.0` - `10.255.255.255` (`10.0.0.0/8`) – big networks
- `172.16.0.0` - `172.31.255.255` (`172.16.0.0/12`) – AWS default VPC
- `192.168.0.0` - `192.168.255.255` (`192.168.0.0/16`) – home networks

## VPC

- VPC = Virtual Private Cloud.
- Multiple VPCs per Region (default soft limit 5).
- Maximum 5 CIDRs per VPC. Minimum size `/28` (16 IPs), maximum size `/16` (65,536 IPs).
- Only private IPv4 ranges are allowed.
- The VPC CIDR should not overlap with your other networks, such as a corporate network.

## Default VPC

- All new AWS accounts have a default VPC.
- New EC2 instances launch into the default VPC if no subnet is specified.
- The default VPC has internet connectivity and all EC2 instances inside it get public IPv4 addresses and public and private IPv4 DNS names.

## Subnets

- Each subnet is tied to one Availability Zone.
- AWS reserves 5 IP addresses (first 4 and last 1) in each subnet. These cannot be assigned to an EC2 instance.
- Example for `10.0.0.0/24`:
	- `10.0.0.0` – network address
	- `10.0.0.1` – reserved for the VPC router
	- `10.0.0.2` – reserved for mapping to Amazon-provided DNS
	- `10.0.0.3` – reserved for future use
	- `10.0.0.255` – network broadcast address (broadcast is not supported in a VPC)
- **Exam tip**: if you need 29 IP addresses for EC2 instances, `/27` gives 32 - 5 = 27 (not enough); `/26` gives 64 - 5 = 59 (enough).

![[SAA-v48-p708-subnet-reserved-ips.png]]

## Related

- [[Network/VPC]]
- [[Network/VPC/Internet Gateway and Route Tables]]
- [[Compute/EC2/Private vs Public IP (IPv4)]]

Source slides: pp. 699-708.
