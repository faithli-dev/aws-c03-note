# Gateway Load Balancer

Gateway Load Balancer (GWLB) deploys, scales, and manages a fleet of third-party network virtual appliances in AWS.

## Use Cases

- Firewalls
- Intrusion Detection and Prevention Systems
- Deep Packet Inspection systems
- Payload manipulation

## How It Works

- Operates at Layer 3 (Network layer) on IP packets.
- Combines two functions:
	- **Transparent Network Gateway** – a single entry/exit for all traffic.
	- **Load Balancer** – distributes traffic to the virtual appliances.
- Uses the GENEVE protocol on port 6081.

![[SAA-v48-p140-gateway-load-balancer.png]]

## Target Groups

- EC2 instances
- IP addresses (must be private IPs)

## Related

- [[Local Balancing/Load balancing]]
- [[Network/VPC/Network Firewall]]
- [[Security/WAF and Shield]]

Source slides: pp. 140-141.
