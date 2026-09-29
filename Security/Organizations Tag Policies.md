# AWS Organizations Tag Policies

Helps standardise tags across resources in an AWS Organization.

## Behaviour

- Ensure consistent tags, audit tagged resources, and maintain proper resource categorisation.
- You define tag keys and their allowed values.
- Helps with AWS Cost Allocation Tags and attribute-based access control.
- Prevents non-compliant tagging operations on specified services and resources (has no effect on resources without tags).
- Generates a report listing all tagged and non-compliant resources.
- Use EventBridge to monitor non-compliant tags.

![[SAA-v48-p626-tag-policies.png]]

## Related

- [[Security/Organizations]]
- [[Other Services/Cost Management]]

Source slides: p. 626.
