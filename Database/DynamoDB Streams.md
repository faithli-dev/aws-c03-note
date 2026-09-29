# DynamoDB Streams

An ordered stream of item-level modifications (create, update, delete) in a table.

## Use Cases

- React to changes in real time, for example a welcome email to users
- Real-time usage analytics
- Insert into derivative tables
- Implement cross-Region replication
- Invoke AWS Lambda on changes to your DynamoDB table

![[SAA-v48-p472-dynamodb-streams.png]]

## Stream Options

### DynamoDB Streams

- 24 hours retention.
- Limited number of consumers.
- Process using AWS Lambda triggers or the DynamoDB Stream Kinesis adapter.

### Kinesis Data Streams (newer)

- 1 year retention.
- High number of consumers.
- Process using Lambda, Kinesis Data Analytics, Kinesis Data Firehose, or AWS Glue streaming ETL.

## Related

- [[Database/DynamoDB]]
- [[Integration/Kinesis Data Streams]]
- [[Serverless/Lambda]]

Source slides: pp. 472-473.
