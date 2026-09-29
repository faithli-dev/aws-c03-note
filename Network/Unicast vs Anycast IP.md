# Unicast vs Anycast IP

## Unicast IP

One server holds one IP address.

## Anycast IP

All servers hold the same IP address, and the client is routed to the nearest one.

![[SAA-v48-p346-unicast-vs-anycast.png]]

## Why It Matters

- Global users accessing an application over the public internet suffer latency from many hops.
- Anycast lets AWS route traffic to the nearest edge location and then over the internal AWS network, minimising latency.
- This is the mechanism behind [[Network/Global Accelerator]].

## Related

- [[Network/Global Accelerator]]
- [[Network/CloudFront]]
- [[Infrastructure/Edges]]

Source slides: pp. 345-346.
