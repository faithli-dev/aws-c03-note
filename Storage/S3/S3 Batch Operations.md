# S3 Batch Operations

Perform bulk operations on existing S3 objects with a single request.

## Example Actions

- Modify object metadata and properties
- Copy objects between S3 buckets
- Encrypt unencrypted objects
- Modify ACLs and tags
- Restore objects from S3 Glacier
- Invoke a Lambda function to perform a custom action on each object

## Job Structure

A job consists of a list of objects, the action to perform, and optional parameters. S3 Batch Operations manages retries, tracks progress, sends completion notifications, and generates reports.

![[SAA-v48-p306-batch-operations.png]]

## Workflow

Use S3 Inventory to get the object list, and Athena to query and filter objects.

## Related

- [[Storage/S3/S3]]
- [[Storage/S3/S3 Replication]]
- [[Storage/S3/S3 Performance]]

Source slides: p. 306.
