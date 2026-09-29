# CloudFront Origins

## Origin Types

- **S3 bucket** – for distributing files and caching them at the edge, and for uploading files to S3 through CloudFront. Secured using Origin Access Control (OAC).
- **VPC origin** – for applications hosted in VPC private subnets: private Application Load Balancer, Network Load Balancer, or EC2 instances.
- **Custom origin (HTTP)** – an S3 website (the bucket must first be enabled as a static S3 website) or any public HTTP backend such as a public ALB.

![[SAA-v48-p337-cloudfront-origins.png]]

## S3 as an Origin

- Edge locations fetch from the S3 bucket over the private AWS network using OAC plus an S3 bucket policy.
- The bucket does not need to be public.

![[SAA-v48-p339-cloudfront-s3-origin.png]]

## ALB or EC2 as an Origin

### Using VPC Origins

- Delivers content from applications in VPC private subnets without exposing them to the internet.
- Works with private ALB, NLB, and EC2 instances.

### Using the Public Network

- The ALB or EC2 instance must be public.
- Security groups must allow the public IPs of the edge locations, available from the CloudFront IP list.

## CloudFront vs S3 Cross Region Replication

- **CloudFront** – global edge network; files are cached for a TTL; great for static content that must be available everywhere.
- **S3 Cross Region Replication** – must be set up for each Region; files update in near real-time; read-only; great for dynamic content that needs low latency in a few Regions.

## Related

- [[Network/CloudFront]]
- [[Storage/S3/S3]]
- [[Network/Global Accelerator]]

Source slides: pp. 337-342.
