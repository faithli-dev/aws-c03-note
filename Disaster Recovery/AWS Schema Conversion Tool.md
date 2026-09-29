# AWS Schema Conversion Tool (SCT)

Convert your database schema from one engine to another.

## Examples

- **OLTP** – SQL Server or Oracle to MySQL, PostgreSQL, Aurora.
- **OLAP** – Teradata or Oracle to Amazon Redshift.

## Notes

- Prefer compute-intensive instances to optimise data conversions.
- You do not need SCT if you are migrating the same DB engine, for example on-premises PostgreSQL to RDS PostgreSQL, because the engine is still PostgreSQL and RDS is only the platform.

## Combined with DMS

DMS + SCT migrates a source DB to a target DB with a different engine. SCT converts the schema; DMS migrates the data, including full load plus CDC.

## Related

- [[Disaster Recovery/Database Migration Service]]
- [[Disaster Recovery/Migrations]]

Source slides: pp. 788-789.
