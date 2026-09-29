# S3 Express One Zone

High-performance, single Availability Zone storage class.

## Characteristics

- Objects are stored in a **Directory Bucket** (a bucket in a single AZ).
- Handles 100,000s of requests per second with single-digit millisecond latency.
- Up to 10x better performance than S3 Standard at 50% lower cost.
- High durability (99.999999999%) and availability (99.95%).
- Co-locate storage and compute in the same AZ to reduce latency.

![[SAA-v48-p292-express-one-zone.png]]

## Use Cases

Latency-sensitive apps, data-intensive apps, AI and ML training, financial modelling, media processing, HPC.

## Integrations

Best integrated with SageMaker Model Training, Athena, EMR, and Glue.

## Related

- [[Storage/S3/S3 Storage Classes]]
- [[Storage/S3/S3]]

Source slides: p. 292.
