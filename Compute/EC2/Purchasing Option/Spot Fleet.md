• Spot Fleets = set of Spot Instances + (optional) On-Demand Instances 
• The Spot Fleet will try to meet the target capacity with price constraints 
• Define possible launch pools: instance type (m5.large), OS, Availability Zone 
• Can have multiple launch pools, so that the fleet can choose 
• Spot Fleet stops launching instances when reaching capacity or max cost 
• Strategies to allocate Spot Instances: 
• lowestPrice: from the pool with the lowest price (cost optimization, short workload) 
• diversified: distributed across all pools (great for availability, long workloads) 
• capacityOptimized: pool with the optimal capacity for the number of instances 
• priceCapacityOptimized (recommended): pools with highest capacity available, then select the pool with the lowest price (best choice for most workloads) 
• Spot Fleets allow us to automatically request Spot Instances with the lowest price