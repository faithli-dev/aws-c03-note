# Amazon QLDB

Amazon Quantum Ledger Database (QLDB) is a managed ledger database for maintaining an immutable and cryptographically verifiable history of transactions.

## What It Stores

- Append-only transaction history.
- A verifiable record of how data changed over time.
- Audit evidence where tamper detection and history matter.

## When to Choose QLDB

Choose QLDB when an application needs a central, trusted history of changes, such as financial records, asset ownership, or compliance events. Use a relational database for normal transactions, DynamoDB for high-scale key-value access, and S3 for large objects.

QLDB is a ledger database, not a general replacement for RDS, DynamoDB, or S3.

Source slide: p. 515.
