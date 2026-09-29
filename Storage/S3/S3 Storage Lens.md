# S3 Storage Lens

Understand, analyse, and optimise storage across an entire AWS Organization.

## Capabilities

- Discover anomalies, identify cost efficiencies, and apply data protection best practices across the organisation (30 days of usage and activity metrics).
- Aggregate data for the organisation, specific accounts, Regions, buckets, or prefixes.
- Use the default dashboard or create your own.
- Can export metrics daily to an S3 bucket in CSV or Parquet.

![[SAA-v48-p307-storage-lens.png]]

## Default Dashboard

- Visualises summarised insights and trends for free and advanced metrics.
- Shows multi-Region and multi-account data.
- Preconfigured by Amazon S3.
- Cannot be deleted, but can be disabled.

## Metrics

- **Summary** – `StorageBytes`, `ObjectCount`; identify fastest-growing or unused buckets.
- **Cost-Optimization** – `NonCurrentVersionStorageBytes`, `IncompleteMultipartUploadStorageBytes`.
- **Data-Protection** – `VersioningEnabledBucketCount`, `MFADeleteEnabledBucketCount`, `SSEKMSEnabledBucketCount`, `CrossRegionReplicationRuleCount`.
- **Access-management** – `ObjectOwnershipBucketOwnerEnforcedBucketCount`.
- **Event** – `EventNotificationEnabledBucketCount`.
- **Performance** – `TransferAccelerationEnabledBucketCount`.
- **Activity** – `AllRequests`, `GetRequests`, `PutRequests`, `ListRequests`, `BytesDownloaded`.
- **Detailed Status Code** – `200OKStatusCount`, `403ForbiddenErrorCount`, `404NotFoundErrorCount`.

## Free vs Paid

- **Free Metrics** – automatically available for all customers; around 28 usage metrics; data queryable for 14 days.
- **Advanced Metrics and Recommendations** – paid; Activity, Advanced Cost Optimization, Advanced Data Protection, Status Code metrics; CloudWatch publishing; prefix aggregation; data queryable for 15 months.

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Analytics]]
- [[Other Services/Cost Management]]

Source slides: pp. 307-312.
