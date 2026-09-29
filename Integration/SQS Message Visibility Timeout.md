# SQS Message Visibility Timeout

After a message is polled by a consumer, it becomes invisible to other consumers.

## Behaviour

- The default visibility timeout is 30 seconds, meaning the message has 30 seconds to be processed.
- After the timeout expires, the message becomes visible again in SQS.
- If a message is not processed within the visibility timeout, it will be processed twice.
- A consumer can call `ChangeMessageVisibility` to get more time.

![[SAA-v48-p386-visibility-timeout.png]]

## Tuning

- If the visibility timeout is high (hours) and a consumer crashes, re-processing takes a long time.
- If the visibility timeout is too low (seconds), you may get duplicates.

## Related

- [[Integration/SQS]]
- [[Integration/SQS Long Polling]]

Source slides: pp. 386-387.
