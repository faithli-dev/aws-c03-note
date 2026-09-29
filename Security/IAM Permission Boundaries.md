# IAM Permission Boundaries

IAM permission boundaries are supported for users and roles, not groups. They are an advanced feature using a managed policy to set the maximum permissions an IAM entity can get.

## How It Works

Effective permissions = permission boundary AND IAM permissions.

If the boundary and the IAM policy do not overlap, the entity has no permissions.

![[SAA-v48-p634-permission-boundaries.png]]

## Use Cases

- Delegate responsibilities to non-administrators within their permission boundaries, for example creating new IAM users.
- Allow developers to self-assign policies and manage their own permissions while preventing privilege escalation (making themselves admin).
- Restrict one specific user instead of a whole account using Organizations and SCPs.

Can be combined with AWS Organizations SCPs.

## Related

- [[Security/Role Based/IAM Permission Policies]]
- [[Security/Organizations]]
- [[Security/IAM Policy Evaluation Logic]]

Source slides: pp. 634-635.
