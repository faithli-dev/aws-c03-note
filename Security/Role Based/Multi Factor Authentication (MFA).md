# Multi Factor Authentication (MFA)

MFA adds a second factor to a password. Users have access to your account and could change configuration or delete resources, so protect the root account and IAM users.

## Concept

- MFA = password you know + security device you own.
- Main benefit: if a password is stolen or hacked, the account is not compromised.

![[SAA-v48-p030-mfa.png]]

## Virtual MFA Devices

- Google Authenticator (phone only)
- Authy (phone only)

## Physical MFA Devices

- Universal 2nd Factor (U2F) Security Key – YubiKey by Yubico (3rd party). Supports multiple tokens on a single device and multiple root and IAM users on a single key.
- Hardware Key Fob MFA Device – provided by Gemalto (3rd party).
- Hardware Key Fob MFA Device for AWS GovCloud (US) – provided by SurePassID (3rd party).

## Related

- [[Security/Role Based/IAM Password Policy]]
- [[Security/Role Based/Identity and Access Management (IAM)]]

Source slides: pp. 30-32.
