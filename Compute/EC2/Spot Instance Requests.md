# EC2 Spot Instance Requests

A Spot Instance request defines the maximum price you are willing to pay. The instance runs while the current Spot price is below your max price.

## How It Works

- Discount of up to 90% compared to On-Demand.
- You define a max Spot price and get the instance while the current Spot price < your max.
- The hourly Spot price varies based on offer and capacity.
- If the current Spot price exceeds your max, you can choose to **stop** or **terminate** the instance, with a 2-minute grace period.

![[SAA-v48-p074-spot-instance-requests.png]]

## Terminating Spot Instances

- You can only cancel Spot Instance requests that are open, active, or disabled.
- Cancelling a Spot Request does **not** terminate instances.
- You must first cancel the Spot Request, then terminate the associated Spot Instances.

## When to Use

- Batch jobs
- Data analysis
- Image processing
- Distributed and flexible workloads

Not suitable for critical jobs or databases.

## Related

- [[Compute/EC2/Purchasing Option/Spot Instances]]
- [[Compute/EC2/Purchasing Option/Spot Fleet]]
- [[Compute/EC2/Purchasing Option/Purchasing Options]]

Source slides: pp. 74-76.
