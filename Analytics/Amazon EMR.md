# Amazon EMR

EMR stands for Elastic MapReduce.

## Characteristics

- Creates Hadoop clusters (big data) to analyse and process vast amounts of data.
- Clusters can be made of hundreds of EC2 instances.
- Bundled with Apache Spark, HBase, Presto, and Flink.
- EMR handles all provisioning and configuration.
- Auto-scaling and integration with Spot Instances.

![[SAA-v48-p540-emr.png]]

## Node Types

- **Master Node** – manages the cluster, coordinates, and manages health; long running.
- **Core Node** – runs tasks and stores data; long running.
- **Task Node (optional)** – only runs tasks; usually Spot.

![[SAA-v48-p541-emr-node-types.png]]

## Purchasing Options

- **On-Demand** – reliable, predictable, will not be terminated.
- **Reserved (minimum 1 year)** – cost savings; EMR automatically uses reserved capacity if available.
- **Spot Instances** – cheaper, can be terminated, less reliable.

## Cluster Lifetimes

- Long-running cluster
- Transient (temporary) cluster

## Use Cases

Data processing, machine learning, web indexing, big data.

## Related

- [[Analytics/Data and Analytics]]
- [[Compute/EC2/Purchasing Option/Spot Instances]]

Source slides: pp. 540-541.
