# EBS Delete on Termination

The delete-on-termination attribute controls what happens to an EBS volume when the EC2 instance terminates.

## Defaults

- The root EBS volume is **deleted** by default (attribute enabled).
- Any other attached EBS volume is **not deleted** by default (attribute disabled).

![[SAA-v48-p097-ebs-delete-on-termination.png]]

## Control

- Configurable from the AWS Console or AWS CLI.
- Use case: preserve the root volume when the instance is terminated.

## Related

- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]
- [[Compute/EC2/EC2]]

Source slides: p. 97.
