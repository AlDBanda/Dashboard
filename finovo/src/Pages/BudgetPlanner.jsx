import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const BudgetPlanner = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransactionName, setNewTransactionName] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');

  const handleAddTransaction = () => {
    if (newTransactionName !== '' && newTransactionAmount !== '') {
      const newTransaction = {
        name: newTransactionName,
        amount: parseFloat(newTransactionAmount),
      };

      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);

      setNewTransactionName('');
      setNewTransactionAmount('');
    }
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  const calculateTotal = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const calculateRemainingBudget = () => {
    const totalSpent = calculateTotal();
    return totalSpent.toFixed(2);
  };

  const calculateBudgetLimit = () => {
    const budgetLimit = 5000; // Set your budget limit here
    const remainingBudget = budgetLimit - calculateTotal();
    return remainingBudget.toFixed(2);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Budget Planner</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="w-1/2 px-4 py-2 mr-2 rounded-lg border focus:outline-none"
          placeholder="Enter transaction name"
          value={newTransactionName}
          onChange={(e) => setNewTransactionName(e.target.value)}
        />
        <input
          type="number"
          className="w-1/2 px-4 py-2 ml-2 rounded-lg border focus:outline-none"
          placeholder="Enter transaction amount"
          value={newTransactionAmount}
          onChange={(e) => setNewTransactionAmount(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTransaction}
        >
          <FaPlus />
        </button>
      </div>

      <ul className="space-y-2">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
          >
            <span>{transaction.name}</span>
            <span>${transaction.amount}</span>
            <button
              className="text-red-500 hover:text-red-600 focus:outline-none"
              onClick={() => handleDeleteTransaction(index)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <p className="text-lg font-bold">Total: £{calculateTotal()}</p>
        <p className="text-lg font-bold">Remaining Budget: £{calculateBudgetLimit()}</p>
      </div>
    </div>
  );
};

export default BudgetPlanner;
