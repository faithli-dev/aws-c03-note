# SQS Long Polling

When a consumer requests messages, it can optionally wait for messages to arrive if there are none in the queue. This is long polling.

## Benefits

- Decreases the number of API calls made to SQS.
- Increases efficiency and reduces latency.

## Configuration

- Wait time between 1 and 20 seconds; 20 seconds is preferable.
- Long polling is preferable to short polling.
- Can be enabled at the queue level or at the API level using `WaitTimeSeconds`.

![[SAA-v48-p388-long-polling.png]]

## Related

- [[Integration/SQS]]
- [[Integration/SQS Message Visibility Timeout]]

Source slides: p. 388.
