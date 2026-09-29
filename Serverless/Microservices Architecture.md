# Microservices Architecture

Switch to a microservice architecture where many services interact directly using a REST API. Each microservice may have a different architecture, giving a leaner development lifecycle per service.

## Environment

- Route 53 routes to `service1.example.com`, `service2.example.com`, `service3.example.com`.
- Services use API Gateway + Lambda, Elastic Load Balancing + EC2 Auto Scaling, ECS, ElastiCache, RDS, and DynamoDB.

![[SAA-v48-p507-microservices.png]]

## Design Freedom

- Synchronous patterns: API Gateway, load balancers.
- Asynchronous patterns: SQS, Kinesis, SNS, Lambda triggers (S3).

## Challenges

- Repeated overhead for creating each new microservice.
- Optimising server density and utilisation.
- Complexity of running multiple versions of multiple microservices simultaneously.
- Proliferation of client-side code requirements to integrate with many separate services.

## How Serverless Helps

- API Gateway and Lambda scale automatically and are pay-per-usage.
- APIs can be cloned easily and environments reproduced.
- Client SDKs can be generated through Swagger integration for API Gateway.

## Related

- [[Serverless/Architectures]]
- [[Serverless/Lambda]]
- [[Compute/ECS]]

Source slides: pp. 506-508.
