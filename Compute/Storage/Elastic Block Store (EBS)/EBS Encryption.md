# EBS Encryption

Encrypting an EBS volume encrypts the volume, the traffic, and every snapshot derived from it.

## What You Get

- Data at rest is encrypted inside the volume.
- Data in flight between the instance and the volume is encrypted.
- All snapshots are encrypted.
- All volumes created from the snapshot are encrypted.

## Behaviour

- Encryption and decryption are handled transparently.
- Minimal impact on latency.
- Uses KMS keys (AES-256).
- Copying an unencrypted snapshot allows encryption.
- Snapshots of encrypted volumes are encrypted.

![[SAA-v48-p110-ebs-encryption.png]]

## Encrypt an Unencrypted Volume

1. Create an EBS snapshot of the volume.
2. Encrypt the EBS snapshot (using copy).
3. Create a new EBS volume from the snapshot; the volume is encrypted.
4. Attach the encrypted volume to the original instance.

## Related

- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]
- [[Compute/Storage/Elastic Block Store (EBS)/EBS Snapshots]]
- [[Security/KMS and Encryption]]

Source slides: pp. 110-111.
