# More Solutions Architecture

## Messaging Patterns
- SQS with Lambda supports retries and dead-letter queues. FIFO queues preserve order when required.
- SNS plus SQS is the fan-out pattern: publish once, persist independently in multiple queues, and let each consumer scale separately.
- S3 events can trigger Lambda, SQS, or SNS. EventBridge is useful when events need richer JSON filtering, archives, replay, or many destinations.

![[SAA-v48-p803-lambda-sns-sqs.png]]
![[SAA-v48-p804-sns-fanout.png]]

## Caching and Service Integration
- API Gateway can integrate directly with Kinesis Data Streams or Firehose for ingestion.
- Place CloudFront at the edge for global static caching, Redis or Memcached for application data, DAX for DynamoDB reads, and S3 for object caching.
- When blocking an IP, choose the layer that matches the requirement: NACL for subnet IP deny rules, WAF for HTTP requests, or security groups for instance-level allow rules.

![[SAA-v48-p808-api-gateway-service-integration.png]]
![[SAA-v48-p814-cloudfront-waf.png]]

## HPC and Resilient EC2
- HPC uses CPU/GPU instances, Cluster Placement Groups, Enhanced Networking, and EFA for low-latency inter-node communication.
- EBS, Instance Store, EFS, and FSx for Lustre cover different durability and throughput needs.
- AWS Batch and ParallelCluster automate compute clusters and parallel jobs.
- A single EC2 instance can be recovered with CloudWatch and an Elastic IP; an ASG can replace it across AZs and attach tagged EBS volumes through lifecycle hooks.

![[SAA-v48-p815-hpc.png]]
![[SAA-v48-p821-ha-ec2.png]]

Source slides: pp. 802-823.
