# Caching Strategies

Caching can be applied at several layers in a web application.

## Layers

- **CloudFront (edge)** – cache content close to users.
- **API Gateway** – cache REST responses.
- **ElastiCache (Redis or Memcached)** – cache database query results and session data.
- **DAX** – cache DynamoDB reads.
- **S3** – durable object storage behind CloudFront.

![[SAA-v48-p809-caching-strategies.png]]

## Trade-offs

Caching affects TTL, network usage, computation, cost, and latency. Choose the layer that removes the most expensive work while keeping data acceptable to the application.

## Related

- [[Architecture/More Solutions Architecture]]
- [[Database/Cache/ElastiCache]]
- [[Network/CloudFront]]

Source slides: p. 809.
