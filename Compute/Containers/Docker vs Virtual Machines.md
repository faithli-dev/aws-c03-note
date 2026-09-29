# Docker vs Virtual Machines

Docker is "sort of" a virtualisation technology, but not exactly.

## Virtual Machines

- Infrastructure → Host OS → Hypervisor → multiple guest OS VMs, each running apps.
- Each VM carries a full guest OS, which is heavy.

## Docker

- Infrastructure → Host OS (for example an EC2 instance) → Docker daemon → containers.
- Resources are shared with the host, so many containers can run on one server.
- Containers are lightweight and portable.

![[SAA-v48-p418-docker-vs-vm.png]]

## Related

- [[Compute/Containers/Docker]]
- [[Compute/ECS]]

Source slides: p. 418.
