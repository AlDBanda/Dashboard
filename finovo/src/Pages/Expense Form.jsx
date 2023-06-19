import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('transport');
  const [expenses, setExpenses] = useState({
    transport: [],
    leisure: [],
    family: [],
    groceries: [],
    bills: [],
    gifts: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [selectedCategory]: [...prevExpenses[selectedCategory], newExpense],
    }));

    setExpenseName('');
    setExpenseAmount('');
  };

  const getTotalExpense = (category) => {
    return expenses[category].reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Expense Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="expenseName">
            Expense Name
          </label>
          <input
            type="text"
            id="expenseName"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            placeholder="Enter expense name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="expenseAmount">
            Expense Amount
          </label>
          <input
            type="number"
            id="expenseAmount"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            placeholder="Enter expense amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="expenseCategory">
            Expense Category
          </label>
          <select
            id="expenseCategory"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="transport">Transport</option>
            <option value="leisure">Leisure</option>
            <option value="family">Family</option>
            <option value="groceries">Groceries</option>
            <option value="bills">Bills</option>
            <option value="gifts">Gifts</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Expense
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Expense Summary</h3>
        <ul className="mt-4">
          <li>Transport: £{getTotalExpense('transport')}</li>
          <li>Leisure: £{getTotalExpense('leisure')}</li>
          <li>Family: £{getTotalExpense('family')}</li>
          <li>Groceries: £{getTotalExpense('groceries')}</li>
          <li>Bills: £{getTotalExpense('bills')}</li>
          <li>Gifts: £{getTotalExpense('gifts')}</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseForm;
