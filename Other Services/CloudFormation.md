# AWS CloudFormation

CloudFormation is infrastructure as code. A template declaratively describes AWS resources and their relationships; a stack creates and manages them as one unit.

- Templates can be stored in YAML or JSON and parameterized for different environments.
- Benefits include repeatability, version control, drift detection, dependency ordering, rollback, change sets, and consistent infrastructure.
- A service role lets CloudFormation create, update, and delete resources without granting every operator direct permissions.
- Nested stacks, exports, and StackSets help reuse patterns across environments and accounts.
- Infrastructure Composer visualizes resources and dependencies for a template.

![[SAA-v48-p825-cloudformation.png]]

Use CloudFormation to recreate a DR environment, standardize account resources, or remove manual configuration drift.

Source slides: pp. 824-829.
