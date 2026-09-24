![[Pasted image 20260921114441.png|381]]

• Logical component in a VPC that represents a virtual network card 
• The ENI can have the following attributes: 
• Primary private IPv4, one or more secondary IPv4 
• One Elastic IP (IPv4) per private IPv4 
• One Public IPv4 
• One or more security groups 
• A MAC address
• You can create ENI independently and attach them on the fly (move them) on EC2 instances for failover 
• Bound to a specific availability zone (AZ)