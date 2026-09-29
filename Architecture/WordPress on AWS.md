# WordPress on AWS

A fully scalable WordPress website that displays picture uploads, with user data and blog content in a MySQL database.

## Progression

1. **RDS layer** – Multi-AZ RDS MySQL behind an Auto Scaling Group.
2. **Scaling with Aurora** – replace RDS with Aurora MySQL for easy Multi-AZ and read replicas.
3. **Storing images with EBS** – an EBS volume attached to one instance works for a single-instance application, but not across AZs.
4. **Storing images with EFS** – a shared EFS file system mounted across AZs through ENIs, so any instance can serve the images.

![[SAA-v48-p256-wordpress-efs.png]]

## Concepts Discussed

- Aurora database for easy Multi-AZ and read replicas
- Storing data in EBS (single instance application) vs EFS (distributed application)

## Related

- [[Architecture/Classic Solutions]]
- [[Database/RDS/Aurora]]
- [[Compute/Storage/Elastic File System (EFS)/Elastic File System (EFS)]]
- [[Compute/Storage/Elastic Block Store (EBS)/Elastic Block Store (EBS)]]

Source slides: pp. 251-257.
