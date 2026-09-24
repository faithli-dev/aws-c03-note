# Amazon MQ

Amazon MQ is a managed message broker for applications that use open protocols such as MQTT, AMQP, STOMP, OpenWire, or WSS.

- It provides queue and topic semantics similar to SQS and SNS.
- Use it when migrating a traditional broker-based application without re-engineering its messaging protocol.
- It runs on managed broker servers and can use Multi-AZ failover, but it does not scale like cloud-native SQS or SNS.

Choose SQS or SNS for new AWS-native workloads. Choose Amazon MQ for protocol compatibility and migration speed.

![[SAA-v48-p413-amazon-mq.png]]

Source slides: pp. 412-413.
