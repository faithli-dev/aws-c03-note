# Blog Architecture (MyBlog)

## Requirements

- The website should scale globally.
- Blogs are rarely written but often read.
- Some of the website is purely static files; the rest is a dynamic REST API.
- Caching must be implemented where possible.
- Any new user who subscribes should receive a welcome email.
- Any photo uploaded to the blog should have a thumbnail generated.

## Serving Static Content Globally

- CloudFront provides a global distribution.
- S3 stores the static files.
- Origin Access Control (OAC) plus a bucket policy authorises access only from the CloudFront distribution.

![[SAA-v48-p499-static-content-globally.png]]

## Public Serverless REST API

- API Gateway invokes Lambda, which queries DynamoDB with a DAX caching layer.
- This API is public, so Cognito is not needed.

## Global Data

Use DynamoDB Global Tables to serve data globally (Aurora Global Database is an alternative).

## Welcome Email Flow

- A DynamoDB Stream triggers a Lambda function.
- The Lambda function uses its IAM role to call Amazon SES and send the email.

![[SAA-v48-p503-welcome-email-flow.png]]

## Thumbnail Generation Flow

- Photos are uploaded to S3, optionally with Transfer Acceleration.
- S3 triggers a Lambda function (optionally via SQS/SNS) to generate a thumbnail.
- The thumbnail is written back to S3.

![[SAA-v48-p504-thumbnail-flow.png]]

## Summary

- Static content distributed with CloudFront and S3.
- The REST API was serverless and public.
- A global DynamoDB table served data globally.
- DynamoDB Streams triggered a Lambda function.
- The Lambda function had an IAM role that could use SES to send emails serverlessly.
- S3 can trigger SQS, SNS, or Lambda to notify of events.

## Related

- [[Serverless/Architectures]]
- [[Network/CloudFront]]
- [[Integration/SES]]

Source slides: pp. 498-505.
