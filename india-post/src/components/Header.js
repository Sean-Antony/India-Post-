import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { PiChartPieSliceFill, PiPackageFill } from "react-icons/pi";
import { FaFile } from "react-icons/fa6";

const Header = () => {
  const location = useLocation(); // Get current path

  // Function to check if the current path matches a route
  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex space-x-4">
        {/* Master Data and PO Operation buttons are disabled */}
        <button
          className="px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg w-[160px] h-[40px] 2xl:w-[200px] 2xl:h-[50px] font-PB"
          disabled
        >
          Master Data
        </button>
        <button
          className="px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg w-[160px] h-[40px] 2xl:w-[200px] 2xl:h-[50px] font-PB"
          disabled
        >
          PO Operation
        </button>

        {/* IPVS Button */}
        <NavLink
          to="/ipvs"
          className={`px-4 py-2 bg-gray-100 h-[40px] rounded-lg w-[160px] 2xl:w-[200px] 2xl:h-[50px] border flex flex-row items-center justify-center border-k1 font-PB ${
            isActive('/ipvs') ? 'bg-k1 text-white' : 'text-black'
          }`}
        >
          <PiPackageFill
            className={`mr-[15px] ${isActive('/ipvs') ? 'text-white' : 'text-k1'}`}
            style={{ fontSize: '20px' }}
          />
          IPVS
          <ArrowDropDownRoundedIcon
            className={`ml-2 ${isActive('/ipvs') ? 'text-white' : 'text-k1'}`}
            style={{ fontSize: '2rem' }}
          />
        </NavLink>

        {/* Dashboard Button */}
        <NavLink
          to="/dashboard"
          className={`px-4 py-2 bg-gray-100 h-[40px] rounded-lg w-[160px] 2xl:w-[200px] 2xl:h-[50px] flex flex-row items-center justify-center border border-k1 font-PB ${
            isActive('/dashboard') ? 'bg-k1 text-white' : 'text-black'
          }`}
        >
          <PiChartPieSliceFill
            className={`mr-[5px] ${isActive('/dashboard') ? 'text-white' : 'text-k1'}`}
            style={{ fontSize: '20px' }}
          />
          Dashboard
        </NavLink>

        {/* Reports Button */}
        <NavLink
          to="/reports"
          className={`px-4 py-2 bg-gray-100 h-[40px] rounded-lg w-[160px] 2xl:w-[200px] 2xl:h-[50px] flex flex-row items-center justify-center border border-k1 font-PB ${
            isActive('/reports') ? 'bg-k1 text-white' : 'text-black'
          }`}
        >
          <FaFile
            className={`mr-[7px] ${isActive('/reports') ? 'text-white' : 'text-k1'}`}
            style={{ fontSize: '20px' }}
          />
          Reports
          <ArrowDropDownRoundedIcon
            className={`ml-2 ${isActive('/reports') ? 'text-white' : 'text-k1'}`}
            style={{ fontSize: '2rem' }}
          />
        </NavLink>
      </div>

      {/* Icon buttons */}
      <div className="flex items-center space-x-4">
        <NavLink
          to="/error"
          className={`${
            isActive('/errors') ? 'bg-k1 border-k1' : 'bg-white border-gray-300'
          } border p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center`}
        >
          <ErrorRoundedIcon className={`${isActive('/error') ? 'text-white' : 'text-gray-500'}`} />
        </NavLink>

        <NavLink
        to="/messages"
        className={`${
          isActive('/messages') ? 'bg-k1 border-k1' : 'bg-white border-gray-300'
        } border p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center`}
      >
          <TextsmsRoundedIcon
            className={`${isActive('/messages') ? 'text-white' : 'text-gray-500'}`}
          />
        </NavLink>

        <NavLink
          to="/notfications"
          className={`${
            isActive('/notifications') ? 'bg-k1 border-k1' : 'bg-white border-gray-300'
          } border p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center`}
        >
          <NotificationImportantRoundedIcon
            className={`${isActive('/notifications') ? 'text-white' : 'text-gray-500'}`}
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
