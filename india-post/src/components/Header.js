import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { PiChartPieSliceFill } from "react-icons/pi";
import { PiPackageFill } from "react-icons/pi";
import { FaFile } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();

  const handleDash = () => {
    navigate('/dashboard');
  };
  return (
    <header className=" flex items-center justify-between mb-6">
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg w-[160px] h-[40px] 2xl:w-[200px] 2xl:h-[50px] font-PB"
          disabled
        >
          Master Data
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg w-[160px] h-[40px] 2xl:w-[200px] 2xl:h-[50px] font-PB"
          disabled
        >
          PO Operation
        </button>
        <button className="px-4 py-2 bg-gray-200 h-[40px] rounded-lg w-[160px] 2xl:w-[200px] 2xl:h-[50px] border flex flex-row items-center justify-center border-k1 text-black font-PB">
          <PiPackageFill className='text-k1 mr-[15px]' style={{fontSize: "20px"}} /> 
          IPVS 
          <ArrowDropDownRoundedIcon className="ml-2 text-[#B01E1D]" style={{fontSize: "2rem"}} />
        </button>
        <button className="px-4 py-2 bg-gray-200 h-[40px] rounded-lg w-[160px] 2xl:w-[200px] 2xl:h-[50px] flex flex-row items-center justify-center border border-k1 font-PB" onClick={handleDash}>
          <PiChartPieSliceFill className='text-k1 mr-[5px]' style={{fontSize: "20px"}} /> 
          Dashboard   
        </button>
        <button className="px-4 py-2 bg-gray-200 h-[40px] rounded-lg w-[160px] 2xl:w-[200px] 2xl:h-[50px] flex flex-row items-center justify-center border border-k1 font-PB">
          <FaFile className='text-k1 mr-[7px]' style={{fontSize: "20px"}} /> 
          Reports 
          <ArrowDropDownRoundedIcon className="ml-2 text-[#B01E1D]" style={{fontSize: "2rem"}} />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
          <ErrorRoundedIcon className='text-gray-500' />
        </button>
        <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
          <TextsmsRoundedIcon className='text-gray-500' />
        </button>
        <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
          <NotificationImportantRoundedIcon className='text-gray-500' />
        </button>
      </div>
    </header>
  )
}

export default Header
