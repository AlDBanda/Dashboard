import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8">
       <div className='flex items-center justify-center text-blue-500'>
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 rounded-lg border focus:outline-none" placeholder="Enter your password" />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="font-medium">Remember me</label>
          </div>
          <div className="flex items-center mb-4">
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Sign In
          </button>
          <button className="w-full py-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">
            Sign In with Google
          </button>
        </form>
        <div className='flex place-items-center justify-center  '>
        <p> Dont have an account?</p> <Link to='/register'><p className='cursor-pointer text-blue-500'>Register</p></Link>
        </div>
      </div>
      
    </div>
  );
};

export default SignIn;
