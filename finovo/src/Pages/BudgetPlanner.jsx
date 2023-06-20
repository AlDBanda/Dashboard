import React, { useState } from 'react';


const BudgetPlanner = () => {
  const [income, setIncome] = useState(0);
  const [housing, setHousing] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [groceries, setGroceries] = useState(0);
  const [media, setMedia] = useState(0);
  const [debtRepayment, setDebtRepayment] = useState(0);
  const [otherEssentials, setOtherEssentials] = useState(0);
  const [lifestyleCosts, setLifestyleCosts] = useState(0);
  const [savings, setSavings] = useState(0);

  const calculateTotalOutgoings = () => {
    return (
      housing +
      insurance +
      groceries +
      media +
      debtRepayment +
      otherEssentials +
      lifestyleCosts
    );
  };

  const calculateMoneyLeftover = () => {
    return income - calculateTotalOutgoings();
  };

  const calculatePercentage = (amount, total) => {
    return ((amount / total) * 100).toFixed(2);
  };

  const calculateEssentialSpendPercentage = () => {
    const essentials = housing + insurance + groceries;
    return calculatePercentage(essentials, income);
  };

  const calculateNonEssentialSpendPercentage = () => {
    const nonEssentials = media + lifestyleCosts;
    return calculatePercentage(nonEssentials, income);
  };

  const calculateSavingsPercentage = () => {
    const savingsPercentage = savings + debtRepayment;
    return calculatePercentage(savingsPercentage, income);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Budget Planner</h2>

      <div className="mb-4">
        <label className="block font-bold mb-2">Income after tax:</label>
        <input
          type="number"
          className="w-full px-4 py-2 rounded-lg border focus:outline-none"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
        />
      </div>

      <h3 className="text-lg font-bold mb-2">Expenses</h3>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-bold mb-2">Housing:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={housing}
            onChange={(e) => setHousing(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Insurance:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={insurance}
            onChange={(e) => setInsurance(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Groceries:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={groceries}
            onChange={(e) => setGroceries(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Media and Entertainment:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={media}
            onChange={(e) => setMedia(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Debt Repayment:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={debtRepayment}
            onChange={(e) => setDebtRepayment(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Other Essentials:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={otherEssentials}
            onChange={(e) => setOtherEssentials(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Lifestyle Costs:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={lifestyleCosts}
            onChange={(e) => setLifestyleCosts(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Savings:</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-lg border focus:outline-none"
            value={savings}
            onChange={(e) => setSavings(parseFloat(e.target.value))}
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Summary</h3>
        <p>Total Income: £{income}</p>
        <p>Total Outgoings: £{calculateTotalOutgoings()}</p>
        <p>Money Leftover: £{calculateMoneyLeftover()}</p>
        <p>Essential Spend: {calculateEssentialSpendPercentage()}%</p>
        <p>Non-Essential Spend: {calculateNonEssentialSpendPercentage()}%</p>
        <p>Savings: {calculateSavingsPercentage()}%</p>
      </div>
    </div>
  );
};



export default BudgetPlanner;
