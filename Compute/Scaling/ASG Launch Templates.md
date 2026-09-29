# ASG Launch Templates

A launch template defines what an Auto Scaling Group creates when it scales out. Older Launch Configurations are deprecated.

## What a Launch Template Contains

- AMI and instance type
- EC2 User Data
- EBS volumes
- Security groups
- SSH key pair
- IAM roles for the EC2 instances
- Network and subnet information
- Load balancer information
- Minimum size, maximum size, and initial capacity
- Scaling policies

![[SAA-v48-p154-asg-attributes.png]]

## Related

- [[Compute/Scaling/Auto Scaling Group]]
- [[Compute/EC2/EC2]]
- [[Compute/EC2/Amazon Machine Image (AMI)]]

Source slides: p. 154.
