import React from 'react';
import { FaLock } from 'react-icons/fa'; // For the password lock icon
import CustomButton from '../../Component/Shared/CustomButton';
import bgImg from "../../assets/images/signUpImg.jpg"; // Import the background image

const SignUp = () => {
  return (
    <div className="min-h-screen relative p-4 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`, // Background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* This darkens the background */}

      <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-96 opacity-100 z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Create Account</h2>

        {/* Form */}
        <form>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name and Surname</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Terms and Privacy Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="h-5 w-5 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="terms" className="ml-2 text-gray-700">I agree with <a href="#" className="text-teal-500 hover:underline">Terms and Privacy</a></label>
          </div>

          {/* Submit Button */}
          <CustomButton text={"Sign Up"}></CustomButton>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <a href="#" className="text-teal-500 hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
