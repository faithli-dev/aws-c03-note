# Classic Ports to Know

Security groups and NACLs control traffic by port. These ports appear constantly in exam scenarios.

## Ports

| Port | Protocol | Use |
|---|---|---|
| 22 | SSH | Log into a Linux instance |
| 22 | SFTP | Upload files using SSH |
| 21 | FTP | Upload files into a file share |
| 80 | HTTP | Access unsecured websites |
| 443 | HTTPS | Access secured websites |
| 3389 | RDP | Log into a Windows instance |

![[SAA-v48-p057-classic-ports.png]]

## Exam Tip

- Linux instances use SSH on port 22.
- Windows instances use RDP on port 3389.
- A load balancer listener uses 80/443 for HTTP/HTTPS.

## Related

- [[Compute/EC2/Security Group]]
- [[Network/VPC Security]]
- [[Local Balancing/Load balancing]]

Source slides: p. 57.
