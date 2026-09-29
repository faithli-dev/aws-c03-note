# EC2 Purchasing Comparison

Choosing a purchasing option is a trade-off between price, commitment, and the risk of losing capacity.

## The Resort Analogy

- **On-Demand**: arriving and staying whenever you like, paying full price.
- **Reserved**: planning ahead; staying a long time earns a discount.
- **Savings Plans**: pay a set amount per hour for a period and stay in any room type.
- **Spot**: bid for empty rooms; the highest bidder keeps them, and you can be kicked out at any time.
- **Dedicated Hosts**: book an entire building of the resort.
- **Capacity Reservations**: book a room at full price even when you do not stay in it.

## Price Comparison (m4.large, us-east-1, illustrative)

| Price type | Price per hour |
|---|---|
| On-Demand | $0.10 |
| Spot Instance | $0.038 - $0.039 (up to 61% off) |
| Reserved Instance (1 year) | $0.062 (No Upfront) - $0.058 (All Upfront) |
| Reserved Instance (3 years) | $0.043 (No Upfront) - $0.037 (All Upfront) |
| EC2 Savings Plan (1 year) | $0.062 (No Upfront) - $0.058 (All Upfront) |
| Convertible Reserved Instance (1 year) | $0.071 (No Upfront) - $0.066 (All Upfront) |
| Dedicated Host | On-Demand price; reservation up to 70% off |
| Capacity Reservations | On-Demand price |

![[SAA-v48-p073-ec2-price-comparison.png]]

## Exam Note

Discount percentages change over time and exact numbers are not required for the exam. Know which option fits which workload instead.

## Related

- [[Compute/EC2/Purchasing Option/Purchasing Options]]
- [[Compute/EC2/Purchasing Option/On-Demand Instances]]
- [[Compute/EC2/Purchasing Option/Reserved Instances]]
- [[Compute/EC2/Purchasing Option/Savings Plans (1 & 3 years)]]
- [[Compute/EC2/Purchasing Option/Spot Instances]]
- [[Compute/EC2/Purchasing Option/Dedicated Hosts]]
- [[Compute/EC2/Purchasing Option/Dedicated Instances]]
- [[Compute/EC2/Purchasing Option/Capacity Reservations]]

Source slides: pp. 64-73.
