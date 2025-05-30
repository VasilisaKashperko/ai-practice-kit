# Sales Data Analysis

This project contains SQL queries to analyze sales data for an online store.

## Database Structure

The database consists of a single table `orders` with the following columns:
- `id`: INTEGER PRIMARY KEY
- `customer`: TEXT
- `amount`: REAL
- `order_date`: DATE

## Queries

The file `sales_analysis.sql` contains three main queries:

1. **Total Sales for March 2024**
   - Calculates the total sales volume for March 2024
   - Expected result: 27,000

2. **Top-Spending Customer**
   - Identifies the customer who spent the most overall
   - Expected result: Alice (20,000)

3. **Average Order Value**
   - Calculates the average order value for the last three months
   - Expected result: 6,000 (total sales / number of orders)

## How to Use

1. Open [SQLite Online](https://sqliteonline.com/)
2. Copy and paste the contents of `sales_analysis.sql`
3. Execute the queries to see the results

## Expected Results

- Total sales for March: 27,000
- Top-spending customer: Alice (20,000)
- Average order value: 6,000 