import React from 'react';
import finovo from '../assets/Finovo.png'

const SignIn = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-8">
        {/* Content for the sign-in form */}
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
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
      </div>
      <div className="w-1/2">
        {/* Image to be displayed on the right */}
        <img src={finovo} alt="Image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SignIn;
