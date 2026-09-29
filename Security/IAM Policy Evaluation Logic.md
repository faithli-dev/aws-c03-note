# IAM Policy Evaluation Logic

IAM evaluates policies in a defined order.

## Evaluation Order

1. **Explicit Deny** – if any policy explicitly denies the action, access is denied.
2. **Organizations SCP** – the action must be allowed by the service control policies applying to the account.
3. **Resource-based policy** – if it allows the principal, access is allowed.
4. **Permissions boundary** – the action must be within the boundary for users and roles.
5. **Identity-based policy** – the action must be allowed by an attached policy.
6. **Session policy** – for temporary credentials, the action must be allowed.
7. Otherwise, the result is an **implicit deny**.

## Rule of Thumb

- Explicit deny always wins.
- Allow requires a matching allow at every applicable layer.

## Related

- [[Security/Role Based/IAM Permission Policies]]
- [[Security/Role Based/IAM Policies inheritance]]
- [[Security/IAM Permission Boundaries]]
- [[Security/Organizations]]

Source slides: pp. 636-637.
