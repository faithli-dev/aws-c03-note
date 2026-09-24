# Amazon EKS

Amazon Elastic Kubernetes Service is AWS’s managed Kubernetes service. Kubernetes automates deployment, scaling, and management of containerized applications.

## Cluster Options

- EKS supports EC2 worker nodes when you need node-level control.
- EKS supports Fargate pods when you want serverless containers and no node maintenance.
- Managed node groups create and maintain EC2 nodes in an Auto Scaling Group. Self-managed nodes use an EKS-optimized AMI and an ASG managed by the customer.
- Deploy one cluster per Region when a multi-Region design is required.

![[SAA-v48-p435-eks-overview.png]]

## Storage and Operations

- Use the Container Storage Interface (CSI) drivers for EBS, EFS, FSx for Lustre, or FSx for NetApp ONTAP.
- EBS is useful for pod-attached block storage; EFS supports shared files and works with Fargate.
- CloudWatch Container Insights collects container metrics and logs.
- Choose EKS when Kubernetes compatibility, portability, or an existing Kubernetes operating model matters. Choose ECS when the AWS-native container API is simpler for the team.

Source slides: pp. 434-437.
