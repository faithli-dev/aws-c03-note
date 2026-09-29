# Highly Available EC2 Instance

## With an Elastic IP

- A public EC2 instance holds an Elastic IP.
- A CloudWatch event or alarm monitors the instance.
- On failure, start a standby EC2 instance and attach the Elastic IP.

![[SAA-v48-p821-ha-ec2-elastic-ip.png]]

## With an Auto Scaling Group

- An Auto Scaling Group with minimum 1, maximum 1, desired 1 across at least 2 AZs.
- EC2 User Data attaches the Elastic IP based on a tag.
- The EC2 instance role allows the API calls needed to attach the Elastic IP.

## With an Auto Scaling Group and EBS

- An EBS volume with a snapshot and tags.
- On the ASG launch lifecycle hook, an EBS volume is created and attached.
- On the ASG terminate lifecycle hook, an EBS snapshot is taken.

![[SAA-v48-p823-ha-ec2-asg-ebs.png]]

## Related

- [[Architecture/More Solutions Architecture]]
- [[Compute/Scaling/Auto Scaling Group]]
- [[Network/Public/Elastic IP]]

Source slides: pp. 821-823.
