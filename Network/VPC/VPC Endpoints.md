# VPC Endpoints

Every AWS service is publicly exposed through a public URL. VPC Endpoints, powered by AWS PrivateLink, connect to AWS services over a private network instead of the public internet.

## Characteristics

- Redundant and scale horizontally.
- Remove the need for an internet gateway or NAT gateway to access AWS services.
- Troubleshooting: check DNS setting resolution in your VPC and check route tables.

## Endpoint Types

### Interface Endpoints (powered by PrivateLink)

- Provisions an ENI (private IP address) as an entry point; must attach a security group.
- Supports most AWS services.
- Charged per hour plus per GB of data processed.

### Gateway Endpoints

- Provisions a gateway that must be used as a target in a route table; does not use security groups.
- Supports only S3 and DynamoDB.
- Free.

![[SAA-v48-p734-vpc-endpoint-types.png]]

## Gateway or Interface Endpoint for S3?

- Gateway is most likely preferred at the exam because it is free.
- Interface endpoints are preferred when access is required from on-premises (site-to-site VPN or Direct Connect), a different VPC, or a different Region.

## Lambda in VPC Accessing DynamoDB

- Option 1: access from the public internet, requiring a NAT gateway in a public subnet and an internet gateway.
- Option 2 (better and free): deploy a VPC gateway endpoint for DynamoDB and change the route tables.

## Related

- [[Network/VPC]]
- [[Network/Network Connectivity]]
- [[Serverless/Lambda in VPC]]

Source slides: pp. 732-736.
