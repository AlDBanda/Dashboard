import React from 'react'
import { FaRegCalendar, FaRegCalendarMinus } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC] '>
       <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>User Dashboard</h1>
        <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white  flex items-center justify-center px-[30px] cursoer-pointer'>Generate Report</button>
       </div>
       <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white border-1-[4px] border-[#4E73DF]'>
  <div>
    <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
    <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>£45 000</h1>
  </div>
        </div>
         <FaRegCalendarMinus fontSize={28} color='' />
       </div>
      </div>
  )
}

export default Main