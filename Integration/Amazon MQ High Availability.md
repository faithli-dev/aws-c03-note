# Amazon MQ High Availability

## Behaviour

- Runs in a Region across two Availability Zones.
- One broker is ACTIVE and one is STANDBY.
- Storage is backed by Amazon EFS.
- Clients fail over to the standby broker automatically.

![[SAA-v48-p413-mq-high-availability.png]]

## Related

- [[Integration/Amazon MQ]]
- [[Integration/SQS]]
- [[Integration/SNS]]

Source slides: p. 413.
