# Elastic Beanstalk Web vs Worker Tier

## Web Server Environment Tier

- Runs an Auto Scaling Group of web server instances behind an ELB.
- Accessible at `myapp.us-east-1.elasticbeanstalk.com`.
- Serves HTTP requests.

## Worker Environment Tier

- Runs an Auto Scaling Group of worker instances.
- Scales based on the number of SQS messages.
- Pulls messages from an SQS queue.
- Can receive messages pushed to the queue from the web server tier.

![[SAA-v48-p265-eb-web-vs-worker.png]]

## Related

- [[Compute/Elastic Beanstalk]]
- [[Compute/Elastic Beanstalk Components]]
- [[Integration/SQS]]

Source slides: p. 265.
