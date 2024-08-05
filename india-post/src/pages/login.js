import React, { useState } from 'react';
import LeftPanel from '../components/LoginLeftPanel';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import logo from '../assets/logo.png';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit   
     = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };
      return (
        <div className='bg-[#F7F7F9] flex'>
          <div className='flex flex-col'>
            <LeftPanel/>
          </div>
          <div className='flex-1 flex flex-col'>
            <div className='flex items-center justify-between p-4 mt-[10px] mr-[70px] ml-[70px]'>
              <img 
                src={logo}
                alt='India Post Logo' 
                className='h-[100px] w-auto'
              />
              <div className='flex space-x-4'>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-bold py-3 px-5 rounded-md flex items-center">
                  <ErrorRoundedIcon className='mr-2' />
                  Quick Access
                </button>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-bold py-3 px-5 rounded-md flex items-center">
                  <HelpRoundedIcon className='mr-2' />
                  Contact Help
                </button>
              </div>
            </div>
            <div className='flex justify-center'>
                  <div className='h-px w-[1200px] bg-gray-300'></div>
                </div>
          <div className='flex flex-col items-center my-auto mx-auto'>
          <div className="w-[600px] h-[600px] bg-white rounded-lg border p-12 mt-[-55px]">
            <div className="flex justify-center mb-4">
            <div className="bg-[#B01E1D] p-1 rounded-md"> 
              <PersonRoundedIcon className="text-white" fontSize="large" /> 
            </div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl'>Get Started</h2> 
              <p className="text-gray-400">
                Don't have an account?
              </p>
            </div>
            <div className='flex justify-center mt-5 mb-8'>
            <div className='h-px w-full bg-gray-200'></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                <label htmlFor="India Post Office ID" className="block text-lg font-medium text-gray-700 mb-2">
                India Post Office ID
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MailOutlineRoundedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                <input
                  type="ID"
                  name="India Post Office ID"
                  placeholder="Office ID"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-md pl-10 p-4 w-full bg-[#F7F7F9] focus:outline-none focus:ring-[#B01E1D] focus:border-[#B01E1D] focus:z-10"
                />
                </div>
                </div>
                <div>
                <label htmlFor="Password" className="block text-lg font-medium text-gray-700 mb-2">
                Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <LockOutlinedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded-md pl-10 p-4 w-full bg-[#F7F7F9] focus:outline-none focus:ring-[#B01E1D] focus:border-[#B01E1D] focus:z-10 "
                />
                </div>
                </div>
                <div className="text-md text-right">
                    <a href="#" className="relative font-medium text-[#B01E1D] group ">
                    Forgot password?
                    <span className=" absolute left-1/2 bottom-[-8px] transform -translate-x-1/2 w-0 h-0.5 bg-[#B01E1D] group-hover:w-1/2 transition-all duration-300 ease-in-out"></span>
                    </a>
                </div>
                <div className='flex justify-center'>
                  <div className='h-px w-full bg-gray-200'></div>
                </div>
                <div className='flex justify-end space-x-4 '>
                <button type="submit" className="border border-[#B01E1D] bg-white text-black font-bold py-3 px-5 rounded-md "> 
                  <CreateRoundedIcon className='ml-[-px] mr-[5px] mt-[-2px]' />
                  Register
                </button>
                <button type="submit" className=" bg-[#B01E1D] text-white font-bold py-3 px-5 rounded-md">
                <LoginRoundedIcon className='ml-[-10px] mr-[8px] mt-[-2px]'/>
                  Login
                </button>
                </div>
              </div>
            </form>
          </div>
          </div>
          </div>
        </div>
      );
}

export default Login;