# AWS Control Tower

An easy way to set up and govern a secure and compliant multi-account AWS environment based on best practices. Control Tower uses AWS Organizations to create accounts.

## Benefits

- Automate the setup of your environment in a few clicks.
- Automate ongoing policy management using guardrails.
- Detect policy violations and remediate them.
- Monitor compliance through an interactive dashboard.

## Guardrails

Provides ongoing governance for your Control Tower environment.

- **Preventive Guardrail** – using SCPs, for example restrict Regions across all accounts.
- **Detective Guardrail** – using AWS Config, for example identify untagged resources.

![[SAA-v48-p647-control-tower-guardrails.png]]

## Related

- [[Security/Organizations]]
- [[Monitoring/AWS Config]]
- [[Security/IAM Identity Center]]

Source slides: pp. 646-647.
