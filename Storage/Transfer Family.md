# AWS Transfer Family

Transfer Family provides managed file transfer endpoints for SFTP, FTPS, and FTP.

- Backends can be Amazon S3 or Amazon EFS.
- Users can be authenticated by a service-managed identity, a custom identity provider, Microsoft Active Directory, or LDAP.
- IAM roles control which S3 prefixes or EFS paths each user can access.
- Route 53 can provide a friendly DNS name, and the endpoint can be public or hosted inside a VPC depending on the protocol and design.

![[SAA-v48-p370-transfer-family.png]]

Use it when partners or legacy clients require standard file-transfer protocols while the data should land in managed AWS storage.

Source slides: pp. 370-374.
