import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import NavLink and useLocation
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
import TourRoundedIcon from "@mui/icons-material/TourRounded";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from "@mui/icons-material/Settings";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import HelpIcon from "@mui/icons-material/Help";

const LeftPanel = () => {
  const location = useLocation(); // Get current path
  
  // Function to check if the current route matches
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 h-screen w-1/6 bg-k1 flex justify-center items-center">
      <div className="flex flex-col">
        <ul className="space-y-2 2xl:space-y-4 text-[14px] 2xl:text-[16px] font-bold">
          <div className="flex">
            <NavLink
              to="/home"
              className={`p-2 rounded-md text-center flex items-center ml-2 ${
                isActive("/home") ? "text-[#FFF600]" : "text-white"
              }`}
            >
              <HomeRoundedIcon className="mr-4 sm:mr-[20px]" />
              Home
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/history"
              className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                isActive("/history") ? "text-[#FFF600]" : "text-white"
              }`}
            >
              <HistoryRoundedIcon className="mr-4 sm:mr-[20px]" />
              History
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/pending-bags"
              className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                isActive("/pending-bags") ? "text-[#FFF600]" : "text-white"
              }`}
            >
              <PushPinRoundedIcon className="mr-4 sm:mr-[20px]" />
              Pending Bags
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/flag-bags"
              className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                isActive("/flag-bags") ? "text-[#FFF600]" : "text-white"
              }`}
            >
              <TourRoundedIcon className="mr-4 sm:mr-[20px]" />
              Flag Bags
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/e-payments"
              className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                isActive("/e-payments") ? "text-[#FFF600]" : "text-white"
              }`}
            >
              <CreditCardIcon className="mr-4 sm:mr-[20px]" />
              E-payments
            </NavLink>
          </div>
        </ul>

        <div className="flex">
          <div className="flex w-full mt-[20px] mb-[20px] h-px bg-gray-200"></div>
        </div>

        <div>
          <ul className="space-y-2 2xl:space-y-4 text-[14px] 2xl:text-[16px] font-bold">
            <div className="flex">
              <NavLink
                to="/configuration"
                className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                  isActive("/configuration") ? "text-[#FFF600]" : "text-white"
                }`}
              >
                <DesktopMacIcon className="mr-4 sm:mr-[20px]" />
                Configuration
              </NavLink>
            </div>
            <div className="flex">
              <NavLink
                to="/settings"
                className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                  isActive("/settings") ? "text-[#FFF600]" : "text-white"
                }`}
              >
                <SettingsIcon className="mr-4 sm:mr-[20px]" />
                Settings
              </NavLink>
            </div>
            <div className="flex">
              <NavLink
                to="/help"
                className={`p-2 rounded-[20px] text-center flex items-center ml-2 ${
                  isActive("/help") ? "text-[#FFF600]" : "text-white"
                }`}
              >
                <HelpIcon className="mr-4 sm:mr-[20px]" />
                Help
              </NavLink>
            </div>
          </ul>
        </div>

        <div className="flex">
          <div className="flex w-full mt-[20px] h-px bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
