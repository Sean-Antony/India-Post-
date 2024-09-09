import React from "react";
import LeftPanel from "../components/leftpanel.js";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa6";
import Header from "../components/Header.js";
import Card from "../components/detcard.js";
import InfoComponent from "../components/infocomponent.js";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <LeftPanel />

      <main className="ml-[16.666%] flex-1 p-8 space-y-6 h-screen overflow-y-auto mr-[50px]">
        <Header />
        <div className="flex items-center justify-between">    
          <div className="flex items-center ">
            <div className="absolute  flex items-center pl-3 pointer-events-none">
                <SearchIcon className="h-5 w-5 text-k1" />
              </div>
            <input
              type="text"
              className="form-input w-[600px] h-[40px] 2xl:w-[900px] 2xl:h-[50px] pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-italic"
              placeholder="Search by Article ID..."
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
              <FormatListBulletedRoundedIcon  />
            </button>
            <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
              <GridViewRoundedIcon  />
            </button>
            <button className="w-[170px] h-[40px] 2xl:w-[200px] 2xl:h-[50px] border border-gray-300 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
              <CalendarMonthRoundedIcon className="mr-2 text-[#B01E1D]" />
              <span className="font-PB">22 Mar 2024</span>
              <ArrowDropDownRoundedIcon className="text-[#B01E1D]" style={{ fontSize: "2rem" }} />
            </button>
            <button className="w-[170px] h-[40px] 2xl:w-[150px] 2xl:h-[50px] bg-k1 rounded-lg flex items-center justify-center text-[14px] text-white font-bold">
              <AddBoxRoundedIcon className="mr-2 text-white" />
              <span className="font-PSB">Create Bag</span>
            </button>
            <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
              <MoreHorizRoundedIcon className='text-gray-500 ' fontSize="large"/>
            </button>
          </div>
        </div>
        <div className="w-full mt-[20px] h-px bg-gray-300"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-[525px] 2xl:h-[700px] p-0 2xl:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-PB mt-[-5px] text-left w-full">Resume</h2>
                <p className="mt-[5px] text-left w-full font-PSB text-gray-400">
                  Office ID: <span className="text-black">990909090</span>
                </p>
              </div>
                
                <p className="font-PSB mt-[10px]"><input type="checkbox" className="mr-[5px]  "/>Selected</p>
            </div>
            <card className="w-full h-[80px] mt-[10px] mb-[10px] flex flex-row items-center justify-around rounded-md border border-gray-300 bg-white">
              <div className="flex flex-row items-center">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md mr-[20px] bg-k1">
                  <FaStore
                    className="text-white rounded-md "
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="flex  flex-col">
                  <span className=" font-PSB ">Infocity P.O</span>
                  <div className="font-PSB  text-gray-400">
                    Bag ID:{" "}
                    <span className="font-PSB text-black">EG21892131N</span>
                  </div>
                </div>
              </div>

              <div className="w-px bg-gray-400 h-[50px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-gray-400 font-PSB">Arrival Time</div>
                <div className=" font-PSB">13:45:56</div>
              </div>
              <div className="w-px bg-gray-400 h-[50px]"></div>
              <div className="flex space-x-4">
              <button className="border  border-k1 rounded-md px-1 py-1"><EditRoundedIcon className="text-k1" /></button>
                
                <button className="border border-k1 rounded-md px-1 py-1"><DeleteRoundedIcon className="text-k1" /></button>
              </div>
            </card>
            <card className="w-full h-[80px] mt-[10px] mb-[10px] flex flex-row items-center justify-around rounded-md border border-gray-300 bg-white">
              <div className="flex flex-row items-center">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md mr-[20px] bg-k1">
                  <FaStore
                    className="text-white rounded-md "
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="flex  flex-col">
                  <span className=" font-PSB ">Infocity P.O</span>
                  <div className="font-PSB  text-gray-400">
                    Bag ID:{" "}
                    <span className="font-PSB text-black">EG21892131N</span>
                  </div>
                </div>
              </div>

              <div className="w-px bg-gray-400 h-[50px]"></div>
              <div className="flex flex-col items-start">
                <div className="text-gray-400 font-PSB">Arrival Time</div>
                <div className=" font-PSB">13:45:56</div>
              </div>
              <div className="w-px bg-gray-400 h-[50px]"></div>
              <div className="flex space-x-4">
              <button className="border  border-k1 rounded-md px-1 py-1"><EditRoundedIcon className="text-k1" /></button>
                
                <button className="border border-k1 rounded-md px-1 py-1"><DeleteRoundedIcon className="text-k1" /></button>
              </div>
            </card>
            <div className="w-full bg-gray-300 mt-[20px] mb-[20px] h-px"></div>
            <div className="grid grid-cols-2 gap-2 2xl:gap-4">
              <div className="bg-white rounded-md border border-gray-300">
                <Card 
                icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "purple-400" }}
                title="Total Sales" 
                amount="&#8377;3591.52" 
                monthAmount="&#8377;12598.77" 
                percentage="7.67" 
                isPositive={true} 
              />
              </div>
              <div className="bg-white rounded-md border border-gray-300">
                <Card 
                  icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "[#fda71f]" }}
                  title="Cash Accepted" 
                  amount="&#8377;1591.00" 
                  monthAmount="&#8377;9598.77" 
                  percentage="2.67" 
                  isPositive={true} 
                />
              </div>
              <div className="bg-white rounded-md border border-gray-300">
                <Card 
                    icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "blue-400" }}
                    title="Cash Transferred" 
                    amount="&#8377;419.00" 
                    monthAmount="&#8377;6798.54" 
                    percentage="4.67" 
                    isPositive={false} 
                  />
              </div>
              <div className="bg-white rounded-md border border-gray-300">
                <Card 
                  icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "purple-400" }}
                  title="Total Cash Balance" 
                  amount="&#8377;3171.00" 
                  monthAmount="&#8377;16798.54" 
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-300">
            <InfoComponent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
