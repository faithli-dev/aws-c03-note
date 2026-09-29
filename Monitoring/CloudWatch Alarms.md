# CloudWatch Alarms

Alarms trigger notifications for any metric.

## Options

- Various options: sampling, %, max, min.
- Alarm states: `OK`, `INSUFFICIENT_DATA`, `ALARM`.
- **Period** – length of time in seconds to evaluate the metric.
- High-resolution custom metrics: 10 sec, 30 sec, or multiples of 60 sec.

![[SAA-v48-p589-cloudwatch-alarms.png]]

## Alarm Targets

- Stop, terminate, reboot, or recover an EC2 instance
- Trigger an Auto Scaling action
- Send a notification to SNS (from which you can do almost anything)

## Composite Alarms

- CloudWatch alarms are on a single metric.
- Composite alarms monitor the states of multiple other alarms using AND and OR conditions.
- Helpful to reduce "alarm noise".

![[SAA-v48-p591-composite-alarms.png]]

## EC2 Instance Recovery

Status checks:

- **Instance status** – checks the EC2 VM.
- **System status** – checks the underlying hardware.
- **Attached EBS status** – checks attached EBS volumes.

Recovery keeps the same private IP, public IP, Elastic IP, metadata, and placement group.

![[SAA-v48-p592-ec2-instance-recovery.png]]

## Good to Know

- Alarms can be created based on CloudWatch Logs metric filters.
- Test alarms and notifications by setting the alarm state with the CLI:

```
aws cloudwatch set-alarm-state --alarm-name "myalarm" --state-value ALARM --state-reason "testing purposes"
```

## Network Synthetic Monitor

- Monitors and detects network issues between apps hosted on AWS and your on-premises data centre.
- Identifies network performance degradation such as packet loss, latency, and jitter.
- No agents required.
- Tests ICMP or TCP traffic to on-premises destinations through Direct Connect or site-to-site VPN.
- Publishes data to CloudWatch metrics.

## Related

- [[Monitoring/CloudWatch]]
- [[Monitoring/CloudWatch Metrics]]
- [[Compute/Scaling/Auto Scaling Group]]

Source slides: pp. 589-594.
