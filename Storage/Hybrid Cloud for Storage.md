# Hybrid Cloud for Storage

AWS supports hybrid cloud: part of your infrastructure is in the cloud and part is on-premises. Reasons include long cloud migrations, security requirements, compliance requirements, and IT strategy.

## The Problem

S3 is a proprietary storage technology (unlike EFS / NFS), so how do you expose S3 data on-premises? Use AWS Storage Gateway.

## Cloud-Native Storage Options

- **Block** – Amazon EBS, EC2 Instance Store
- **File** – Amazon EFS, Amazon FSx
- **Object** – Amazon S3, Amazon Glacier

![[SAA-v48-p368-storage-gateway-deployment.png]]

## Related

- [[Storage/Storage Gateway]]
- [[Storage/Storage Comparison]]

Source slides: pp. 362-363.
