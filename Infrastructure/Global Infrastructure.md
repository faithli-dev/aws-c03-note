# AWS Global Infrastructure

AWS is organized into Regions, Availability Zones, data centers, and edge locations. The hierarchy determines latency, fault isolation, data residency, and which services are available.

## Regions

- A Region is a separate geographic area made of multiple isolated Availability Zones.
- Region names use identifiers such as `us-east-1` and `ap-southeast-2`.
- Most resources are regional. Some services, especially IAM and Route 53, are global.
- Choose a Region based on compliance and data governance, proximity to users, service availability, pricing, and disaster recovery requirements.

## Availability Zones and Data Centers

- An Availability Zone is one or more discrete data centers with independent power, cooling, networking, and physical security.
- AZs in the same Region connect through redundant, high-bandwidth, low-latency links.
- Deploy across multiple AZs to survive an AZ failure. A Region is the normal boundary for synchronous designs; multi-Region designs address larger outages and geographic latency.

![[SAA-v48-p018-global-infrastructure.png]]

## Edge Locations

- Edge locations and Regional Edge Caches are part of the AWS Points of Presence network.
- CloudFront uses them to cache content close to viewers.
- Global Accelerator uses the AWS global network to carry traffic from an Anycast edge IP to a healthy regional endpoint.

## Design Reminder

Use the smallest failure domain that satisfies the requirement. A single AZ is simpler and cheaper, multi-AZ improves availability, and multi-Region improves geographic resilience but adds replication and operational complexity.

Source slides: pp. 14-23.
