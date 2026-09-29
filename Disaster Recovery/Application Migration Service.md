# AWS Application Migration Service (MGN)

The AWS evolution of CloudEndure Migration, replacing AWS Server Migration Service (SMS).

## Purpose

- A lift-and-shift (rehost) solution that simplifies migrating applications to AWS.
- Converts physical, virtual, and cloud-based servers to run natively on AWS.
- Supports a wide range of platforms, operating systems, and databases.
- Minimal downtime and reduced costs.

## How It Works

- An AWS replication agent runs in the source environment.
- Continuous replication into a staging area with low-cost EC2 instances and EBS volumes.
- On cutover, target EC2 instances and EBS volumes are launched.

![[SAA-v48-p799-mgn.png]]

## Related

- [[Disaster Recovery/Migrations]]
- [[Disaster Recovery/AWS Elastic Disaster Recovery]]

Source slides: p. 799.
