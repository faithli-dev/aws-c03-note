# AWS Management Console

The AWS Management Console is the browser-based interface for AWS. It is the primary way to explore services, run hands-on labs, and manage resources manually.

## Access

- Protected by password + MFA.
- The console URL is account-specific, for example `https://<account-id>.signin.aws.amazon.com/console`.
- The Region selector in the top bar controls which Region's resources are shown.

## Notes

- Console actions still call the public AWS APIs, so anything done in the console can also be done with the [[Connectivity/AWS Command Line Interface]] or [[Connectivity/AWS Software Developer Kit]].
- Global services such as IAM and Route 53 are not Region-scoped, so the Region selector has no effect on them.

## Related

- [[Connectivity/How to Access AWS]]
- [[Infrastructure/AWS Global Services]]

Source slides: p. 33.
