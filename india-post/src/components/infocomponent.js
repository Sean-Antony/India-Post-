import React, { useState } from 'react';
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const InfoComponent = () => {
  const [activeTab, setActiveTab] = useState('general');

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full h-full rounded-md flex flex-col  items-center bg-white p-5">
      <div className="flex justify-between items-center bg-[#F7F7F9] w-full h-[50px] rounded-md">
        <button
          className={`w-[175px] h-[40px] ml-2 text-sm font-PB rounded-md ${activeTab === 'general' ? 'bg-gray-300' : ''}`}
          onClick={() => handleButtonClick('general')}
        >
          General Information
        </button>
        <button
          className={`w-[130px] h-[40px] text-sm font-PB rounded-md ${activeTab === 'activity' ? 'bg-gray-300' : ''}`}
          onClick={() => handleButtonClick('activity')}
        >
          Activity
        </button>
        <button
          className={`w-[110px] h-[40px] mr-2 text-sm font-PB rounded-md ${activeTab === 'recent' ? 'bg-gray-300' : ''}`}
          onClick={() => handleButtonClick('recent')}
        >
          Recent
        </button>
      </div>
      <div className="w-full mt-[20px] h-px bg-gray-300"></div>
      <div className="w-full p-4">
        {activeTab === 'general' && (
          <>
            <div className="flex justify-between items-center space-x-4">
                <div className='flex flex-row space-x-4'>
                    <span className="w-[40px] h-[40px] bg-[#B01E1D] rounded-md flex justify-center items-center">
                        <InfoRoundedIcon className="text-white" fontSize="large" />
                    </span>
                    <div>
                        <h1 className="font-PB flex items-center">Summary</h1>
                        <p className="font-PSB">Counter No: 1</p>
                    </div>
                </div>
              <button className="ml-auto bg-info text-[#0f5666] font-PB p-[10px] rounded-lg flex items-center space-x-2">
                <CalendarMonthRoundedIcon className="text-[#0f5666]" />
                <span className="text-[13px]">22 Mar 2024</span>
              </button>
            </div>
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
                      <th className="py-2 px-4 border-b text-end">
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
                      <td className="py-2 px-4 border-b text-end"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
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
                      <td className="py-2 px-4 border-b text-end"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
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
                      <td className="py-2 px-4 border-b text-end"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
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
                      <td className="py-2 px-4 border-b text-end"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
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
                      <td className="py-2 px-4 border-b text-end"><MoreHorizRoundedIcon className="" style={{ fontSize: "2rem" }}/></td>
                    </tr>
                  </tbody>
                </table>
            <div className="mt-[20px]">
              <p className="font-PSB">View All <KeyboardArrowDownRoundedIcon /></p>
            </div>
          </>
        )}
        {activeTab === 'activity' && (
          <div>
            {/* Content for Activity tab */}
            <p>Activity content goes here.</p>
          </div>
        )}
        {activeTab === 'recent' && (
          <div>
            {/* Content for Recent tab */}
            <p>Recent content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoComponent;