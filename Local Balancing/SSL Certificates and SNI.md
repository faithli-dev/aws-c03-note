# SSL Certificates and SNI

## SSL/TLS Basics

- An SSL certificate encrypts traffic between clients and the load balancer (in-flight encryption).
- SSL = Secure Sockets Layer; TLS = Transport Layer Security, the newer version. People still say SSL.
- Public certificates are issued by Certificate Authorities (Comodo, Symantec, GoDaddy, GlobalSign, Digicert, Let's Encrypt).
- Certificates have an expiration date and must be renewed.

## Load Balancer Certificates

- The load balancer uses an X.509 certificate.
- Manage certificates with ACM (AWS Certificate Manager) or upload your own.
- An HTTPS listener must specify a default certificate and can add an optional list for multiple domains.
- Clients use SNI to specify the hostname they reach.
- A security policy can be set to support older SSL/TLS versions for legacy clients.

![[SAA-v48-p148-sni.png]]

## Server Name Indication (SNI)

- SNI solves loading multiple SSL certificates onto one web server to serve multiple websites.
- The client indicates the target hostname in the initial SSL handshake.
- The server finds the correct certificate or returns the default.

## Support by Load Balancer

- **CLB** – only one SSL certificate; multiple hostnames need multiple CLBs. No SNI.
- **ALB** – multiple listeners with multiple certificates, using SNI.
- **NLB** – multiple listeners with multiple certificates, using SNI.
- SNI also works with CloudFront.

## Related

- [[Local Balancing/Load balancing]]
- [[Security/Secrets and Certificates]]
- [[Network/CloudFront]]

Source slides: pp. 146-149.
