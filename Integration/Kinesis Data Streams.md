# Kinesis Data Streams

Collect and store streaming data in real time.

## Characteristics

- Retention up to 365 days.
- Ability to reprocess (replay) data by consumers.
- Data cannot be deleted from Kinesis until it expires.
- Data up to 10 MiB; the typical use case is a lot of small real-time data.
- Data ordering guarantee for data with the same Partition ID.
- At-rest KMS encryption and in-flight HTTPS encryption.
- Kinesis Producer Library (KPL) to write an optimised producer application.
- Kinesis Client Library (KCL) to write an optimised consumer application.

![[SAA-v48-p405-kinesis-data-streams.png]]

## Capacity Modes

- **Provisioned mode** – choose the number of shards. Each shard gets 1 MB/s in (or 1,000 records per second) and 2 MB/s out. Scale manually. Pay per shard provisioned per hour.
- **On-demand mode** – no capacity to provision or manage. Default capacity of 4 MB/s in or 4,000 records per second, scaling automatically based on the observed throughput peak over the last 30 days. Pay per stream per hour and data in/out per GB.

![[SAA-v48-p407-kinesis-capacity-modes.png]]

## Related

- [[Integration/Kinesis]]
- [[Integration/Amazon Data Firehose]]
- [[Integration/SQS vs SNS vs Kinesis]]

Source slides: pp. 405-407.
