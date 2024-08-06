import React from 'react'
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { PiChartPieSliceFill } from "react-icons/pi";
import { PiPackageFill } from "react-icons/pi";
import { FaFile } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex  items-center justify-between mr-[50px] mb-8">
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg w-[160px] font-PB"
              disabled
            >
              Master Data
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg w-[160px] font-PB"
              disabled
            >
              PO Operation
            </button>
            <button className="px-4 py-2 bg-gray-200  rounded-lg w-[160px] border flex flex-row items-center justify-center border-red-500 text-black font-PB">
            <PiPackageFill className='text-k1 mr-[15px]' style={{fontSize: "20px"}}/> IPVS <ArrowDropDownRoundedIcon className="ml-2 text-[#B01E1D] " style={{fontSize: "2rem"}} />
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg w-[160px] flex flex-row items-center border border-red-500 font-PB">
            <PiChartPieSliceFill className='text-k1 mr-[5px]' style={{fontSize: "20px"}} />Dashboard   
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg w-[160px] flex flex-row items-center justify-center border border-red-500 font-PB">
            <FaFile className='text-k1 mr-[7px]' style={{fontSize: "20px"}}/>Reports <ArrowDropDownRoundedIcon className="ml- text-[#B01E1D] " style={{fontSize: "2rem"}} />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-gray-200 p-2 w-[40px] h-[40px] ml-[130px] rounded flex items-center justify-center">
              <ErrorRoundedIcon />
            </span>
            <span className="bg-gray-200  p-2 rounded-md flex items-center justify-center">
              <TextsmsRoundedIcon />
            </span>
            <span className="bg-gray-200  p-2 rounded-md flex items-center justify-center">
              <NotificationImportantRoundedIcon />
            </span>
          </div>
        </header>
  )
}

export default Header
