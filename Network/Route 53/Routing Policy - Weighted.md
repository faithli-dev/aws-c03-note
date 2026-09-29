# Routing Policy - Weighted

- Controls the percentage of requests that go to each specific resource.
- Each record gets a relative weight; the traffic percentage is the record weight divided by the sum of all weights.
- Weights do not need to sum to 100.
- DNS records must have the same name and type.
- Can be associated with health checks.
- Assign a weight of 0 to a record to stop sending traffic to a resource.
- If all records have weight 0, all records are returned equally.

![[SAA-v48-p208-routing-weighted.png]]

## Use Cases

- Load balancing between Regions
- Testing new application versions

## Related

- [[Network/Route 53/Route 53 Routing Policies]]
- [[Network/Route 53/Health Checks]]

Source slides: p. 208.
