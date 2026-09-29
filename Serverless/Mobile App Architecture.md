# Mobile App Architecture (MyTodoList)

## Requirements

- Expose a REST API with HTTPS.
- Serverless architecture.
- Users should be able to directly interact with their own folder in S3.
- Users should authenticate through a managed serverless service.
- Users can write and read to-dos, but they mostly read them.
- The database should scale and have high read throughput.

## REST API Layer

- Mobile client authenticates with Amazon Cognito.
- API Gateway verifies authentication and invokes Lambda.
- Lambda queries DynamoDB.

![[SAA-v48-p493-mobile-rest-api.png]]

## Giving Users Access to S3

Cognito grants temporary credentials with a restricted policy so users store and retrieve their own files directly in S3.

## High Read Throughput

Add a DAX caching layer in front of DynamoDB.

![[SAA-v48-p495-mobile-dax.png]]

## Caching at the API Gateway

Enable caching of responses at the API Gateway level for additional read relief.

## Concepts

- Serverless REST API: HTTPS, API Gateway, Lambda, DynamoDB
- Cognito temporary credentials for direct, restricted access to AWS resources (the pattern applies to DynamoDB, Lambda, and others)
- Caching DynamoDB reads with DAX
- Caching REST requests at the API Gateway
- Authentication and authorisation with Cognito

## Related

- [[Serverless/Architectures]]
- [[Serverless/Cognito Identity Pools]]
- [[Serverless/API Gateway]]

Source slides: pp. 492-497.
