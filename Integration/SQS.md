# Amazon SQS

Amazon SQS is a managed queue for decoupling producers from consumers. Producers send messages; consumers poll, process, and delete them.

## Standard Queue

- Very high throughput and at-least-once delivery.
- Messages can be delivered more than once and ordering is best effort.
- Retention is normally 4 days and can be extended to 14 days; each message is limited to 1 MiB.
- Visibility timeout hides a received message while it is processed. Extend it when a job needs more time; otherwise a failed or slow consumer may see the message again.
- Long polling waits for messages for up to 20 seconds and reduces empty receive calls.

![[SAA-v48-p378-sqs-queue.png]]
![[SAA-v48-p392-sqs-buffer.png]]

## FIFO Queue

- Preserves order within a Message Group ID and supports deduplication.
- Use it when ordering or exactly-once processing semantics are more important than unlimited throughput.

## Scaling and Security

- Scale consumers with an Auto Scaling Group or Lambda using queue depth such as `ApproximateNumberOfMessages`.
- Encrypt in transit with HTTPS and at rest with KMS. IAM policies control API access; queue policies support cross-account and service-to-queue access.
- Use a dead-letter queue for messages that repeatedly fail processing.

Source slides: pp. 375-393.
