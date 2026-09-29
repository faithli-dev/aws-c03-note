# Connection Draining

Connection draining lets in-flight requests finish before an instance is removed from a load balancer.

## Naming

- **Connection Draining** – Classic Load Balancer
- **Deregistration Delay** – ALB and NLB

## Behaviour

- The load balancer stops sending new requests to the instance that is deregistering.
- Existing connections are allowed to complete.
- Between 1 and 3600 seconds; default is 300 seconds.
- Can be disabled by setting the value to 0.
- Set a low value if your requests are short.

![[SAA-v48-p150-connection-draining.png]]

## Related

- [[Local Balancing/Load balancing]]
- [[Compute/Scaling/Auto Scaling Group]]

Source slides: p. 150.
