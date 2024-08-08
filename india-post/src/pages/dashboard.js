import React from 'react'
import LeftPanel from '../components/leftpanel';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import { FaBell } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full w-[16.666%] bg-red-500">
        <LeftPanel />
      </div>

      {/* Right Content */}
      <div className="flex-1 ml-[16.666%]">
        <div className="p-4">
          <div className="flex items-center justify-between p-4 mt-[10px] mr-[80px] ml-[70px]">
            <img 
            src={logo}
            alt="India Post Logo" 
            className="h-[100px] w-auto"
            />
          <div className="flex space-x-4">
          <button type="button" className="border border-k1 bg-[#F7F7F9] text-black font-PSB py-3 px-5 rounded-md flex items-center">
            <ErrorRoundedIcon className="mr-2" />
            Quick Access
          </button>
          <button type="button" className="border border-k1 bg-[#F7F7F9] text-black font-PSB py-3 px-5 rounded-md flex items-center">
            <HelpRoundedIcon className="mr-2" />
            Contact Help
          </button>
          <div className="flex justify-center">
            <div className="h-[50px] w-px bg-gray-300"></div>
          </div>
          <button type="button" className="border border-gray-300 bg-white py-3 px-3 rounded-md flex items-center">
            <BiSolidMessageDots className="text-[25px] text-gray-400" />
          </button>
          <button type="button" className="border border-gray-300 bg-white py-3 px-3 rounded-md flex items-center">
            <FaBell className="text-[25px] text-gray-400" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="h-px w-[1200px] bg-gray-300 mb-[30px]"></div>
      </div>

      {/* Services Section */}
      <div className="flex items-center justify-between mr-[90px] mb-[15px]">
        <div className="flex flex-col justify-between px-[90px]">
          <h2 className="font-PB text-lg">Services</h2>
          <div className="flex flex-row">
            <h3 className="text-md text-gray-400 font-PSB">Counter No:</h3>
            <h3 className="text-md font-PB ml-1">1</h3>
          </div>
        </div>
        <div>
          <button className="bg-info text-[#0f5666] font-PB p-[10px] h-[50px] w-[150px] rounded-lg flex items-center space-x-2">
            <CalendarMonthRoundedIcon className="text-[#0f5666] ml-[10px]" />
            <span className="text-[13px] pt-[4px]">22 Mar 2024</span>
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-4 ml-[90px] mr-[70px]">
        {/* Add your cards here */}
      </div>
    </div>
  </div>
</div>
  )
}

export default Dashboard