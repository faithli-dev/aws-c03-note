# API Gateway Endpoint Types

## Edge-Optimized (default)

- For global clients.
- Requests are routed through CloudFront edge locations to improve latency.
- The API Gateway still lives in only one Region.

## Regional

- For clients within the same Region.
- Can be manually combined with CloudFront for more control over caching strategies and distribution.

## Private

- Can only be accessed from your VPC using an interface VPC endpoint (ENI).
- Use a resource policy to define access.

![[SAA-v48-p482-api-gateway-endpoint-types.png]]

## Related

- [[Serverless/API Gateway]]
- [[Network/CloudFront]]
- [[Network/VPC/VPC Endpoints]]

Source slides: p. 482.
