import React, { useState } from 'react';
import { FaBuilding, FaChevronRight, FaRegSun, FaTachometerAlt, FaWallet, FaHeadset } from 'react-icons/fa';

const Sidebar = () => {
  const [showBudgetSubMenu, setShowBudgetSubMenu] = useState(false);
  const [showFinancialSubMenu, setShowFinancialSubMenu] = useState(false);
  const [showBranchSubMenu, setShowBranchSubMenu] = useState(false);

  const handleBudgetSubMenuToggle = () => {
    setShowBudgetSubMenu(!showBudgetSubMenu);
  };

  const handleFinancialSubMenuToggle = () => {
    setShowFinancialSubMenu(!showFinancialSubMenu);
  };

  const handleBranchSubMenuToggle = () => {
    setShowBranchSubMenu(!showBranchSubMenu);
  };

  return (
    <div className='bg-[#4E73DF] h-screen px-[25px]'>
      <div className='px-[15px] py-[30px] flex items-centre justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
      </div>

      <div className='flex-items gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <FaTachometerAlt color='white' />
        <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
      </div>

      <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={handleBudgetSubMenuToggle}>
          <div className='flex items-center gap-[10px]'>
            <FaRegSun color='white' />
            <p className='text-[14px] leading-[20px] font-normal text-white hover:text-blue-300 '>Budget Management</p>
          </div>
          <FaChevronRight color='white' className={showBudgetSubMenu ? 'transform rotate-90' : ''} />
        </div>
        {showBudgetSubMenu && (
          <div className='pl-[20px]'>
            <ul className='list-disc p1-4 text-white'>
              <li className='hover:text-blue-300 cursor-pointer'>Budget Planner</li>
              <li className='hover:text-blue-300 cursor-pointer'>Expense Form</li>
              <li className='hover:text-blue-300 cursor-pointer'>Expense Items</li>
              <li className='hover:text-blue-300 cursor-pointer'>Expense List</li>
            </ul>
          </div>
        )}


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={handleFinancialSubMenuToggle}>
          <div className='flex items-center gap-[10px]'>
            <FaWallet color='white' />
            <p className='text-[14px] leading-[20px] font-normal text-white hover:text-blue-300 '>Financial Tools</p>
          </div>
          <FaChevronRight color='white' className={showFinancialSubMenu ? 'transform rotate-90' : ''} />
        </div>
        {showFinancialSubMenu && (
          <div className='pl-[20px]'>
           <ul className='list-disc p1-4 text-white'>
              <li className='hover:text-blue-300 cursor-pointer'>Loan Calculator</li>
              <li className='hover:text-blue-300 cursor-pointer'>Savings Goal Tracker</li>
            </ul>
          </div>
        )}


        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={handleBranchSubMenuToggle}>
          <div className='flex items-center gap-[10px]'>
            <FaBuilding color='white' />
            <p className='text-[14px] leading-[20px] font-normal hover:text-blue-300  text-white'>Branch & Services</p>
          </div>
          <FaChevronRight color='white' className={showBranchSubMenu ? 'transform rotate-90' : ''} />
        </div>
        {showBranchSubMenu && (
          <div className='pl-[20px]'>
         <ul className='list-disc p1-4 text-white'>
              <li className='hover:text-blue-300 cursor-pointer'>Branch Locator</li>
              <li className='hover:text-blue-300 cursor-pointer'>Financial Education</li>
            </ul>
          </div>
        )}

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaHeadset color='white' />
            <p className='text-[14px] leading-[20px] font-normal text-white hover:text-blue-300  cursor-pointer'>Customer Support</p>
          </div>
        
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
