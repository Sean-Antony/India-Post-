import React from "react";
import LeftPanel from "../leftpanel.js";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import NotificationImportantRoundedIcon from "@mui/icons-material/NotificationImportantRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <LeftPanel />

      <main className="flex-1 p-8">
        <header className="flex  items-center mb-8">
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded w-[160px] font-PB"
              disabled
            >
              Master Data
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded w-[160px] font-PB"
              disabled
            >
              PO Operation
            </button>
            <button className="px-4 py-2 bg-gray-200  rounded w-[160px] border border-red-500 text-black font-PB">
              IPVS
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded w-[160px]  border border-red-500 font-PB">
              Dashboard
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded w-[160px]  border border-red-500 font-PB">
              Reports
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-gray-200 p-2 w-[40px] h-[40px] ml-[130px] rounded-md flex items-center justify-center">
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

        <div className="flex items-center space-x-4">
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="form-input w-[650px] pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-italic"
              placeholder="Search by Article ID..."
            />
          </div>
          <button className="w-[40px] h-[40px] bg-white rounded-lg flex items-center justify-center">
            <FormatListBulletedRoundedIcon />
          </button>
          <button className="w-[40px] h-[40px] bg-white rounded-lg flex items-center justify-center">
            <GridViewRoundedIcon />
          </button>
          <button className="w-[170px] h-[40px] bg-white rounded-lg flex items-center justify-center text-[13px] font-bold">
            <CalendarMonthRoundedIcon className="mr-2" />
            <span>22 Mar 2024</span>
            <ArrowDropDownRoundedIcon className="ml-2" />
          </button>
          <button className="w-[150px] h-[40px]  rounded-lg flex text-white items-center justify-center text-[13px] font-bold bg-[#B01E1D]">
            <AddBoxRoundedIcon className="mr-2 text-white" />
            <span>Create Bag</span>
          </button>
          <button className="w-[40px] h-[40px] bg-white rounded-lg flex items-center justify-center">
            <MoreHorizRoundedIcon />
          </button>
        </div>
        <div className=" w-[1170px] mt-[20px] h-px bg-gray-300"></div>
        <div className="w-[550px] h-[530px] rounded-md flex flex-col ml-auto mr-[45px] mt-[20px] items-center bg-white">
          <div className="flex justify-between items-center bg-[#F7F7F9] w-[500px] h-[50px] mt-[20px] rounded-md ">
            <button className="w-[175px] h-[40px] ml-2 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:border rounded-md text-sm font-bold">
              General Information
            </button>
            <button className="w-[130px] h-[40px]  focus:outline-none focus:ring-red-500 focus:border-red-500 focus:border rounded-md text-sm font-bold">
              Activity
            </button>
            <button className="w-[110px] h-[40px] mr-2  focus:outline-none focus:ring-red-500 focus:border-red-500 focus:border rounded-md text-sm font-bold">
              Recent
            </button>
          </div>
          <div className="w-[520px] mt-[20px] h-px bg-gray-300"></div>
          <div className="w-full text-left flex justify-start">
            <span className="w-[40px] h-[40px] bg-[#B01E1D] rounded-md mr-2 ml-[15px] mt-[15px] flex justify-center items-center">
              <InfoRoundedIcon className="text-white" fontSize="large" />
            </span>
            <div className="ml-[5px]">
              <h1 className="font-PB flex items-center mt-[12px]">Summary</h1>
              <p className="font font-PSB">Counter No: 1</p>
            </div>
            <button className="ml-[220px] bg-info text-[#0f5666] font-PB p-[10px]"> <CalendarMonthRoundedIcon className="text-[#0f5666]"/>22 Mar 20204</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
