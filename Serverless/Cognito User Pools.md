# Cognito User Pools

## Purpose

Cognito User Pools provide sign-in functionality for app users.

## User Features

- Create a serverless database of users for your web and mobile apps.
- Simple login: username (or email) and password combination.
- Password reset.
- Email and phone number verification.
- Multi-factor authentication (MFA).
- Federated identities: users from Facebook, Google, SAML.

![[SAA-v48-p486-cognito-user-pools.png]]

## Integrations

User Pools integrate with API Gateway and Application Load Balancer:

- The app authenticates with the User Pool and retrieves a token.
- The API Gateway or ALB evaluates the Cognito token before forwarding to the backend.

## Related

- [[Serverless/Cognito]]
- [[Serverless/Cognito Identity Pools]]
- [[Serverless/API Gateway Security]]

Source slides: pp. 486-487.
