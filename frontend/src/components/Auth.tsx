import React from 'react'
import { Link } from 'react-router-dom'
import { Mail} from 'lucide-react';
import { UserRound } from 'lucide-react';
const Auth = () => {
  return (
    <div className='flex justify-center flex-col'>
      <div>
        <h1 className='font-extrabold text-3xl mb-3'>Create an account</h1>
        </div>
        <div>
        <p className=' text-gray-400 font-semibold mb-4'>Already have an account?
        <Link to={'/signin'} className='underline text-gray-400 font-bold'>  Login</Link></p>
        </div>
        
      
        
    <div className="grid gap-6 mb-6 ">
        <div>
            <label htmlFor="username" className="block mb-3 text-base font-semibold text-gray-900 ">Username</label>
            <div className='relative'>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserRound className="text-gray-400" />
            </span>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-10" placeholder="Enter your username" required />
        </div>
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-base font-semibold text-gray-900">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Mail className="text-gray-400" />
            </span>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="m@example.com" required />
          </div>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-base font-semibold text-gray-900 ">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
        </div>
  <div>
    <button className='w-full bg-black p-2 text-white rounded-lg'>Sign Up</button>
  </div>
    </div>
    </div>
  )
}

export default Auth
