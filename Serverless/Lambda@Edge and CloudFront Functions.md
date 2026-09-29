# Lambda@Edge and CloudFront Functions

## Customization at the Edge

Many modern applications execute logic at the edge. An **Edge Function** is code you write and attach to CloudFront distributions. It runs close to users to minimise latency.

CloudFront provides two types: CloudFront Functions and Lambda@Edge. No servers to manage, deployed globally. Use case: customise CDN content. Pay only for what you use; fully serverless.

## Use Cases

- Website security and privacy
- Dynamic web applications at the edge
- Search Engine Optimization (SEO)
- Intelligent routing across origins and data centres
- Bot mitigation at the edge
- Real-time image transformation
- A/B testing
- User authentication and authorisation
- User prioritisation
- User tracking and analytics

## CloudFront Functions

- Lightweight functions written in JavaScript.
- For high-scale, latency-sensitive CDN customisations.
- Sub-millisecond startup times, millions of requests per second.
- Used to change viewer requests and responses:
	- Viewer Request: after CloudFront receives a request from a viewer.
	- Viewer Response: before CloudFront forwards the response to the viewer.
- Native feature of CloudFront, managed entirely within CloudFront.

## Lambda@Edge

- Lambda functions written in Node.js or Python.
- Scales to thousands of requests per second.
- Used to change CloudFront requests and responses at four points:
	- Viewer Request – after CloudFront receives a request from a viewer.
	- Origin Request – before CloudFront forwards the request to the origin.
	- Origin Response – after CloudFront receives the response from the origin.
	- Viewer Response – before CloudFront forwards the response to the viewer.
- Author functions in `us-east-1`; CloudFront replicates them to its locations.

## Comparison

![[SAA-v48-p459-cloudfront-functions-vs-lambda-edge.png]]

| | CloudFront Functions | Lambda@Edge |
|---|---|---|
| Runtime | JavaScript | Node.js, Python |
| Requests | Millions/s | Thousands/s |
| Triggers | Viewer Request/Response | Viewer and Origin Request/Response |
| Max execution time | < 1 ms | 5-10 seconds |
| Max memory | 2 MB | 128 MB up to 10 GB |
| Total package size | 10 KB | 1 MB - 50 MB |
| Network / file system access | No | Yes |
| Access to request body | No | Yes |
| Pricing | Free tier, 1/6th the price of @Edge | No free tier, per request and duration |

## Choosing

- **CloudFront Functions** – cache key normalisation, header manipulation, URL rewrites or redirects, request authentication and authorisation (JWT validation).
- **Lambda@Edge** – longer execution time, adjustable CPU or memory, third-party libraries such as the AWS SDK, network access to external services, file system access or access to the HTTP request body.

## Related

- [[Network/CloudFront]]
- [[Serverless/Lambda]]

Source slides: pp. 455-460.
