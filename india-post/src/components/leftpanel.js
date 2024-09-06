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
    <div className="fixed top-0 left-0 h-screen w-1/6 bg-k1 flex justify-center items-center">
      <div className="flex flex-col">
        <ul className="space-y-2 text-[14px] font-bold">
          <div className="flex">
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <HomeRoundedIcon className="mr-4 sm:mr-[20px]" />
              Home
            </li>
          </div>
          <div className="flex ">
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <HistoryRoundedIcon className="mr-4 sm:mr-[20px]" />
              History
            </li>
          </div>
          <div className="flex">
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <PushPinRoundedIcon className="mr-4 sm:mr-[20px]" />
              Pending Bags
            </li>
          </div>
          <div className="flex ">
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <TourRoundedIcon className="mr-4 sm:mr-[20px]" />
              Flag Bags
            </li>
          </div>
          <div className="flex ">
            <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
              <CreditCardIcon className="mr-4 sm:mr-[20px]" />
              E-payments
            </li>
          </div>
        </ul>
        <div className="flex ">
        <div className="flex w-full mt-[20px] h-px bg-gray-200"></div>
        </div>
        <div>
          <ul className="space-y-2 mt-[20px] text-[14px] font-bold ">
            <div className="flex">
              <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
                <DesktopMacIcon className="mr-4 sm:mr-[20px]" />
                Configuration
              </li>
            </div>
            <div className="flex">
              <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
                <SettingsIcon className="mr-4 sm:mr-[20px]" />
                Settings
              </li>
            </div>
            <div className="flex">
              <li className="p-2 rounded-[20px] hover:text-[#FFF600] text-white text-center flex items-center ml-2">
                <HelpIcon className="mr-4 sm:mr-[20px]" />
                Help
              </li>
            </div>
          </ul>
        </div>
        <div className="flex">
        <div className="flex  w-full mt-[20px] h-px bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
