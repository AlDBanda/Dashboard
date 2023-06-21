import React, { useState } from 'react';
import { FaFileInvoice, FaReceipt, FaRegCalendarMinus } from 'react-icons/fa';
import { FigureProvider } from './FigureContext';

const Main2 = () => {
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);
  const [monthlyOutgoings, setMonthlyOutgoings] = useState(0);
  const [housing, setHousing] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [groceries, setGroceries] = useState(0);
  const [media, setMedia] = useState(0);
  const [debtRepayment, setDebtRepayment] = useState(0);
  const [otherEssentials, setOtherEssentials] = useState(0);
  const [lifestyleCosts, setLifestyleCosts] = useState(0);
  const [savings, setSavings] = useState(0);

  const handleMonthlyEarningsChange = (e) => {
    setMonthlyEarnings(Number(e.target.value));
  };

  const handleMonthlyOutgoingsChange = (e) => {
    setMonthlyOutgoings(Number(e.target.value));
  };

  const annualEarnings = monthlyEarnings * 12;

  const calculateTotalOutgoings = () => {
    const totalOutgoings =
      housing + insurance + groceries + media + debtRepayment + otherEssentials + lifestyleCosts + savings;
    return totalOutgoings.toFixed(2);
  };

  const calculateMoneyLeftover = () => {
    const moneyLeftover = monthlyEarnings - monthlyOutgoings;
    return moneyLeftover.toFixed(2);
  };

  const calculateEssentialSpendPercentage = () => {
    const essentialSpendPercentage = ((housing + insurance + groceries) / monthlyEarnings) * 100;
    return essentialSpendPercentage.toFixed(2);
  };

  const calculateNonEssentialSpendPercentage = () => {
    const nonEssentialSpendPercentage =
      ((media + debtRepayment + otherEssentials + lifestyleCosts) / monthlyEarnings) * 100;
    return nonEssentialSpendPercentage.toFixed(2);
  };

  const calculateSavingsPercentage = () => {
    const savingsPercentage = (savings / monthlyEarnings) * 100;
    return savingsPercentage.toFixed(2);
  };

  return (
    <FigureProvider>
      <div className='pt-25px px-25px bg-[#F8F9FC]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[#5a5c69] text-28px leading-34px font-normal cursor-pointer'>User Dashboard</h1>
        </div>

        <div className='grid grid-cols-4 gap-30px mt-25px pb-15px'>
          <div className='h-100px rounded-8px bg-white border-4px border-[#4E73DF] flex items-center justify-between px-30px cursor-pointer hover:shadow-lg transform hover:scale-103% transition duration-300'>
            <div>
              <h2 className='text-[#B589DF] text-11px leading-17px font-bold'>EARNINGS (MONTHLY)</h2>
              <input
                type='number'
                className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                value={monthlyEarnings}
                onChange={handleMonthlyEarningsChange}
              />
              <h1 className='text-20px leading-24px font-bold text-[#5a5c69] mt-5px'>£{monthlyEarnings}</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color='blue' />
          </div>


          <div className='h-100px rounded-8px bg-white border-4px border-[#4E73DF] flex items-center justify-between px-30px cursor-pointer hover:shadow-lg transform hover:scale-103% transition duration-300'>
            <div>
              <h2 className='text-[#B589DF] text-11px leading-17px font-bold'>EARNINGS (ANNUAL)</h2>
              <h1 className='text-20px leading-24px font-bold text-[#5a5c69] mt-5px'>£{annualEarnings}</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color='blue' />
          </div>



          <div className='h-100px rounded-8px bg-white border-4px border-4E73DF flex items-center justify-between px-30px cursor-pointer hover:shadow-lg transform hover:scale-103% transition duration-300'>
            <div>
              <h2 className='text-[#B589DF] text-11px leading-17px font-bold'>OUTGOINGS (MONTHLY)</h2>
              <input
                type='number'
                className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                value={monthlyOutgoings}
                onChange={handleMonthlyOutgoingsChange}
              />
              <h1 className='text-20px leading-24px font-bold text-[#5a5c69] mt-5px'>£{monthlyOutgoings}</h1>
            </div>
            <FaReceipt fontSize={28} color='blue' />
          </div>



          <div className='col-span-4'>
            <table className='w-full mt-10'>
              <thead>
                <tr>
                  <th className='text-left'>Category</th>
                  <th className='text-left'>Amount (GBP)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Housing</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={housing}
                      onChange={(e) => setHousing(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Insurance</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={insurance}
                      onChange={(e) => setInsurance(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Groceries</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={groceries}
                      onChange={(e) => setGroceries(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Media and Entertainment</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={media}
                      onChange={(e) => setMedia(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Debt Repayment</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={debtRepayment}
                      onChange={(e) => setDebtRepayment(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Other Essentials</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={otherEssentials}
                      onChange={(e) => setOtherEssentials(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Lifestyle Costs</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={lifestyleCosts}
                      onChange={(e) => setLifestyleCosts(Number(e.target.value))}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Savings</td>
                  <td>
                    <input
                      type='number'
                      className='w-full px-4 py-2 rounded-lg border focus:outline-none'
                      value={savings}
                      onChange={(e) => setSavings(Number(e.target.value))}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



          <div className='col-span-4 mt-10'>
            <h2 className='text-2xl font-bold mb-2'>Summary</h2>
            <div className='flex justify-between'>
              <div>
                <h3>Total Income</h3>
                <p>£{monthlyEarnings}</p>
              </div>


              <div>
                <h3>Total Outgoings</h3>
                <p>£{calculateTotalOutgoings()}</p>
              </div>
              <div>
                <h3>Money Leftover</h3>
                <p>£{calculateMoneyLeftover()}</p>
              </div>
            </div>


            <div className='mt-6'>
              <h3>Essential Spend</h3>
              <p>{calculateEssentialSpendPercentage()}%</p>
              <progress className='w-full h-3 mt-2' value={calculateEssentialSpendPercentage()} max='50'></progress>
            </div>


            <div className='mt-6'>
              <h3>Non-Essential Spend</h3>
              <p>{calculateNonEssentialSpendPercentage()}%</p>
              <progress className='w-full h-3 mt-2' value={calculateNonEssentialSpendPercentage()} max='30'></progress>
            </div>


            <div className='mt-6'>
              <h3>Savings</h3>
              <p>{calculateSavingsPercentage()}%</p>
              <progress className='w-full h-3 mt-2' value={calculateSavingsPercentage()} max='20'></progress>
            </div>
            
          </div>
        </div>
      </div>
    </FigureProvider>
  );
};

export default Main2;
