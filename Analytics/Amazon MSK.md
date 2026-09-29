# Amazon MSK

Amazon Managed Streaming for Apache Kafka (Amazon MSK) is an alternative to Amazon Kinesis.

## Characteristics

- Fully managed Apache Kafka on AWS.
- Create, update, and delete clusters.
- MSK creates and manages Kafka broker nodes and Zookeeper nodes for you.
- Deploy the MSK cluster in your VPC, multi-AZ (up to 3 for high availability).
- Automatic recovery from common Apache Kafka failures.
- Data is stored on EBS volumes for as long as you want.

## MSK Serverless

- Run Apache Kafka on MSK without managing capacity.
- MSK automatically provisions resources and scales compute and storage.

![[SAA-v48-p554-kafka.png]]

## Kinesis Data Streams vs Amazon MSK

| Kinesis Data Streams | Amazon MSK |
|---|---|
| 1 MB message size limit | 1 MB default, configurable higher (for example 10 MB) |
| Data streams with shards | Kafka topics with partitions |
| Shard splitting and merging | Can only add partitions to a topic |
| TLS in-flight encryption | PLAINTEXT or TLS in-flight encryption |
| KMS at-rest encryption | KMS at-rest encryption |

## Consumers

Amazon Managed Service for Apache Flink, AWS Glue streaming ETL jobs powered by Apache Spark Streaming, Lambda, and applications running on Amazon EC2, ECS, or EKS.

## Related

- [[Analytics/Data and Analytics]]
- [[Integration/Kinesis Data Streams]]
- [[Analytics/Amazon Managed Service for Apache Flink]]

Source slides: pp. 553-556.
