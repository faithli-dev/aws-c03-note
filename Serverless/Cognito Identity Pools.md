# Cognito Identity Pools

Cognito Identity Pools (Federated Identities) give users identities so they obtain temporary AWS credentials.

## Behaviour

- The user source can be Cognito User Pools, third-party logins, and others.
- Users can then access AWS services directly or through API Gateway.
- The IAM policies applied to the credentials are defined in Cognito.
- Policies can be customised based on the `user_id` for fine-grained control.
- Default IAM roles exist for authenticated and guest users.

![[SAA-v48-p489-cognito-identity-pools.png]]

## Flow

1. The web or mobile application logs in with a social identity provider or Cognito User Pools and gets a token.
2. The application exchanges the token for temporary AWS credentials.
3. The application accesses a private S3 bucket or DynamoDB table directly.

## Row Level Security

Identity Pools enable row-level security in DynamoDB by scoping IAM policy conditions to the user's identity.

## Related

- [[Serverless/Cognito]]
- [[Serverless/Cognito User Pools]]
- [[Database/DynamoDB]]

Source slides: pp. 488-490.
