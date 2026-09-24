# Amazon ECR

Amazon Elastic Container Registry stores and manages Docker and OCI images for AWS workloads.

- Private repositories are protected with IAM and repository policies.
- ECR integrates directly with ECS, EKS, and CodeBuild.
- Use immutable tags or digest references when deployments must be reproducible.
- Enable image scanning and lifecycle policies to identify vulnerabilities and remove old images.
- ECR stores image layers durably in AWS-managed storage; the task or node still needs permission to pull the image.

Source slides: p. 433.
