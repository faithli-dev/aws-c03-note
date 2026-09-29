# IAM Conditions

IAM conditions restrict when a policy is in effect.

## Common Conditions

- `aws:SourceIp` – restrict the client IP from which API calls are made.
- `aws:RequestedRegion` – restrict the Region API calls are made to.
- `ec2:ResourceTag` – restrict based on tags.
- `aws:MultiFactorAuthPresent` – force MFA.

## IAM for S3

- `s3:ListBucket` applies to `arn:aws:s3:::test` – bucket-level permission.
- `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject` apply to `arn:aws:s3:::test/*` – object-level permission.

## Resource Policies and aws:PrincipalOrgID

- `aws:PrincipalOrgID` can be used in any resource policy to restrict access to accounts that are members of an AWS Organization.
- Useful for sharing a bucket with an entire organisation while blocking users outside it.

![[SAA-v48-p630-principal-org-id.png]]

## Related

- [[Security/Role Based/IAM Permission Policies]]
- [[Security/Organizations]]

Source slides: pp. 627-630.
