# Amazon Kinesis

Kinesis services handle streaming data such as clickstreams, IoT events, metrics, and logs.

## Kinesis Data Streams

- Producers write records to shards; consumers read them in real time.
- Records are retained for replay, from one day up to the configured maximum of 365 days in the deck.
- Records with the same partition key are ordered. A record is limited to 10 MiB.
- Provisioned mode uses manually sized shards. On-demand mode removes shard capacity planning and scales from observed traffic.
- Consumers include Lambda, Kinesis Client Library applications, Kinesis Data Analytics, and Firehose.

![[SAA-v48-p405-kinesis-streams.png]]

## Kinesis Data Firehose

Firehose buffers, optionally transforms, and delivers streaming data to destinations such as S3, Redshift, OpenSearch, and third-party services. It is near real time and fully managed; it does not provide the same replay-oriented stream model as Data Streams.

![[SAA-v48-p409-kinesis-firehose.png]]

Choose Data Streams for custom real-time consumers and replay. Choose Firehose for managed delivery into analytics or storage destinations.

Source slides: pp. 405-413.
