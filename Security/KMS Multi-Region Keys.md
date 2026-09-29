# KMS Multi-Region Keys

## Characteristics

- Identical KMS keys in different AWS Regions that can be used interchangeably.
- Multi-Region keys have the same key ID, key material, and automatic rotation.
- Encrypt in one Region and decrypt in other Regions.
- No need to re-encrypt or make cross-Region API calls.
- Multi-Region keys are **not global** (primary + replicas); each key is managed independently.

![[SAA-v48-p658-kms-multi-region-keys.png]]

## Use Cases

- Global client-side encryption
- Encryption on Global DynamoDB
- Global Aurora

## DynamoDB Global Tables with Client-Side Encryption

- Encrypt specific attributes client-side using the Amazon DynamoDB Encryption Client.
- Combined with Global Tables, the client-side encrypted data is replicated to other Regions.
- With a multi-Region key replicated in the same Region as the global table, clients use low-latency KMS API calls locally to decrypt.
- Protects specific fields and guarantees decryption only if the client has access to the API key.

## Global Aurora with Client-Side Encryption

- Encrypt specific attributes client-side using the AWS Encryption SDK.
- Combined with Aurora Global Database, the client-side encrypted data is replicated.
- With a multi-Region key, clients decrypt locally.
- Protects specific fields even from database administrators.

## S3 Replication Encryption Considerations

- Unencrypted objects and objects encrypted with SSE-S3 are replicated by default.
- Objects encrypted with SSE-C can be replicated.
- For SSE-KMS objects, you must enable the option, specify which KMS key encrypts objects in the target bucket, adapt the KMS key policy for the target key, and use an IAM role with `kms:Decrypt` for the source key and `kms:Encrypt` for the target key.
- KMS throttling errors may occur; request a Service Quotas increase.
- Multi-Region KMS keys are currently treated as independent keys by S3 (objects are still decrypted and re-encrypted).

## Related

- [[Security/KMS Keys Types]]
- [[Security/KMS and Encryption]]
- [[Storage/S3/S3 Replication]]

Source slides: pp. 658-662.
