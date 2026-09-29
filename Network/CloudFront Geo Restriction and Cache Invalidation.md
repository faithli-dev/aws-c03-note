# CloudFront Geo Restriction and Cache Invalidation

## Geo Restriction

Restrict who can access your distribution.

- **Allowlist** – allow users only if they are in one of the approved countries.
- **Blocklist** – prevent users if they are in one of the banned countries.
- The country is determined using a third-party Geo-IP database.
- Use case: copyright laws to control access to content.

![[SAA-v48-p343-geo-restriction.png]]

## Cache Invalidation

- When the backend origin is updated, CloudFront does not know and only refreshes content after the TTL expires.
- Force an entire or partial cache refresh, bypassing the TTL, with a CloudFront invalidation.
- Invalidate all files (`*`) or a specific path (`/images/*`).

![[SAA-v48-p344-cache-invalidation.png]]

## Related

- [[Network/CloudFront]]
- [[Network/CloudFront Origins]]

Source slides: pp. 343-344.
