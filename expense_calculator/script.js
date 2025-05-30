// Array to store expenses
let expenses = [
    { category: "Groceries", amount: 15000 },
    { category: "Rent", amount: 40000 },
    { category: "Transportation", amount: 5000 },
    { category: "Entertainment", amount: 10000 },
    { category: "Communication", amount: 2000 },
    { category: "Gym", amount: 3000 }
];

// Function to get days in current month
function getDaysInCurrentMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

// Function to add a new expense
function addExpense() {
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');

    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (category && !isNaN(amount) && amount > 0) {
        expenses.push({ category, amount });
        updateExpensesTable();
        calculateResults();
        clearInputs();
    } else {
        alert('Please enter valid category and amount');
    }
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('category').value = '';
    document.getElementById('amount').value = '';
}

// Function to update the expenses table
function updateExpensesTable() {
    const tbody = document.getElementById('expensesList');
    tbody.innerHTML = '';

    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.category}</td>
            <td>$${expense.amount.toLocaleString()}</td>
            <td>
                <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpensesTable();
    calculateResults();
}

// Function to calculate and display results
function calculateResults() {
    if (expenses.length === 0) {
        document.getElementById('totalExpenses').textContent = '$0';
        document.getElementById('averageDaily').textContent = '$0';
        document.getElementById('topExpenses').innerHTML = '';
        return;
    }

    // Calculate total expenses
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('totalExpenses').textContent = `$${total.toLocaleString()}`;

    // Calculate average daily expense using actual days in current month
    const daysInMonth = getDaysInCurrentMonth();
    const averageDaily = total / daysInMonth;
    document.getElementById('averageDaily').textContent = 
        `$${averageDaily.toLocaleString()} (based on ${daysInMonth} days)`;

    // Get top 3 expenses
    const topExpenses = [...expenses]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3);

    const topExpensesList = document.getElementById('topExpenses');
    topExpensesList.innerHTML = '';

    topExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.category}: $${expense.amount.toLocaleString()}`;
        topExpensesList.appendChild(li);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for Enter key in input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addExpense();
            }
        });
    });

    // Initial setup
    updateExpensesTable();
    calculateResults();
}); 