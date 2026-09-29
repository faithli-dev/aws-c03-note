# RDS Custom

RDS Custom is a managed Oracle and Microsoft SQL Server database that gives you OS and database customisation.

## RDS vs RDS Custom

- **RDS** – the entire database and OS are managed by AWS. You cannot SSH in.
- **RDS Custom** – full admin access to the underlying OS and database.

## What You Can Do

- Configure settings
- Install patches
- Enable native features
- Access the underlying EC2 instance using SSH or SSM Session Manager

![[SAA-v48-p169-rds-custom.png]]

## Automation Mode

- Deactivate Automation Mode to perform customisation.
- Better to take a DB snapshot before making changes.

## Related

- [[Database/RDS/RDS]]
- [[Database/RDS/RDS & Aurora Security]]
- [[Monitoring/Systems Manager]]

Source slides: p. 169.
