# ASG Scaling Cooldowns

After a scaling activity, the Auto Scaling Group enters a cooldown period (default 300 seconds).

## Behaviour

- During cooldown the ASG does not launch or terminate additional instances, allowing metrics to stabilise.
- Advice: use a ready-to-use AMI to reduce configuration time, so instances serve requests faster and the cooldown period can be reduced.

![[SAA-v48-p159-scaling-cooldowns.png]]

## Related

- [[Compute/Scaling/Auto Scaling Group]]
- [[Compute/Scaling/ASG Scaling Policies]]

Source slides: p. 159.
