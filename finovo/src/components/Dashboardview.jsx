import React, { useState } from 'react';
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa';
import profile from '../assets/profile-picture-5.jpg';
import { Link } from 'react-router-dom';

const Dashboardview = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
      <div className='flex items-center rounded-[5px]'>
        <input
          type='text'
          className='bg-[#F8F9FC] h-[40px] outline-none p1-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal'
          placeholder='Search for...'
        />
        <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
          <FaSearch color='white' />
        </div>
      </div>

      <div className='flex items-center gap-[15px] relative'>
        <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px] cursor-pointer'>
          <FaRegBell color='[#4E73DF]'/>
          <FaEnvelope color='[#4E73DF]' />
        </div>

        <div className='relative'>
          <div className='flex items-center gap-[25px] mt-4 cursor-pointer' onClick={handleProfileClick}>
            <div className='h-[40px] w-[40px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative'>
              <img className='w-10 h-10 rounded-full' src={profile} alt='' />
            </div>
          </div>
          {menuOpen && (
            <div className='absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg'>
              <ul className='py-2 text-blue-500 '>
<Link to='/sign-in'><li className='px-4 py-2 hover:bg-gray-100 hover:underline'>Sign In</li></Link>
<Link to='/register'><li className='px-4 py-2 hover:bg-gray-100 hover:underline'>Register</li></Link>
<Link to='/forgot-password'><li className='px-4 py-2 hover:bg-gray-100 hover:underline'>Forgot Password</li></Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Dashboardview;
