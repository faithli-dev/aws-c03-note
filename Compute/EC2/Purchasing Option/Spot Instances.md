• Can get a discount of up to 90% compared to On-demand 
• Instances that you can “lose” at any point of time if your max price is less than the current spot price 
• The MOST cost-efficient instances in AWS 
• Useful for workloads that are resilient to failure 
• Batch jobs • Data analysis • Image processing 
• Any distributed workloads 
• Workloads with a flexible start and end time 
• Not suitable for critical jobs or databases

• Define max spot price and get the instance while current spot price < max • The hourly spot price varies based on offer and capacity • If the current spot price > your max price you can choose to stop or terminate your instance with a 2 minutes grace period.

# Spot Instances Pricing
![[Pasted image 20260921110730.png]]
# Terminate Spot Instances
![[Pasted image 20260921110816.png]]
## You can only cancel Spot Instance requests that are open, active, or disabled. Cancelling a Spot Request does not terminate instances You must first cancel a Spot Request, and then terminate the associated Spot Instances


[[Spot Instances]]
