# Amazon Keyspaces

Amazon Keyspaces is a serverless, Cassandra-compatible wide-column database.

## Core Characteristics

- Use Cassandra Query Language (CQL).
- Tables are designed around partition keys and clustering keys.
- Capacity can be on demand or provisioned with auto scaling.
- Data is replicated across Availability Zones and the service scales with traffic.
- Encryption, backups, and point-in-time recovery are managed features.

## When to Choose Keyspaces

- The application needs Cassandra compatibility.
- The workload has very high write or request volume.
- Access patterns are known and can be modeled around partition keys.
- The service should scale without managing Cassandra clusters.

Typical examples include IoT device data and high-volume time-series records. Choose Timestream when time-window analytics and time-series functions are the primary requirement.

Source slide: p. 524.
