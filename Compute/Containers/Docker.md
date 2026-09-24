# Docker

Docker packages an application and its dependencies into a portable image. A container runs the image while sharing the host operating system kernel, so multiple containers can run on one host with less overhead than virtual machines.

## Image Flow

- A Dockerfile defines the build instructions.
- Building produces an image. Running the image creates a container.
- Images are stored in repositories such as Docker Hub or Amazon ECR.
- ECR supports private repositories and the public ECR Gallery, IAM access control, image tags, versioning, lifecycle policies, and vulnerability scanning.

![[SAA-v48-p419-docker-flow.png]]
![[SAA-v48-p433-ecr.png]]

Containers are useful for microservices, repeatable deployments, and lifting an existing application into AWS. Use ECS or EKS to schedule containers, and Fargate when the container runtime should be serverless.

Source slides: pp. 414-420 and 433.
