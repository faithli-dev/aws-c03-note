# CNAME vs Alias

AWS resources such as load balancers and CloudFront expose an AWS hostname, for example `lb1-1234.us-east-2.elb.amazonaws.com`. To use a custom domain such as `myapp.mydomain.com`, choose between a CNAME and an Alias record.

## CNAME

- Points a hostname to any other hostname: `app.mydomain.com` → `blabla.anything.com`.
- Only for a non-root domain (something.mydomain.com).
- Cannot be used for the zone apex.

## Alias

- Points a hostname to an AWS resource: `app.mydomain.com` → `blabla.amazonaws.com`.
- Works for the root domain and non-root domains (mydomain.com).
- Free of charge.
- Native health check support.

![[SAA-v48-p203-cname-vs-alias.png]]

## Alias Records

- Maps a hostname to an AWS resource; an extension to DNS functionality.
- Automatically recognises changes in the resource's IP addresses.
- Can be used for the top node of a DNS namespace (zone apex), for example `example.com`.
- Always of type A/AAAA for AWS resources (IPv4/IPv6).
- You cannot set the TTL.

![[SAA-v48-p204-alias-record.png]]

## Alias Record Targets

- Elastic Load Balancers
- CloudFront distributions
- API Gateway
- Elastic Beanstalk environments
- S3 websites
- VPC interface endpoints
- Global Accelerator accelerators
- A Route 53 record in the same hosted zone

You cannot set an Alias record for an EC2 DNS name.

## Related

- [[Network/Route 53]]
- [[Network/Route 53/Route 53 Records]]
- [[Network/Route 53/Records TTL]]

Source slides: pp. 203-205.
