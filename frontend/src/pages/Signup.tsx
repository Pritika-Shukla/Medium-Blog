import React from 'react';
import Qoute from "../components/Qoute";
import Auth from '../components/Auth';

const Signup = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {/* Left side - reserved for other content */}
      <div className="bg-white flex justify-center items-center">
        {/* Place any content you want on the left side here */}
      <Auth/>
      </div>

      {/* Right side - Qoute component */}
      <Qoute />
    </div>
  );
};

export default Signup;
