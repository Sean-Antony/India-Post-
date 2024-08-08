import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

function LeftPanel() {
  return (
    <div className="flex flex-col h-screen bg-k1 text-white p-4 md:p-8 lg:w-1/4 lg:min-w-[300px]">
      <div className="flex flex-col flex-grow items-center justify-between">
        <div className="flex flex-col items-center mb-8">
          <img src="path/to/your/logo.png" alt="India Post Logo" className="w-20 mb-4" />
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">Welcome to India Post</h1>
          <p className="text-sm md:text-base mb-8 text-center">
            You are just a few steps away from <br /> accessing the India Post system.
          </p>
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col items-center">
              <p className='text-xs md:text-sm'>STEP 1</p>
              <span className='flex items-center gap-x-2 md:gap-x-4 mt-2 font-PSB'>
                <ExitToAppIcon />
                Register/Login ID
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p className='text-xs md:text-sm'>STEP 2</p>
              <span className='flex items-center gap-x-2 md:gap-x-4 mt-2 font-PSB'>
                <EmailRoundedIcon />
                Choose your services
              </span>
            </div>
            <div className="flex flex-col items-center">
              <p className='text-xs md:text-sm'>STEP 3</p>
              <span className='flex items-center gap-x-2 md:gap-x-4 mt-2 font-PSB'>
                <CreateRoundedIcon />
                Instructions and Features
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs md:text-sm mb-1">New Updates available! v_4.9.3</p>
          <h3 className="bg-[#333] text-xs md:text-sm py-1 px-2 rounded">Update Now</h3>
          <span className='h-px bg-black w-16 mt-4'></span>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;