# Amazon Cognito

Amazon Cognito provides identity for web and mobile applications.

## User Pools

- A user directory for sign-up, sign-in, password policy, MFA, federation, and JWT tokens.
- Use a User Pool when the application needs to authenticate people.

## Identity Pools
- Exchange an authenticated identity for temporary AWS credentials.
- Policies can restrict each user to a prefix or resource, such as a personal S3 folder.
- Identity Pools can also grant limited unauthenticated access when explicitly configured.

Cognito separates application users from IAM users. Use IAM roles and least-privilege policies for the temporary permissions; never give mobile clients long-lived AWS access keys.

Source slides: pp. 487-490 and 492-497.
