# Serverless Architectures

## Mobile To-Do Application

- API Gateway exposes REST over HTTPS.
- Cognito authenticates users and can issue temporary credentials for direct S3 access.
- Lambda implements business logic.
- DynamoDB stores application data; DAX or API Gateway caching handles read-heavy traffic.

![[SAA-v48-p493-serverless-mobile.png]]

## Global Blog Application

- S3 stores static content and CloudFront distributes it globally.
- Origin Access Control keeps the S3 bucket private.
- API Gateway, Lambda, DynamoDB, and DAX provide the dynamic API.
- DynamoDB Global Tables support low-latency active-active reads and writes across Regions.
- DynamoDB Streams can trigger Lambda to send a welcome email through SES.
- S3 events can trigger Lambda, SNS, SQS, or EventBridge for thumbnail generation and other workflows.

![[SAA-v48-p499-serverless-static.png]]
![[SAA-v48-p503-serverless-welcome-email.png]]
![[SAA-v48-p504-serverless-thumbnail.png]]

## Microservices and Offloading
- Synchronous calls can use API Gateway or load balancers; asynchronous work can use SQS, SNS, Kinesis, or event triggers.
- Each microservice may use a different compute and database choice, but service count increases operational and versioning complexity.
- Put CloudFront in front of static software update files to cache them at the edge and reduce EC2 load without changing the application.

Source slides: pp. 491-512.
