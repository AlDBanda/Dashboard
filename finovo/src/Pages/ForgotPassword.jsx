import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8">
       <div className='flex items-center justify-center text-blue-500'>
      <p> Enter the email address associated with your account and we'll send you a link to reset your password</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your email" />
          </div>
          
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Submit
          </button>
         
        </form>
        <div className='flex place-items-center justify-center  '>
        <p> Dont have an account?</p> <Link to='/register'><p className='cursor-pointer text-blue-500'>Register</p></Link>
        </div>
      </div>
      
    </div>
  );
};

export default ForgotPassword;