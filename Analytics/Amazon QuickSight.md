# Amazon QuickSight

Serverless machine-learning-powered business intelligence service to create interactive dashboards.

## Characteristics

- Fast, automatically scalable, embeddable, with per-session pricing.
- In-memory computation using the SPICE engine when data is imported into QuickSight.
- Enterprise edition supports column-level security (CLS).

![[SAA-v48-p542-quicksight.png]]

## Use Cases

- Business analytics
- Building visualisations
- Ad-hoc analysis
- Getting business insights from data

## Integrations

- AWS services: RDS, Redshift, Athena, S3, OpenSearch, Aurora, Timestream.
- ELF and CLF log formats.
- SaaS data sources.
- On-premises databases over JDBC.

## Dashboards and Analysis

- Define users (standard version) and groups (enterprise version). These users and groups exist only within QuickSight, not IAM.
- A **dashboard** is a read-only snapshot of an analysis that you can share; it preserves the configuration of the analysis (filtering, parameters, controls, sort).
- Share the analysis or the dashboard with users or groups.
- To share a dashboard, you must first publish it.
- Users who see the dashboard can also see the underlying data.

## Related

- [[Analytics/Data and Analytics]]
- [[Analytics/Athena]]
- [[Database/Other Databases/Columnar Warehouse/Redshift]]

Source slides: pp. 542-544.
