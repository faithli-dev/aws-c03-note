# S3 Static Website Hosting

S3 can host static websites accessible on the internet.

## Website URL

Depending on the Region:

- `http://bucket-name.s3-website-aws-region.amazonaws.com`
- `http://bucket-name.s3-website.aws-region.amazonaws.com`

![[SAA-v48-p280-static-website.png]]

## Troubleshooting

A 403 Forbidden error usually means the bucket policy does not allow public reads.

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Bucket Policies]]
- [[Network/CloudFront]]

Source slides: p. 280.
