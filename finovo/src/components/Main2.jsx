import React, { useState } from 'react';
import { FaFileInvoice, FaReceipt, FaRegCalendarMinus } from 'react-icons/fa';
import { FigureProvider } from './FigureContext'

const Main2 = () => {
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);
  const [monthlyOutgoings, setMonthlyOutgoings] = useState(0);

  const handleMonthlyEarningsChange = (e) => {
    setMonthlyEarnings(Number(e.target.value));
  };

  const handleMonthlyOutgoingsChange = (e) => {
    setMonthlyOutgoings(Number(e.target.value));
  };

  const annualEarnings = monthlyEarnings * 12;

  return (
    <FigureProvider>
      <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>User Dashboard</h1>
          <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Generate Report</button>
        </div>


        <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-30px cursor-pointer hover:shadow-lg transform hover:scale-103% transition duration-300'>
            <div>
              <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
              <input type="number" value={monthlyEarnings} onChange={handleMonthlyEarningsChange} />
              <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>£{monthlyEarnings}</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color='blue' />
          </div>



          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-30px cursor-pointer hover:shadow-lg transform hover:scale-103% transition duration-300'>
            <div>
              <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (ANNUAL)</h2>
              <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>£{annualEarnings}</h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color='blue' />
          </div>


          <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF] flex items-center justify-between px-30px cursor-pointer hover:shadow-lg transform hover:scale-103% transition duration-300'>
            <div>
              <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>OUTGOINGS (MONTHLY)</h2>
              <input type="number" value={monthlyOutgoings} onChange={handleMonthlyOutgoingsChange} />
              <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>£{monthlyOutgoings}</h1>
            </div>
            <FaReceipt fontSize={28} color='blue' />
          </div>
        </div>
      </div>
    </FigureProvider>
  );
}

export default Main2;
