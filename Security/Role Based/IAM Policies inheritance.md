![[截圖 2026-09-19 下午3.15.31.png]]
## Union of Allows
Users may inherit both Allowed rules

## Explicit Deny Overrides Allow
Every permission from the previous group will be inherit but if other group contain a decorative Deny in the same action, let say GetS3Obejct. Although you have a Allow in the Audit group, but you will still Deny to GetS3Object.

## Implicit Deny
If a action didn't contain any Allow, in default it will be Deny