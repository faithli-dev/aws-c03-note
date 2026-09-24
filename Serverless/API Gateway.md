# Amazon API Gateway

API Gateway is a managed front door for REST, HTTP, and WebSocket APIs.

- Integrates with Lambda, HTTP backends, AWS services, and private VPC resources.
- Handles authentication and authorization, API keys, throttling, validation, request/response transformation, versioning, stages, and deployment.
- Import OpenAPI definitions and generate SDKs and API specifications.
- Cache responses at the API stage when repeated reads can be served without invoking the backend.
- Use a usage plan and API key for controlled consumer access; do not treat an API key as the main user authentication mechanism.

![[SAA-v48-p478-api-gateway-lambda-dynamodb.png]]
![[SAA-v48-p808-api-gateway-service-integration.png]]

For a typical serverless CRUD API, API Gateway receives HTTPS requests, invokes Lambda, and Lambda reads or writes DynamoDB. CloudFront can sit in front when edge caching or global delivery is required.

Source slides: pp. 478-480 and 808-809.
