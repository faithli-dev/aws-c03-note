# SNS FIFO and Message Filtering

## SNS FIFO Topic

- FIFO = First In First Out, ordering messages in the topic.
- Ordering by Message Group ID (all messages in the same group are ordered).
- Deduplication using a Deduplication ID or content-based deduplication.
- Can have SQS Standard and FIFO queues as subscribers.
- Limited throughput, the same as SQS FIFO.

![[SAA-v48-p402-sns-fifo.png]]

## SNS FIFO + SQS FIFO Fan-Out

Use this when you need fan-out plus ordering plus deduplication.

## Message Filtering

- A JSON policy filters messages sent to an SNS topic's subscriptions.
- If a subscription has no filter policy, it receives every message.

![[SAA-v48-p404-sns-message-filtering.png]]

## Related

- [[Integration/SNS]]
- [[Integration/SNS Fan-Out]]
- [[Integration/SQS FIFO Queue]]

Source slides: pp. 402-404.
