
# Scaling

• Scalability means that an application / system can handle greater loads

by adapting.

• There are two kinds of scalability:

• [[Vertical Scalability]]

• [[Horizontal Scalability]] (= elasticity)

• Scalability is linked but different to High Availability

• Let’s deep dive into the distinction, using a call center as an example

# Availability

High Availability usually goes hand in hand with horizontal scaling

• High availability means running your application / system in at least 2 data centers (== Availability Zones)

• The goal of high availability is to survive a data center loss

second building in San Francisco

• The high availability can be passive (for RDS Multi AZ for example)

• The high availability can be active (for horizontal scaling)

![[Pasted image 20260922152012.png|257]]

# For EC2

## Vertical Scaling: Increase instance size (= scale up / down)
• From: t2.nano - 0.5G of RAM, 1 vCPU
• To: u-12tb1.metal – 12.3 TB of RAM, 448 vCPUs
## Horizontal Scaling: Increase number of instances (= scale out / in)
• Auto Scaling Group
• Load Balancer
## High Availability: Run instances for the same application across multi AZ
• Auto Scaling Group multi AZ
• Load Balancer multi AZ