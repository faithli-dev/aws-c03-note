# Choosing the Right Database

AWS has many managed databases. Choose based on the architecture and access patterns.

## Questions to Ask

- Read-heavy, write-heavy, or balanced workload? Throughput needs? Will it change, scale, or fluctuate during the day?
- How much data to store and for how long? Will it grow? Average object size? How is it accessed?
- Data durability? Is it the source of truth?
- Latency requirements? Concurrent users?
- Data model? How will you query the data? Joins? Structured? Semi-structured?
- Strong schema? More flexibility? Reporting? Search? RDBMS or NoSQL?
- License costs? Switch to a cloud-native database such as Aurora?

## Database Types

- **RDBMS (SQL / OLTP)** – RDS, Aurora; great for joins.
- **NoSQL** – DynamoDB (JSON), ElastiCache (key/value), Neptune (graphs), DocumentDB (MongoDB), Keyspaces (Apache Cassandra).
- **Object store** – S3 (big objects), Glacier (backups and archives).
- **Data warehouse (SQL analytics / BI)** – Redshift (OLAP), Athena, EMR.
- **Search** – OpenSearch (JSON); free-text, unstructured searches.
- **Graphs** – Amazon Neptune; displays relationships between data.
- **Ledger** – Amazon Quantum Ledger Database.
- **Time series** – Amazon Timestream.

![[SAA-v48-p515-database-types.png]]

## Related

- [[Database/Databases]]
- [[Database/Other Databases]]
- [[Analytics/Data and Analytics]]

Source slides: pp. 513-515.
