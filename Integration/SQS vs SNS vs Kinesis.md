# SQS vs SNS vs Kinesis

## SQS

- Consumer "pull data".
- Data is deleted after being consumed.
- Can have as many workers (consumers) as needed.
- No need to provision throughput.
- Ordering guarantees only on FIFO queues.
- Individual message delay capability.

## SNS

- Push data to many subscribers.
- Up to 12,500,000 subscribers.
- Data is not persisted (lost if not delivered).
- Pub/Sub.
- Up to 100,000 topics.
- No need to provision throughput.
- Integrates with SQS for the fan-out architecture pattern.
- FIFO capability for SQS FIFO.

## Kinesis

- Standard: pull data, 2 MB per shard.
- Enhanced fan-out: push data, 2 MB per shard per consumer.
- Possibility to replay data.
- Meant for real-time big data, analytics, and ETL.
- Ordering at the shard level.
- Data expires after X days.
- Provisioned mode or on-demand capacity mode.

![[SAA-v48-p411-sqs-sns-kinesis.png]]

## Related

- [[Integration/SQS]]
- [[Integration/SNS]]
- [[Integration/Kinesis]]

Source slides: p. 411.
