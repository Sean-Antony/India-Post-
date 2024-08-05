import React from 'react';
import LeftPanel from '../components/LoginLeftPanel';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import logo from '../assets/logo.png';

const Features = () => {
  return (
    <div className='bg-[#F7F7F9] flex'>
          <div className='flex flex-col'>
            <LeftPanel/>
          </div>
          <div className='flex-1 flex flex-col'>
            <div className='flex items-center justify-between p-4 mt-[20px] mr-[70px] ml-[70px]'>
              <img 
                src={logo}
                alt='India Post Logo' 
                className='h-[100px] w-auto'
              />
              <div className='flex space-x-4'>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-PSB py-3 px-5 rounded-md flex items-center">
                  <ErrorRoundedIcon className='mr-2' />
                  Quick Access
                </button>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-PSB py-3 px-5 rounded-md flex items-center">
                  <HelpRoundedIcon className='mr-2' />
                  Contact Help
                </button>
                <div className='flex justify-center'>
                  <div className='h-[50px] w-px bg-gray-300'></div>
                </div>
                <button type="button" className='border border-gray-300 bg-white py-3 px-3 rounded-md flex items-center'>
                <HelpRoundedIcon />
                </button>
                <button type="button" className='border border-gray-300 bg-white py-3 px-3 rounded-md flex items-center'>
                <HelpRoundedIcon />
                </button>
              </div>
            </div>
            <div className='flex justify-center'>
                  <div className='h-px w-[1200px] bg-gray-300 mb-[30px]'></div>
            </div>
            <div className='flex flex-col justify-between px-[90px]'>
              <h2 className='font-PB text-lg '>Welcome Back, Samvith</h2>
              <div className='flex flex-row justify-between'>
                <card className='flex justify-between border border-gray-300 rounded-md bg-white'>
                  <div className='flex flex-col'>
                    <h2 className='font-PB'>Samvith Raj</h2>
                    <h3 className='text-sm'>ID: 923045734</h3>
                  </div>
                </card>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Features;