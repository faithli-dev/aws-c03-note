# S3 Analytics (Storage Class Analysis)

Helps you decide when to transition objects to the right storage class.

## Behaviour

- Recommendations for Standard and Standard IA.
- Does **not** work for One-Zone IA or Glacier.
- Report is updated daily.
- Takes 24 to 48 hours to start seeing data analysis.
- A good first step to put together lifecycle rules or improve them.

## Output

A `.csv` report with fields such as date, storage class, and object age.

## Related

- [[Storage/S3/S3 Lifecycle Rules]]
- [[Storage/S3/S3 Storage Classes]]
- [[Storage/S3/S3 Storage Lens]]

Source slides: p. 298.
