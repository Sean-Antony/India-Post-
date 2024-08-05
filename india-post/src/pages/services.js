import React from 'react'
import LeftPanel from '../components/LoginLeftPanel';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import logo from '../assets/logo.png';

function Services(){
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
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-PB py-3 px-5 rounded-md flex items-center">
                  <ErrorRoundedIcon className='mr-2' />
                  Quick Access
                </button>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-PB py-3 px-5 rounded-md flex items-center">
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
              <StoreRoundedIcon className="text-white" fontSize="large" /> 
            </div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl'>
                Where are you working from?</h2> 
              <p className="text-gray-400">
                General information to access the system 
              </p>              
            </div>
            <div className='flex justify-center mt-5 mb-8'>
            <div className='h-px w-full bg-gray-200'></div>
            </div>
            <div className="relative mb-7">
                <label htmlFor="postal-network" className="block text-lg mb-2">Select your postal network</label>
                <div className="relative">
                    <StoreRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select 
                id="postal-network" 
                className="w-full border rounded bg-[#F7F7F9] p-4 pl-10 appearance-none focus:outline-none focus:ring-[#B01E1D] focus:border-[#B01E1D] focus:z-10"
                defaultValue="Sorting Hub/ Collection Center"
                >
                <option>Sorting Hub/ Collection Center</option>
                <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                 <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                   <path d="M7 10l5 5 5-5H7z" />
                  </svg>
             </div>
            </div>
            </div>
            <div className="relative mb-[35px]">
                <label htmlFor="postal-network" className="block text-lg mb-2">Select your postal network</label>
                <div className="relative">
                    <LocationOnRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select 
                id="postal-network" 
                className="w-full border rounded bg-[#F7F7F9] p-4 pl-10 appearance-none focus:outline-none focus:ring-[#B01E1D] focus:border-[#B01E1D] focus:z-10"
                defaultValue="Ahmedabad NSH"
                >
                <option>Ahmedabad NSH</option>
                <option>Option 2</option>
                <option>Option 3</option>
                </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 10l5 5 5-5H7z" />
            </svg>
            </div>
            </div>
            </div>
            <div className="space-y-4">
                <div className='flex justify-center'>
                  <div className='h-px w-full bg-gray-200'></div>
                </div>
                <div className='flex justify-end space-x-4 '>
                <button type="submit" className=" bg-[#B01E1D] text-white font-bold py-3 px-5 rounded-md">
                <LoginRoundedIcon className='ml-[-10px] mr-[8px] mt-[-2px]'/>
                  Proceed
                </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
  )
}

export default Services