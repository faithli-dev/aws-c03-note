# AWS Certificate Manager (ACM)

Easily provision, manage, and deploy TLS certificates.

## Characteristics

- Provides in-flight encryption for websites (HTTPS).
- Supports both public and private TLS certificates.
- Free of charge for public TLS certificates.
- Automatic TLS certificate renewal.

![[SAA-v48-p670-acm.png]]

## Integrations

Load TLS certificates onto:

- Elastic Load Balancers (CLB, ALB, NLB)
- CloudFront distributions
- APIs on API Gateway

## Requesting Public Certificates

1. List domain names to be included: a fully qualified domain name (`corp.example.com`) or a wildcard domain (`*.example.com`).
2. Select a validation method: DNS validation or email validation.
	- DNS validation is preferred for automation; it leverages a CNAME record in DNS (for example Route 53).
	- Email validation sends emails to contact addresses in the WHOIS database.
3. Verification takes a few hours.
4. The public certificate is enrolled for automatic renewal; ACM renews ACM-generated certificates 60 days before expiry.

## Importing Public Certificates

- Option to generate the certificate outside ACM and import it.
- No automatic renewal; you must import a new certificate before expiry.
- ACM sends daily expiration events starting 45 days before expiration; the number of days is configurable.
- Events appear in EventBridge.
- AWS Config has a managed rule `acm-certificate-expiration-check` to check for expiring certificates.

## Integration with ALB

- Provision and maintain TLS certificates with ACM.
- Use an HTTP → HTTPS redirect rule on the ALB.

## Integration with API Gateway

- Create a custom domain name in API Gateway.
- **Edge-Optimized (default)** – the TLS certificate must be in `us-east-1` (same Region as CloudFront). Set up a CNAME or A-alias record in Route 53.
- **Regional** – the TLS certificate must be imported on API Gateway in the same Region as the API stage. Set up a CNAME or A-alias record in Route 53.

## Related

- [[Security/Secrets and Certificates]]
- [[Local Balancing/SSL Certificates and SNI]]
- [[Serverless/API Gateway Security]]

Source slides: pp. 670-675.
