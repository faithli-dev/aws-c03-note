# Routing Policy - Geolocation

- Routing is based on user location, unlike latency-based routing.
- Specify location by continent, country, or US state. If locations overlap, the most precise is selected.
- Create a "Default" record for when there is no location match.
- Can be associated with health checks.

![[SAA-v48-p215-routing-geolocation.png]]

## Use Cases

- Website localisation
- Restricting content distribution
- Load balancing

## Related

- [[Network/Route 53/Route 53 Routing Policies]]
- [[Network/Route 53/Routing Policy - Latency-based]]
- [[Network/Route 53/Routing Policy - Geoproximity]]

Source slides: p. 215.
