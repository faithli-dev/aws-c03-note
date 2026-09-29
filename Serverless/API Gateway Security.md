# API Gateway Security

## User Authentication

- **IAM Roles** – useful for internal applications.
- **Cognito** – identity for external users such as mobile users.
- **Custom Authorizer** – your own logic.

## Custom Domain Name HTTPS

- Security through integration with AWS Certificate Manager (ACM).
- If using an edge-optimized endpoint, the certificate must be in `us-east-1`.
- If using a regional endpoint, the certificate must be in the API Gateway Region.
- Must set up a CNAME or A-alias record in Route 53.

## Related

- [[Serverless/API Gateway]]
- [[Serverless/API Gateway Endpoint Types]]
- [[Security/Secrets and Certificates]]
- [[Serverless/Cognito]]

Source slides: p. 483.
