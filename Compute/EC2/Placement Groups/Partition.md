![[Pasted image 20260921114036.png]]
• Up to 7 partitions per AZ • Can span across multiple AZs in the same region 
• Up to 100s of EC2 instances 
• The instances in a partition do not share racks with the instances in the other partitions 
• A partition failure can affect many EC2 but won’t affect other partitions 
• EC2 instances get access to the partition information as metadata • Use cases: HDFS, HBase, Cassandra, Kafka