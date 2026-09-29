# SQS FIFO Queue

FIFO = First In First Out, guaranteeing message ordering in the queue.

## Characteristics

- Limited throughput: 300 msg/s without batching, 3,000 msg/s with batching.
- Exactly-once send capability, removing duplicates using a Deduplication ID.
- Messages are processed in order by the consumer.
- Ordering by Message Group ID: all messages in the same group are ordered. This parameter is mandatory.

![[SAA-v48-p389-sqs-fifo.png]]

## Related

- [[Integration/SQS]]
- [[Integration/SNS FIFO and Message Filtering]]
- [[Integration/SQS vs SNS vs Kinesis]]

Source slides: p. 389.
