# AWS Directory Services

## Microsoft Active Directory (AD)

- Found on any Windows Server with AD Domain Services.
- A database of objects: user accounts, computers, printers, file shares, security groups.
- Centralised security management: create accounts, assign permissions.
- Objects are organised in trees; a group of trees is a forest.

## AWS Directory Services

- **AWS Managed Microsoft AD** – create your own AD in AWS, manage users locally, supports MFA, and establishes trust connections with your on-premises AD.
- **AD Connector** – a directory gateway (proxy) that redirects to on-premises AD, supports MFA. Users are managed on the on-premises AD.
- **Simple AD** – an AD-compatible managed directory on AWS. Cannot be joined with on-premises AD.

![[SAA-v48-p644-directory-services.png]]

## IAM Identity Center – Active Directory Setup

- Connect to an AWS Managed Microsoft AD (Directory Service): integration is out of the box.
- Connect to a self-managed directory:
	- Create a two-way trust relationship using AWS Managed Microsoft AD, or
	- Create an AD Connector.

## Related

- [[Security/IAM Identity Center]]
- [[Security/Organizations]]

Source slides: pp. 643-645.
