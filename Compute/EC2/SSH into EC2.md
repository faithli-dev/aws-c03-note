# SSH into EC2

SSH lets you control a remote Linux machine from the command line. It is the standard way to administer EC2 instances, and the exam expects you to know the available options.

## SSH Summary

| Client | Method |
|---|---|
| Mac / Linux | SSH (OpenSSH) |
| Windows < 10 | PuTTY |
| Windows >= 10 | SSH built into the OS |
| Any browser | EC2 Instance Connect |

![[SAA-v48-p063-ec2-instance-connect.png]]

## Prerequisites

- The instance must have a public IP (or be reachable through a bastion / VPN).
- Port 22 must be allowed by the security group.
- The key pair `.pem` file must have the correct permissions (`chmod 400`).

## EC2 Instance Connect

- Connect to your EC2 instance from the browser.
- No need to use the downloaded key file: AWS uploads a temporary key to the instance.
- Works out of the box only with Amazon Linux 2.
- Port 22 must still be open.

## Troubleshooting

- If SSH times out, it is usually a security group or network issue.
- If you get `connection refused`, the instance or service is not running.
- If one method works (SSH, PuTTY, or EC2 Instance Connect), the setup is fine.

## Related

- [[Compute/EC2/EC2]]
- [[Compute/EC2/Classic Ports to Know]]
- [[Network/VPC/Bastion Hosts]]

Source slides: pp. 58-63.
