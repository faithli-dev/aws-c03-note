# IAM Users and Groups

IAM is a global service used to manage identities inside an AWS account.

## Users

- The root account is created by default and should not be used or shared.
- A user represents one person within your organisation.
- Users can be grouped.
- Users do not have to belong to a group, and a user can belong to multiple groups.
- One physical user should map to one AWS user.

## Groups

- A group contains users only, never other groups.
- Groups are not identities: permissions are attached to the group and inherited by its users.
- A group has no permanent credentials of its own.

![[SAA-v48-p025-iam-users-groups.png]]

## Permissions

- Users or groups are assigned JSON documents called [[Security/Role Based/IAM Permission Policies]].
- Permissions inherit through group membership; see [[Security/Role Based/IAM Policies inheritance]].
- Apply the least privilege principle: never grant more permissions than a user needs.

## Related

- [[Security/Role Based/Identity and Access Management (IAM)]]
- [[Security/Role Based/IAM Password Policy]]
- [[Security/Role Based/Multi Factor Authentication (MFA)]]
- [[Security/Role Based/IAM Roles for Services]]

Source slides: pp. 25-26.
