# Software Updates Offloading

## Problem

An application running on EC2 distributes software updates occasionally. When a new update is released, many requests arrive and the content is distributed in mass over the network, which is costly. We do not want to change the application but want to optimise cost and CPU.

## Current State

An Auto Scaling Group across AZs 1 to 3 with an EFS file system storing the update files.

## Fix

Add CloudFront in front of the application.

![[SAA-v48-p511-software-updates-offload.png]]

## Why CloudFront Works

- No changes to the architecture.
- Caches software update files at the edge.
- Software update files are static and never change.
- The EC2 instances are not serverless, but CloudFront is and scales for us.
- The ASG will not scale as much, saving significantly on EC2.
- Saves on availability and network bandwidth cost.

## Related

- [[Serverless/Architectures]]
- [[Network/CloudFront]]
- [[Compute/Scaling/Auto Scaling Group]]

Source slides: pp. 509-512.
