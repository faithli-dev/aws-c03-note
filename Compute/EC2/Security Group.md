Deeper Dive • Security groups are acting as a “firewall” on EC2 instances

Access to Ports
Authories IP ranges - IPv4 and IPv6
Control inbound network
Control outbound network

![[Pasted image 20260920160430.png]]
![[Pasted image 20260920160444.png]]

• Security Groups are the fundamental of network security in AWS
• They control how traffic is allowed into or out of our EC2 Instances.
![[Pasted image 20260920160229.png]]• Security groups only contain rules
• Security groups rules can reference by IP or by security group

# Must Know

• Can be attached to multiple instances
• Locked down to a region / VPC combination
• Does live “outside” the EC2 – if traffic is blocked the EC2 instance won’t see it
• It’s good to maintain one separate security group for SSH access
• If your application is not accessible (time out), then it’s a security group issue
• If your application gives a “connection refused“ error, then it’s an application
error or it’s not launched
• All inbound traffic is blocked by default
• All outbound traffic is authorised by default

# Always Use Ports

• 22 = SSH (Secure Shell) - log into a Linux instance
• 21 = FTP (File Transfer Protocol) – upload files into a file share
• 22 = SFTP (Secure File Transfer Protocol) – upload files using SSH
• 80 = HTTP – access unsecured websites
• 443 = HTTPS – access secured websites
• 3389 = RDP (Remote Desktop Protocol) – log into a Windows instance