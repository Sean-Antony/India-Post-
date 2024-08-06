import React from "react";
import LeftPanel from "../leftpanel.js";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { Card } from "@mui/material";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { RiDiscountPercentFill } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";
import { FaStore } from "react-icons/fa6";
import Header from "../Header.js";

const Home = () => {
  return (
    <div className="flex  h-screen bg-gray-100">
      
      <LeftPanel />
      
      
      
      <main className="flex-1 p-8">
      <Header/>
        <div className="flex items-center space-x-4">
        
          <div className="relative ">
          
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5  text-[#B01E1D]" />
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
            <CalendarMonthRoundedIcon className="mr-2 text-[#B01E1D]" />
            <span className="font-PB">22 Mar 2024</span>
            <ArrowDropDownRoundedIcon className="ml-2 text-[#B01E1D] " style={{fontSize: "2rem"}} />
          </button>
          <button className="w-[150px] h-[40px]  rounded-lg flex text-white items-center justify-center text-[13px] font-bold bg-[#B01E1D]">
            <AddBoxRoundedIcon className="mr-2 text-white" />
            <span>Create Bag</span>
          </button>
          <button className="w-[40px] h-[40px] bg-white rounded-lg flex items-center justify-center">
            <MoreHorizRoundedIcon />
          </button>
        </div>

        <div className="w-[1170px] mt-[20px] h-px bg-gray-300"></div>
        <div className="flex mt-4">
          <div className="w-[600px] h-[530px] rounded-md flex flex-col mt mr-[20px] bg-gray-100">
            <div className="flex flex-col px-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-PB mt-[px] text-left w-full">Resume</h2>
                  <p className="mt-[5px] text-left w-full font-PSB text-gray-400">
                    Office ID: SL3249843534
                  </p>
                </div>
                <p className="font-PSB mt-[20px]">Selected</p>
              </div>
              <div className="mt-[20px] flex  flex-col justify-center">
                <Card className="w-full h-[80px] mb-[10px] flex flex-row items-center justify-around ">
                  <div className="flex flex-row items-center">
                    <FaStore
                      className="text-k1 mb-[5px] ml-[10px]"
                      style={{ fontSize: "3rem" }}
                    />
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
                    <EditRoundedIcon className="text-k1" />
                    <DeleteRoundedIcon className="text-k1" />
                  </div>
                </Card>

                <Card className="w-full h-[80px] mb-[10px] flex flex-row items-center justify-around ">
                  <div className="flex flex-row items-center">
                    <div className="w-[40px] h-[40px] flex justify-center items-center pr-[3px] bg-k1"><FaStore
                      className="text-white rounded-md mb-[5px] ml-[10px]"
                      style={{ fontSize: "2rem" }}
                      
                    /></div>
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
                    <EditRoundedIcon className="text-k1" />
                    <DeleteRoundedIcon className="text-k1" />
                  </div>
                </Card>
              </div>
              <div className="w-full bg-gray-400 mt-[20px] h-px"></div>
              <div className="grid grid-cols-2 gap-2 mt-[20px] ">
                <div className="bg-white h-[120px] rounded-md">
                  {" "}
                  <div className="flex flex-row ">
                  <span className="w-[40px] h-[40px] rounded-md bg-purple-400 flex items-center justify-center"><RiDiscountPercentFill 
                      className="text-white mb-[5px] ml-[]"
                      style={{ fontSize: "2rem" }}
                    /></span>
                    <div className="flex  flex-col">
                      <span className=" font-PSB ">Infocity P.O</span>
                      <div className="font-PSB  text-gray-400">
                        Total Sales
                        
                      </div>
                    </div>
                    <p>This month:<span>$12589.77</span></p>
                    <p><GoArrowDownLeft /></p>
                  </div>
                </div>
                <div className="bg-white h-[120px] rounded-md">
                  {" "}
                  <div className="flex flex-row items-center">
                  <span className="w-[40px] h-[40px] rounded-md bg-blue-400 flex items-center justify-center"><RiDiscountPercentFill  
                      className="text-white mb-[5px] ml-[]"
                      style={{ fontSize: "2rem" }}
                    /></span>
                    <div className="flex  flex-col">
                      <span className=" font-PSB ">Infocity P.O</span>
                      <div className="font-PSB  text-gray-400">
                        Cash Transferred
                      </div>
                      <p>This month:<span>$12589.77</span></p>
                    <p><GoArrowDownLeft /></p>
                    </div>
                    
                  </div>
                </div>
                <div className="bg-white h-[120px] rounded-md">
                  {" "}
                  <div className="flex flex-row items-center">
                  <span className="w-[40px] h-[40px] rounded-md text-center bg-yellow-500 flex items-center justify-center"><RiDiscountPercentFill 
                      className="text-white mb-[5px] ml-[]"
                      style={{ fontSize: "2rem" }}
                    /></span>
                    <div className="flex  flex-col">
                      <span className=" font-PSB ">3591.52</span>
                      <div className="font-PSB  text-gray-400">
                        Cash Accepted
                      </div>
                    </div>
                    <p>This month:<span>$12589.77</span></p>
                    <p><GoArrowDownLeft /></p>
                  </div>
                </div>
                <div className="bg-white h-[120px] rounded-md">
                  {" "}
                  <div className="flex flex-row items-center">
                  <span className="w-[40px] h-[40px] rounded-md bg-violet-500 flex items-center justify-center"><RiDiscountPercentFill 
                      className="text-white mb-[5px] ml-[]"
                      style={{ fontSize: "2rem" }}
                    /></span>
                    <div className="flex  flex-col">
                      <span className=" font-PSB ">Infocity P.O</span>
                      <div className="font-PSB  text-gray-400">
                        Total Cash Balance
                      </div>
                      <p>This month: $12589.77 <GoArrowDownLeft /></p>
                    </div>
                    
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[550px] h-[530px] rounded-md flex flex-col mt-[px]  mr-[45px] items-center bg-white">
              <div className="flex justify-between items-center bg-[#F7F7F9] w-[500px] h-[50px] mt-[20px] rounded-md ">
                <button className="w-[175px] h-[40px] ml-2 focus:outline-none focus:bg-red-100 focus:ring-red-500 focus:border-red-500 focus:border rounded-md text-sm font-PB">
                  General Information
                </button>
                <button className="w-[130px] h-[40px]  focus:outline-none focus:bg-red-100 focus:ring-red-500 focus:border-red-500 focus:border rounded-md text-sm font-PB">
                  Activity
                </button>
                <button className="w-[110px] h-[40px] mr-2  focus:outline-none focus:bg-red-100 focus:ring-red-500 focus:border-red-500 focus:border rounded-md text-sm font-PB">
                  Recent
                </button>
              </div>
              <div className="w-[520px] mt-[20px] h-px bg-gray-300"></div>
              <div className="w-full text-left flex justify-start">
                <span className="w-[40px] h-[40px] bg-[#B01E1D] rounded-md mr-2 ml-[20px] mt-[15px] flex justify-center items-center">
                  <InfoRoundedIcon className="text-white" fontSize="large" />
                </span>
                <div className="ml-[5px]">
                  <h1 className="font-PB flex items-center mt-[12px]">
                    Summary
                  </h1>
                  <p className="font font-PSB">Counter No: 1</p>
                </div>
                <button className="ml-[230px] bg-info text-[#0f5666] font-PB p-[10px] mt-[10px] h-[45px] rounded-lg flex items-center space-x-2">
                  <CalendarMonthRoundedIcon className="text-[#0f5666]" />
                  <span className="text-[13px] pt-[4px]">22 Mar 2024</span>
                </button>
              </div>
              <div>
                <table className="min-w-full max-w-4xl bg-white border-collapse font-PB">
                  <thead>
                    <tr>
                      <th className="py-4 px-1 border-b text-start">
                        Bagging Status
                      </th>
                      <th className="py-2 px-4 border-b text-center">
                        Quantity
                      </th>
                      <th className="py-2 px-4 border-b text-center">Status</th>
                      <th className="py-2 px-4 border-b text-center">
                        View Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-1 border-b text-start">
                        Bags Received
                      </td>
                      <td className="py-2 px-4 border-b text-center">10</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-[20px] text-center">
                          Success
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-1 border-b text-start">
                        Bags Dispatched
                      </td>
                      <td className="py-2 px-4 border-b text-center">15</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-[20px] text-center">
                          {" "}
                          &bull; Success
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-1 border-b text-start">
                        Articles Managed
                      </td>
                      <td className="py-2 px-4 border-b text-center">1200</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="bg-[#c4fff5] w-[100px] py-[3px] text-[15px] rounded-[20px] text-center">
                          {" "}
                          &bull; Success
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-1 border-b text-start">
                        Pending Bags
                      </td>
                      <td className="py-2 px-4 border-b text-center">4</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="bg-warning w-[100px] py-[3px] rounded-[20px] text-[12px] text-center">
                          {" "}
                          &bull; Pending
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-1 border-b text-start">
                        Flag Bag
                      </td>
                      <td className="py-2 px-4 border-b text-center">2</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="bg-error w-[100px] py-[3px] rounded-[20px] text-[15px] text-center">
                          {" "}
                          &bull; 2 Flag
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
