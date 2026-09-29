# SNS Fan-Out

Fan-out is the pattern of pushing one message to many receivers using SNS.

## Behaviour

- Push once to SNS and receive in all SQS queues that are subscribers.
- Fully decoupled with no data loss.
- SQS provides data persistence, delayed processing, and retries of work.
- More SQS subscribers can be added over time.
- The SQS queue access policy must allow SNS to write.
- Cross-Region delivery works with SQS queues in other Regions.

![[SAA-v48-p399-sns-fan-out.png]]

## Applications

### S3 Events to Multiple Queues

For the same combination of event type (for example object create) and prefix (for example `images/`), you can only have one S3 Event rule. To send the same S3 event to many SQS queues, use fan-out.

### SNS to S3 through Kinesis Data Firehose

SNS can send to Kinesis, so a message can land in S3 through Firehose.

## Related

- [[Integration/SNS]]
- [[Integration/SQS]]
- [[Integration/SNS FIFO and Message Filtering]]
- [[Architecture/More Solutions Architecture]]

Source slides: pp. 399-401.
