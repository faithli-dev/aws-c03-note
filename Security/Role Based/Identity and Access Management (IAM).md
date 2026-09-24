- IAM = Identity and Access Management, Global service
- Root account created by default, shouldn’t be used or shared
- Users are people within your organization, and can be grouped
- Groups only contain users, not other groups
- Users don’t have to belong to a group, and user can belong to multiple groups
![[截圖 2026-09-19 下午3.01.01.png]]
And there will be json to hold the permission for each IAM role: [[IAM Permission Policies]]
Interhitance Mechanism: [[IAM Policies inheritance]]

## Password Policy
> Strong Password = higher security

- Set minimum password length
- Require specific character
	- uppercase letters
	- lowercase letters
	- numbers
	- non-alphanumeric characters
- Allow all IAM users to change their own passwords
- Password expiration
- Prevent password re-use

## Multi Factor Authentication MFA
Password + code  = Successful login

### MFA Device Option

1. Virtual
	- Authenticator APP ( Google, Apple, Microsoft...etc )
2. Physical
	- Universal 2nd Factor (U2F) Security Key ( YubiKey by Yubico )
	- Hardware Key Fob MFA Device
	- Hardware Key Fob MFA Device for AWS GovCloud ( US )

# Roles for Services
- Some AWS service will need to perform actions on your behalf
- To do so, we will assign permissions to AWS services with IAM Roles
- Common roles: 
	- EC2 Instance Roles 
	- Lambda Function Roles 
	- Roles for CloudFormation
![[Pasted image 20260920151419.png|287]]

# Guidelines & Best Practices!!

- Don’t use the root account except for AWS account setup
- One physical user = One AWS user
- Assign users to groups and assign permissions to groups
- Create a strong password policy
- Use and enforce the use of Multi Factor Authentication (MFA)
- Create and use Roles for giving permissions to AWS services
- Use Access Keys for Programmatic Access (CLI / SDK)
- Audit permissions of your account using IAM Credentials Report & IAM Access Advisor
- Never share IAM users & Access Keys