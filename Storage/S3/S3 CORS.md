# S3 CORS

## What is CORS?

Cross-Origin Resource Sharing is a browser-based mechanism that allows requests to other origins while visiting the main origin.

An origin is scheme (protocol) + host (domain) + port, for example `https://www.example.com` (implied port 443 for HTTPS, 80 for HTTP).

- Same origin: `http://example.com/app1` and `http://example.com/app2`
- Different origins: `http://www.example.com` and `http://other.example.com`

Requests are not fulfilled unless the other origin allows them using CORS headers such as `Access-Control-Allow-Origin`.

## Preflight Request

The browser sends an `OPTIONS` request with `Origin`, and the server responds with `Access-Control-Allow-Origin` and `Access-Control-Allow-Methods`. The browser can then make the actual request.

## S3 CORS

- If a client makes a cross-origin request to an S3 bucket, the correct CORS headers must be enabled.
- Popular exam question.
- You can allow a specific origin or `*` (all origins).

![[SAA-v48-p325-cors.png]]

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Static Website Hosting]]
- [[Network/CloudFront]]

Source slides: pp. 323-325.
