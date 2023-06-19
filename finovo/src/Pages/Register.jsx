import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8">
       <div className='flex items-center justify-center text-blue-500'>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Confirm Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">First name</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your First Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Last Name</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your Last Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Password</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your Password" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium"> Confirm Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your password" />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="font-medium">Remember me</label>
          </div>
         
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Submit
          </button>
          
        </form>
        <div className='flex place-items-center justify-center  '>
        <p> Already have an account?</p> <Link to='/sign-in'><p className='cursor-pointer text-blue-500'>Sign in here</p></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Register;
