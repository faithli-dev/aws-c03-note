# S3 Object Lambda

S3 Object Lambda uses AWS Lambda functions to change an object before it is retrieved by the caller application.

## Behaviour

- Only one S3 bucket is needed.
- Create S3 Access Points and S3 Object Lambda Access Points on top of it.

![[SAA-v48-p334-object-lambda.png]]

## Use Cases

- Redacting personally identifiable information for analytics or non-production environments.
- Converting across data formats, such as XML to JSON.
- Resizing and watermarking images on the fly using caller-specific details, such as the user who requested the object.

## Related

- [[Storage/S3/S3 Access Points]]
- [[Serverless/Lambda]]

Source slides: p. 334.
