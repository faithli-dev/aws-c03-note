# Lambda Cold Starts and SnapStart

## Cold Start

- A new instance means code is loaded and code outside the handler runs (init).
- If the init is large (code, dependencies, SDK), this process takes time.
- The first request served by a new instance has higher latency than the rest.

## Provisioned Concurrency

- Concurrency is allocated before the function is invoked.
- The cold start never happens and all invocations have low latency.
- Application Auto Scaling can manage concurrency by schedule or target utilisation.

![[SAA-v48-p452-cold-starts.png]]

## Lambda SnapStart

- Improves Lambda function performance up to 10x at no extra cost for Java, Python, and .NET.
- When enabled, the function is invoked from a pre-initialised state, with no function initialisation from scratch.
- When you publish a new version:
	- Lambda initialises your function.
	- Takes a snapshot of the memory and disk state of the initialised function.
	- Caches the snapshot for low-latency access.

![[SAA-v48-p454-snapstart.png]]

## Note

Cold starts in a VPC were dramatically reduced in October and November 2019.

## Related

- [[Serverless/Lambda]]
- [[Serverless/Lambda Limits and Concurrency]]
- [[Serverless/Lambda in VPC]]

Source slides: pp. 452-454.
