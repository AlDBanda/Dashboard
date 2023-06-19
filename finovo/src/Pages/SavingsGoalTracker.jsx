import React, { useState } from 'react';

const SavingsGoalTracker = () => {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [savings, setSavings] = useState([]);

  const handleAddGoal = () => {
    if (goalName && goalAmount) {
      const newGoal = {
        name: goalName,
        amount: parseFloat(goalAmount),
        saved: 0,
      };

      setSavings((prevSavings) => [...prevSavings, newGoal]);
      setGoalName('');
      setGoalAmount('');
    }
  };

  const handleSaveAmount = (index, amount) => {
    setSavings((prevSavings) => {
      const updatedSavings = [...prevSavings];
      updatedSavings[index].saved += amount;
      return updatedSavings;
    });
  };

  const calculateTotalSaved = () => {
    return savings.reduce((total, goal) => total + goal.saved, 0);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Savings Goal Tracker</h2>

      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          placeholder="Goal name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          placeholder="Goal amount"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
        />
      </div>

      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={handleAddGoal}
      >
        Add Goal
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Savings Goals</h3>
        {savings.map((goal, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg mt-4"
          >
            <div>
              <p className="font-bold">{goal.name}</p>
              <p>Goal amount: ${goal.amount}</p>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                className="w-20 px-2 py-1 rounded-lg border focus:outline-none"
                placeholder="Amount"
                min={0}
                max={goal.amount - goal.saved}
                onChange={(e) => handleSaveAmount(index, parseFloat(e.target.value))}
              />
              <button
                className="ml-2 bg-green-500 text-white py-1 px-2 rounded-lg hover:bg-green-600 focus:outline-none"
                onClick={() => handleSaveAmount(index, goal.amount - goal.saved)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-lg font-bold">Total Saved: £{calculateTotalSaved()}</p>
      </div>
    </div>
  );
};

export default SavingsGoalTracker;
