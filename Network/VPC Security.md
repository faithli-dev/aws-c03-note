# VPC Security and Network Protection

## Security Groups and NACLs

- Security Groups are instance or ENI-level, stateful, and allow rules only. Return traffic is automatically allowed.
- Network ACLs are subnet-level, stateless, and support allow and deny rules. Rules are evaluated from the lowest number; unmatched traffic is denied.
- NACLs must allow ephemeral return ports because the response port is chosen by the client.
- Use security group references between tiers: the database group can allow the application group rather than a broad CIDR.

![[SAA-v48-p721-sg-nacl.png]]

## Flow Logs and Inspection

- VPC, subnet, and ENI Flow Logs record accepted and rejected traffic and can be delivered to CloudWatch Logs, S3, or Firehose.
- Check source/destination addresses and ports, action, and interface ID when diagnosing SG or NACL problems.
- Query logs with Athena or CloudWatch Logs Insights.
- AWS Network Firewall provides managed Layer 3-7 inspection for VPC, Internet, VPN, Direct Connect, and inter-VPC traffic. It supports domain lists, IP/port rules, protocol rules, alert/drop actions, and logs.

![[SAA-v48-p739-vpc-flow-logs.png]]
![[SAA-v48-p773-network-firewall.png]]

Source slides: pp. 721-742 and 772-774.
