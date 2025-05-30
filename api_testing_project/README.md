# API Testing Project: Fake Store API Validation

This project implements automated tests to validate data from the Fake Store API (https://fakestoreapi.com/products). The tests are designed to identify defects and anomalies in the product data.

## Project Overview

The project uses Python with the following tools:
- `requests` library for making API calls
- `pytest` for test execution and assertions
- Virtual environment for dependency management

## Test Objectives

The tests verify the following criteria:

1. API Response:
   - Server response code (expected 200)

2. Product Data Validation:
   - `title` (name) - must not be empty
   - `price` - must not be negative
   - `rating.rate` - must not exceed 5

## Project Structure

```
api_testing_project/
├── venv/                  # Virtual environment
├── requirements.txt       # Project dependencies
├── test_products_api.py   # Test implementation
└── README.md             # Project documentation
```

## Setup Instructions

1. Create and activate virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running Tests

To run the tests, execute:
```bash
python -m pytest test_products_api.py -v
```

The tests will:
- Verify the API response code
- Check all products for defects
- Print a list of any defective products found
- Fail if any defects are found

## Test Output

The test output includes:
- Test execution status (PASSED/FAILED)
- List of defective products (if any) with:
  - Product ID
  - Product Title
  - Specific defects found

## Dependencies

- Python 3.x
- requests==2.31.0
- pytest==7.4.3 