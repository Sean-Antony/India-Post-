import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

function LeftPanel() {
  return (
    <div className="flex h-screen">
      <div className="w-[500px] bg-[#B01E1D] text-white p-8 flex flex-col justify-between">
        <div className='flex flex-col justify-center'>
          <img src="path/to/your/logo.png" alt="India Post Logo" className="w-20 mb-8"/>
          <h1 className="text-2xl font-bold mb-4 text-center">Welcome to India Post</h1>
          <p className="mb-8 text-center">You are just a few steps away from <br></br>accessing the India Post system.</p>
          <div className="space-y-8 mt-[40px]">
            <div className="flex flex-col   ">
             <p className='text-[14px] ml-[80px]'>STEP 1</p>
              <span className='flex flex-row gap-x-4 ml-[40px] '><ExitToAppIcon/>Register/Login ID</span>
            </div>
            <div className="flex flex-col  ">
            <p className='text-[14px] ml-[80px]'>STEP 2</p>
              <span className='flex flex-row gap-x-4 ml-[40px]  '><EmailRoundedIcon/>Choose your services</span>
            </div>
            <div className="flex flex-col  ">
            <p className='text-[14px] ml-[80px]'>STEP 3</p>
              <span className='flex flex-row gap-x-4 ml-[40px] '><CreateRoundedIcon/>Instructions and Features</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm">New Updates available! v_4.9.3</p>
          <h3 className="mt-2  text-white py-1 px-2 rounded ">   Update Now   </h3>
          <span className='h-px bg-black w-[25px]'></span>
        </div>
      </div>

      {/* Main Content */}
      </div>
  );
}

export default LeftPanel;
