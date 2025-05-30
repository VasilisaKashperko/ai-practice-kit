# Expense Calculator

A modern web application for tracking and analyzing monthly expenses. This application helps users manage their expenses by providing key financial metrics and insights.

## Features

- Add and manage expenses with categories and amounts
- Real-time calculation of total expenses
- Average daily expense calculation based on the current month's days
- Top 3 largest expenses tracking
- Responsive design for both desktop and mobile devices
- Delete functionality for expense entries
- Keyboard support (Enter key to add expenses)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- No external dependencies required

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3.x (for running the local server)

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd expense_calculator
   ```

### Running the Application

#### Method 1: Using Python's built-in HTTP server

1. Open a terminal in the project directory
2. Run the following command:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

#### Method 2: Direct file opening

You can also open the `index.html` file directly in your web browser, but some features might not work due to browser security restrictions.

## How to Use

1. **Adding Expenses**
   - Enter the expense category (e.g., "Groceries", "Rent")
   - Enter the amount in dollars
   - Click "Add Expense" or press Enter

2. **Viewing Results**
   - Total Expenses: Shows the sum of all expenses
   - Average Daily Expense: Calculated based on the current month's days
   - Top 3 Expenses: Displays the three largest expenses

3. **Managing Expenses**
   - Use the "Delete" button to remove any expense
   - Results update automatically when adding or removing expenses

## Example Data

The application comes pre-loaded with sample data:
- Groceries: $15,000
- Rent: $40,000
- Transportation: $5,000
- Entertainment: $10,000
- Communication: $2,000
- Gym: $3,000

## Browser Support

The application works in all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License. 