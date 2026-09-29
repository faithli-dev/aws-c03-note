# Cross-Zone Load Balancing

Cross-zone load balancing controls whether each load balancer node distributes traffic evenly across all registered instances in all AZs.

## With Cross-Zone Enabled

Each load balancer node distributes evenly across all registered instances in all AZs.

## With Cross-Zone Disabled

Requests are distributed only to the instances in the AZ of the load balancer node. If AZs have unequal instance counts, traffic is unbalanced.

![[SAA-v48-p144-cross-zone.png]]

## Defaults per Load Balancer

- **ALB** – enabled by default (can be disabled at the target group level). No charges for inter-AZ data.
- **NLB & GWLB** – disabled by default. You pay charges for inter-AZ data if enabled.
- **CLB** – disabled by default. No charges for inter-AZ data if enabled.

## Related

- [[Local Balancing/Load balancing]]
- [[Local Balancing/Application Load Balancer]]
- [[Local Balancing/Network Load Balancer]]

Source slides: pp. 144-145.
