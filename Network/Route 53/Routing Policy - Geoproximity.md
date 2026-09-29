# Routing Policy - Geoproximity

- Routes traffic based on the geographic location of users **and** resources.
- Shift more traffic to resources using a defined bias.
- Bias values:
	- Expand (1 to 99) – more traffic to the resource.
	- Shrink (-1 to -99) – less traffic to the resource.
- Resources can be AWS resources (specify AWS Region) or non-AWS resources (specify latitude and longitude).
- Requires the Route 53 Traffic Flow feature.

![[SAA-v48-p216-routing-geoproximity.png]]

## Related

- [[Network/Route 53/Route 53 Routing Policies]]
- [[Network/Route 53/Routing Policy - Geolocation]]

Source slides: pp. 216-218.
