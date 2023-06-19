import React, { useState } from 'react';
import { FaBuilding, FaChevronRight, FaRegSun, FaTachometerAlt, FaWallet, FaHeadset, FaHouseUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showBudgetSubMenu, setShowBudgetSubMenu] = useState(false);
  const [showFinancialSubMenu, setShowFinancialSubMenu] = useState(false);
  const [showBranchSubMenu, setShowBranchSubMenu] = useState(false);

  const handleBudgetSubMenuToggle = () => {
    setShowBudgetSubMenu(prevState => !prevState);
  };

  const handleFinancialSubMenuToggle = () => {
    setShowFinancialSubMenu(prevState => !prevState);
  };

  const handleBranchSubMenuToggle = () => {
    setShowBranchSubMenu(prevState => !prevState);
  };

  return (
    <div className='bg-[#4E73DF] h-screen px-[25px]'>
      <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Finovo Admin Panel</h1>
      </div>

      <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <FaHouseUser color='white' />
        <Link to='/main-2'><p className='text-[14px] leading-[20px] font-bold text-white cursor-pointer'>Dashboard Home</p></Link>
      </div>

      <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>

        
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={handleBudgetSubMenuToggle}>
          <div className='flex items-center gap-[10px]'>
            <FaRegSun color='white' />
            <p className='text-[14px] leading-[20px] font-normal text-white hover:text-blue-300'>Budget Management</p>
          </div>
          <FaChevronRight color='white' className={showBudgetSubMenu ? 'transform rotate-90' : ''} />
        </div>
        {showBudgetSubMenu && (
          <div className='pl-[20px]'>
            <ul className='list-disc p1-4 text-white'>
              <Link to='/budget-planner'><li className='hover:text-blue-300 cursor-pointer'>Budget Planner</li></Link>
              <Link to='/expense-form'><li className='hover:text-blue-300 cursor-pointer'>Expense Form</li></Link>
            </ul>
          </div>
        )}

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={handleFinancialSubMenuToggle}>
          <div className='flex items-center gap-[10px]'>
            <FaWallet color='white' />
            <p className='text-[14px] leading-[20px] font-normal text-white hover:text-blue-300'>Financial Tools</p>
          </div>
          <FaChevronRight color='white' className={showFinancialSubMenu ? 'transform rotate-90' : ''} />
        </div>
        {showFinancialSubMenu && (
          <div className='pl-[20px]'>
            <ul className='list-disc p1-4 text-white'>
               <Link to='/savings-goal-tracker'><li className='hover:text-blue-300 cursor-pointer'>Savings Goal Tracker</li></Link>
            </ul>
          </div>
        )}

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={handleBranchSubMenuToggle}>
          <div className='flex items-center gap-[10px]'>
            <FaBuilding color='white' />
            <p className='text-[14px] leading-[20px] font-normal hover:text-blue-300 text-white'>Other Services</p>
          </div>
          <FaChevronRight color='white' className={showBranchSubMenu ? 'transform rotate-90' : ''} />
        </div>
        {showBranchSubMenu && (
          <div className='pl-[20px]'>
            <ul className='list-disc p1-4 text-white'>
              <Link to='/financial-education'><li className='hover:text-blue-300 cursor-pointer'>Financial Education</li></Link>
            </ul>
          </div>
        )}

        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaHeadset color='white' />
            <p className='text-[14px] leading-[20px] font-normal text-white hover:text-blue-300'>Customer Support</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
