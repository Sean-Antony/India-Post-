import React from 'react';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import TourRoundedIcon from "@mui/icons-material/TourRounded";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from "@mui/icons-material/Settings";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import HelpIcon from "@mui/icons-material/Help";

const LeftPanel = () => {
  return (
    <div className="h-screen w-1/6 bg-k1 flex ">
      <div className="flex flex-col">
        <ul className="space-y-2 mt-[100px] ml-[40px] text-[14px] font-bold">
          <div className="flex items-center">
            <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <HomeRoundedIcon className="mr-[20px]" />
              Home
            </li>
          </div>
          <div className="flex items-center">
            <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <HistoryRoundedIcon className="mr-[20px]" />
              History
            </li>
          </div>
          <div className="flex items-center">
            <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <PushPinRoundedIcon className="mr-[20px]" />
              Pending Bags
            </li>
          </div>
          <div className="flex items-center">
            <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <TourRoundedIcon className="mr-[20px]" />
              Flag Bags
            </li>
          </div>
          <div className="flex items-center">
            <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <CreditCardIcon className="mr-[20px]" />
              E-payments
            </li>
          </div>
        </ul>
        <div className="flex justify-center">
        <div className="flex items-center w-[200px] ml-[20px] mt-[20px] h-px bg-gray-300"></div>
        </div>
        <div>
          <ul className="space-y-2 mt-[20px] ml-[40px] text-[14px] font-bold ">
            <div className="flex items-center">
              <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
              <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
                <DesktopMacIcon className="mr-[20px]" />
                Configuration
              </li>
            </div>
            <div className="flex items-center">
              <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
              <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
                <SettingsIcon className="mr-[20px]" />
                Settings
              </li>
            </div>
            <div className="flex items-center">
              <span className="block w-px h-10 bg-gray-300 hover:bg-yellow-500 transition-colors duration-300"></span>
              <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
                <HelpIcon className="mr-[20px]" />
                Help
              </li>
            </div>
          </ul>
        </div>
        <div className='flex justify-center'>
        <div className=" w-[200px] mt-[20px] ml-[20px] h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
