import React from "react";
import LeftPanel from "../components/leftpanel.js";
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
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { GoArrowDownLeft } from "react-icons/go";
import { FaStore } from "react-icons/fa6";
import Header from "../components/Header.js";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <LeftPanel />

      <main className="ml-[16.666%] flex-1 p-8 space-y-6 h-screen overflow-y-auto">
        <Header />
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
            <ArrowDropDownRoundedIcon
              className="ml-2 text-[#B01E1D] "
              style={{ fontSize: "2rem" }}
            />
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
                  <h2 className="font-PB mt-[-5px] text-left w-full">Resume</h2>
                  <p className="mt-[5px] text-left w-full font-PSB text-gray-400">
                    Office ID: <span className="text-black">990909090</span>
                  </p>
                </div>
                
                <p className="font-PSB mt-[10px]"><input type="checkbox" className="mr-[5px]  "/>Selected</p>
              </div>
              <div className="mt-[20px] flex  flex-col justify-center">
                <Card className="w-full h-[80px] mb-[10px] flex flex-row items-center justify-around ">
                  <div className="flex flex-row items-center">
                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg mr-[20px] bg-k1">
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
                </Card>

                <Card className="w-full h-[80px] mb-[10px] flex flex-row items-center justify-around ">
                  <div className="flex flex-row items-center ">
                    <div className="w-[40px] h-[40px] flex justify-center items-center rounded-lg mr-[20px] bg-k1">
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
                </Card>
              </div>
              <div className="w-full bg-gray-300 mt-[20px] h-px"></div>
              <div className="grid grid-cols-2 gap-2 mt-[20px] ">
                <div className="bg-white h-[120px] rounded-md ">
                  {" "}
                  <div className="flex flex-row mt-[12px] ml-[10px] ">
                    <span className="w-[40px] h-[40px] rounded-md   bg-purple-400 flex items-center justify-center">
                      <RiDiscountPercentFill
                        className="text-white  ml-[]"
                        style={{ fontSize: "2rem" }}
                      />
                    </span>
                    <div className=" ">
                      <span className=" font-PSB ml-[10px]">&#8377;3591</span>
                      <div className="font-PSB text-[14px] ml-[10px] mb-[5px] text-gray-400">
                        Cash Transferred
                      </div>
                      <div className="flex flex-row items-center ml-[-40px]">
                        <p className="font-PSB text-[14px] text-gray-400">
                          This month: <span className="text-k1">&#8377;12589.77</span>
                        </p>
                        <div className="flex items-center text-[14px] font-PSB text-red-500  ml-[50px]">
                          <GoArrowDownLeft className="text-red-500 mr-1" />{" "}
                          {/* Added mr-1 to space the icon */}
                          4.67%
                        </div>
                        
                      </div>
                      <div className="ml-[-40px] w-[260px] h-px bg-gray-200 my-[5px]"></div>
                      <div className="flex flex-row items-center ml-[-40px] justify-between">
                        <p className="font-PSB text-[14px] ">
                          View Details
                        </p>
                        <div className="flex items-center text-[14px] font-PSB  ml-[50px]">
                          <ChevronRightRoundedIcon className=" mr-1" />{" "}
                          {/* Added mr-1 to space the icon */}
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[120px] rounded-md shadow-lg">
                  {" "}
                  <div className="flex flex-row items-center">
                  <span className="w-[40px] h-[40px] rounded-md mt-[-50px] ml-[10px]  bg-blue-400 flex items-center justify-center">
                      <RiDiscountPercentFill
                        className="text-white  "
                        style={{ fontSize: "2rem" }}
                      />
                    </span>
                    <div className="flex  flex-col mt-[10px] ">
                      <span className=" font-PSB ml-[10px] ">&#8377;3591</span>
                      <div className="font-PSB text-[14px] ml-[10px] mb-[5px] text-gray-400">
                        Cash Transferred
                      </div>
                      <div className="flex flex-row items-center ml-[-40px]">
                        <p className="font-PSB text-[14px] text-gray-400">
                          This month: <span className="text-k1">&#8377;12589.77</span>
                        </p>
                        <div className="flex items-center text-[14px] font-PSB text-red-500 ml-[50px]">
                          <GoArrowDownLeft className="text-red-500 mr-1" />{" "}
                          {/* Added mr-1 to space the icon */}
                          4.67%
                        </div>
                      </div>
                      <div className="ml-[-40px] w-[260px] h-px bg-gray-200 my-[5px]"></div>
                      <div className="flex flex-row items-center ml-[-40px] justify-between">
                        <p className="font-PSB text-[14px] ">
                          View Details
                        </p>
                        <div className="flex items-center text-[14px] font-PSB  ml-[50px]">
                          <ChevronRightRoundedIcon className=" mr-1" />{" "}
                         
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[120px] rounded-md shadow-lg">
                  {" "}
                  <div className="flex flex-row items-center mt-[10px]">
                    <span className="w-[40px] h-[40px] rounded-md bg-[#fda71f]  ml-[10px] mt-[-60px] flex items-center justify-center">
                      <RiDiscountPercentFill
                        className="text-white  ml-[]"
                        style={{ fontSize: "2rem" }}
                      />
                    </span>
                    <div className="flex  flex-col">
                      <span className=" font-PSB ml-[10px] ">&#8377;3591</span>
                      <div className="font-PSB ml-[10px] text-[14px] mb-[5px] text-gray-400">
                        Cash Transferred
                      </div>
                      <div className="flex flex-row items-center ml-[-40px]">
                        <p className="font-PSB text-[14px] ">
                          This month: <span className="text-k1">&#8377;12589.77</span>
                        </p>
                        <div className="flex items-center text-[14px] font-PSB text-red-500 ml-[50px]">
                          <GoArrowDownLeft className="text-red-500 mr-1" />{" "}
                          {/* Added mr-1 to space the icon */}
                          4.67%
                        </div>
                        
                      </div>
                      <div className="ml-[-40px] w-[260px] h-px bg-gray-200 my-[5px]"></div>
                      <div className="flex flex-row items-center ml-[-40px] justify-between">
                        <p className="font-PSB text-[14px] ">
                          View Details
                        </p>
                        <div className="flex items-center text-[14px] font-PSB ml-[50px]">
                          <ChevronRightRoundedIcon className=" mr-1" />{" "}
                          {/* Added mr-1 to space the icon */}
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[120px] rounded-md shadow-lg">
                  {" "}
                  <div className="flex flex-row items-center mt-[10px]">
                    <span className="w-[40px] h-[40px] rounded-md bg-[#937ffd] flex items-center justify-center mt-[-30px] ml-[10px]">
                      <RiDiscountPercentFill
                        className="text-white  ml-[]"
                        style={{ fontSize: "2rem" }}
                      />
                    </span>
                    <div className="flex  flex-col">
                      <span className=" font-PSB ml-[10px] ">&#8377;3591</span>
                      <div className="font-PSB ml-[10px] mb-[5px] text-gray-400 text-[14px]">
                        Total Cash Balance
                      </div>
                      <div className="flex flex-row items-center ml-[-40px]">
                      <p className="font-PSB text-[14px] text-gray-400">This month: <span className="text-k1">&#8377;12589.77</span></p>
                      <div className="flex items-center text-[14px] font-PSB text-red-500 ml-[50px]">
            <GoArrowDownLeft className="text-red-500 mr-1" /> {/* Added mr-1 to space the icon */}
            4.67%
          </div>
          </div>
                    </div>
                  </div>
                  <div className=" w-[260px] h-px ml-[10px] bg-gray-200 my-[5px]"></div>
                  <div className="flex flex-row items-center ml-[10px] justify-between">
                        <p className="font-PSB text-[14px]">
                          View Details
                        </p>
                        <div className="flex items-center text-[14px] font-PSB  ">
                          <ChevronRightRoundedIcon className=" mr-[10px] " />{" "}
                         
                          
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
                      <td className="py-3 px-1 border-b text-start">
                        Bags Received
                      </td>
                      <td className="py-2 px-4 border-b text-center">10</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-[20px] flex flex-row items-center text-[14px] justify-around text-center pr-[5px]">
                          <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/>Success
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 px-1 border-b text-start">
                        Bags Dispatched
                      </td>
                      <td className="py-2 px-4 border-b text-center">15</td>
                      <td className="py-2 px-4 border-b text-center">
                      <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-[20px] flex flex-row items-center text-[14px] justify-around text-center pr-[5px]">
                          {" "}
                          <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Success
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-1 border-b text-start">
                        Articles Managed
                      </td>
                      <td className="py-2 px-4 border-b text-center">1200</td>
                      <td className="py-2 px-4 border-b text-center">
                      <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-[20px] flex flex-row items-center text-[14px] justify-around text-center pr-[5px]">
                          {" "}
                          <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/>Success
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-1 border-b text-start">
                        Pending Bags
                      </td>
                      <td className="py-2 px-4 border-b text-center">4</td>
                      <td className="py-2 px-4 border-b text-center">
                      <button className="bg-[#fef3cc] w-[100px] py-[3px] rounded-[20px] flex flex-row items-center text-[14px] justify-around text-center pr-[5px]">
                          {" "}
                          <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Pending
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-1 border-b text-start">
                        Flag Bag
                      </td>
                      <td className="py-2 px-4 border-b text-center">2</td>
                      <td className="py-2 px-4 border-b text-center">
                      <button className="bg-[#ec7876] w-[100px] py-[3px] rounded-[20px] flex flex-row items-center text-[14px] justify-around text-center pr-[5px]">
                          {" "}
                          <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> 2 Flag
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-[20px]">
              <p className="font-PSB"> View All <KeyboardArrowDownRoundedIcon/></p>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
