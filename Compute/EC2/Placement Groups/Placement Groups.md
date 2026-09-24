
• Sometimes you want control over the EC2 Instance placement strategy 
• That strategy can be defined using placement groups 
• When you create a placement group, you specify one of the following strategies for the group: 
	• [[Cluster]]—clusters instances into a low-latency group in a single Availability Zone 
	• [[Spread]]—spreads instances across underlying hardware (max 7 instances per group per AZ) 
	• [[Partition]]—spreads instances across many different partitions (which rely on different sets of racks) within an AZ. Scales to 100s of EC2 instances per group (Hadoop, Cassandra, Kafka)