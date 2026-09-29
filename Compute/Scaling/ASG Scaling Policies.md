# ASG Scaling Policies

Auto Scaling Groups can scale using several policy types.

## Dynamic Scaling

- **Target Tracking Scaling** – simplest to set up. Example: keep the average ASG CPU at around 40%.
- **Simple / Step Scaling** – reacts to a CloudWatch alarm. Example: when CPU > 70% add 2 units; when CPU < 30% remove 1 unit.

## Scheduled Scaling

- Anticipates scaling based on known usage patterns.
- Example: increase minimum capacity to 10 at 5 pm on Fridays.

## Predictive Scaling

- Continuously forecasts load and schedules scaling ahead of time.

## CloudWatch Alarms

- An alarm monitors a metric such as average CPU or a custom metric.
- Metrics such as average CPU are computed across all ASG instances.
- The alarm triggers scale-out or scale-in policies.

![[SAA-v48-p155-cloudwatch-alarms-scaling.png]]

## Related

- [[Compute/Scaling/Auto Scaling Group]]
- [[Compute/Scaling/ASG Scaling Cooldowns]]
- [[Compute/Scaling/Good Metrics to Scale On]]
- [[Monitoring/CloudWatch]]

Source slides: pp. 155-157.
