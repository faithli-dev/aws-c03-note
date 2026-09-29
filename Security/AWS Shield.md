# AWS Shield

Protects from DDoS (Distributed Denial of Service) attacks, where many requests arrive at the same time.

## AWS Shield Standard

- Free service activated for every AWS customer.
- Provides protection from attacks such as SYN/UDP floods, reflection attacks, and other Layer 3 / Layer 4 attacks.

## AWS Shield Advanced

- Optional DDoS mitigation service ($3,000 per month per organisation).
- Protects against more sophisticated attacks on Amazon EC2, Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53.
- 24/7 access to the AWS DDoS Response Team (DRP).
- Protects against higher fees during usage spikes due to DDoS.
- Automatic application layer DDoS mitigation automatically creates, evaluates, and deploys AWS WAF rules to mitigate Layer 7 attacks.

![[SAA-v48-p685-shield.png]]

## Related

- [[Security/WAF and Shield]]
- [[Security/AWS WAF]]
- [[Security/AWS Firewall Manager]]

Source slides: p. 685.
