- Network load balancers (Layer 4) allow to:
	- Forward TCP & UDP traffic to your instances
	- Handle millions of request per seconds
	- Ultra-low latency
- NLB has one static IP per AZ, and supports assigning Elastic IP (helpful for whitelisting specific IP)
- NLB are used for extreme performance, TCP or UDP traffic
![[Pasted image 20260922154648.png]]
# Target Groups

- EC2 instances
- IP Addresses – must be private IPs
- Application Load Balancer
- Health Checks support the TCP, HTTP and HTTPS Protocols
![[Pasted image 20260922154711.png]]