# Lambda Limits and Concurrency

## Execution Limits (per Region)

- Memory allocation: 128 MB to 10 GB in 1 MB increments.
- Maximum execution time: 900 seconds (15 minutes).
- Environment variables: 4 KB.
- Disk capacity in the function container (`/tmp`): 512 MB to 10 GB.
- Concurrency executions: 1,000 by default, can be increased.

## Deployment Limits

- Lambda function deployment size (compressed `.zip`): 50 MB.
- Uncompressed deployment size (code + dependencies): 250 MB.
- Can use the `/tmp` directory to load other files at startup.
- Environment variables: 4 KB.

![[SAA-v48-p448-lambda-limits.png]]

## Concurrency and Throttling

- Concurrency limit of up to 1,000 concurrent executions.
- Reserved concurrency can be set at the function level.
- Each invocation over the concurrency limit triggers a throttle.
- Throttle behaviour:
	- Synchronous invocation returns `ThrottleError - 429`.
	- Asynchronous invocation retries automatically and then goes to a DLQ.
- Open a support ticket for a higher limit.

![[SAA-v48-p449-lambda-concurrency.png]]

## Asynchronous Invocations

- If the function lacks concurrency to process all events, additional requests are throttled.
- For throttling errors (429) and system errors (500-series), Lambda returns the event to the queue and retries for up to 6 hours.
- The retry interval increases exponentially from 1 second to a maximum of 5 minutes.

## Related

- [[Serverless/Lambda]]
- [[Serverless/Lambda Cold Starts and SnapStart]]

Source slides: pp. 448-451.
