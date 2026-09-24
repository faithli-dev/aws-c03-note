# Amazon CloudFront

CloudFront is AWS’s content delivery network. It caches objects at edge locations, reduces origin load, and improves latency for global viewers.

## Origins

- S3 is suited to static objects. Use Origin Access Control so the bucket is private and accepts requests from the distribution.
- ALB, EC2, or a custom HTTP origin supports dynamic applications. The origin can be reached through a public network or a VPC origin where supported.
- Configure cache behaviors, path patterns, allowed methods, headers, cookies, query strings, and TTLs for each behavior.

![[SAA-v48-p338-cloudfront-flow.png]]
![[SAA-v48-p341-cloudfront-vpc-origin.png]]

## Features

- Invalidate cached objects after an origin update, or use versioned filenames for predictable cache changes.
- Geo restriction allowlists or blocklists countries; it is different from latency routing.
- CloudFront integrates with ACM certificates, Route 53, AWS WAF, Shield, Lambda@Edge, and CloudFront Functions.
- CloudFront Functions are lightweight JavaScript functions for viewer request/response changes. Lambda@Edge supports Node.js or Python, longer execution, origin triggers, network access, and access to the request body.

## CloudFront vs. S3 Replication

CloudFront is a cache and serves content from edge locations. S3 Cross-Region Replication copies objects between buckets for regional storage, data sovereignty, or disaster recovery. Choose based on whether the requirement is read latency or a second durable copy.

Source slides: pp. 335-349 and 452-460.
