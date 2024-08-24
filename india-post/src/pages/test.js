import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftPanel from '../components/LoginLeftPanel';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import logo from '../assets/logo.png';

function Services() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/features');
  };
  
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F7F7F9]">
      <LeftPanel currentStep={currentStep}/>
      <div className="flex-1 flex flex-col ">
        <header className="flex items-center justify-between p-4 xl:mx-12">
          <img 
            src={logo}
            alt='India Post Logo' 
            className='h-[100px] w-auto'
          />
          <div className='flex space-x-4'>
            <button type="button" className="border border-k1 bg-[#F7F7F9] text-black font-bold py-2 px-4 rounded-md flex items-center">
              <ErrorRoundedIcon className='mr-2 text-k1' />
               Quick Access
            </button>
            <button type="button" className="border border-k1 bg-[#F7F7F9] text-black font-bold py-2 px-4 rounded-md flex items-center">
              <HelpRoundedIcon className='mr-2 text-k1' />
              Contact Help
            </button>
          </div>
        </header>
        <div className='flex justify-center'>
          <div className='h-px w-full md:w-[1200px] bg-gray-300'></div>
        </div>
        <div className='flex flex-col items-center justify-center 2xl:mt-[8%]'>
          <div className="bg-white rounded-lg border p-8 h-[100%] sm:w-[500px] sm:h-[550px] sm:space-y-4 md:w-[600px] md:h-[650px] md:space-y-6 xl:w-[550px] xl:h-[600px] 2xl:space-y-3 xl:space-y-5 xl:p-12 2xl:p-12">
            <div className="flex justify-center mb-4">
              <div className="bg-k1 p-2 rounded-md">
                <StoreRoundedIcon className="text-white" fontSize="large" />
              </div>
            </div>
            <div className='flex flex-col items-center mb-6'>
              <h2 className='text-lg lg:text-lg xl:text-xl font-PSB'>
                Where are you working from?
              </h2>
              <p className="text-gray-400 text-sm md:text-base lg:text-md font-PM">
                General information to access the system
              </p>
            </div>
            <div className='flex justify-center mt-5 mb-8'>
              <div className='h-px w-full bg-gray-200'></div>
            </div>
            <div className="relative mb-7">
              <label htmlFor="postal-network" className="block text-sm md:text-lg mb-2 font-PSB">Select your postal network</label>
              <div className="relative">
                <StoreRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  id="postal-network"
                  className="w-full border rounded bg-[#F7F7F9] p-4 pl-10 appearance-none focus:outline-none focus:ring-k1 focus:border-k1 focus:z-10"
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
              <label htmlFor="postal-network" className="block text-sm md:text-lg mb-2 font-PSB">Location</label>
              <div className="relative">
                <LocationOnRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  id="postal-network"
                  className="w-full border rounded bg-[#F7F7F9] p-4 pl-10 appearance-none focus:outline-none focus:ring-k1 focus:border-k1 focus:z-10"
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
              <div className='flex justify-end space-x-4'>
                <button type="button" className="bg-k1 text-white font-PSB py-3 px-5 rounded-md mt-[50px]" onClick={handleProceed}>
                  <LoginRoundedIcon className='ml-[-10px] mr-[8px] mt-[-2px]' />
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
