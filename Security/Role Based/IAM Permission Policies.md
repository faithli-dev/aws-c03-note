- Users or Groups can be assigned JSON documents called policies
- These policies define the permissions of the users
- In AWS you apply the least privilege principle: don’t give more permissions than a user needs

## Structure

### Consists of 
- ==Version==: policy language version, always include “2012-10-17”
- ==Id==: an identifier for the policy (optional) 
- ==Statement==: one or more individual statements (required)

### Statements consists of 
- ==Sid:== an identifier for the statement (optional)
- ==Effect==: whether the statement allows or denies access (Allow, Deny)
- ==Principal==: account/user/role to which this policy applied to 
- ==Action==: list of actions this policy allows or denies 
- ==Resource==: list of resources to which the actions applied to 
- ==Condition==: conditions for when this policy is in effect (optional)


```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "1",
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "arn:aws:iam::123456789012:root"
        ]
      },
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": [
        "arn:aws:s3:::mybucket/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "ec2:Describe*",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "elasticloadbalancing:Describe*",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudwatch:ListMetrics",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
```