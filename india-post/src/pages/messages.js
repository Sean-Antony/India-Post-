import React from 'react'
import LeftPanel from "../components/leftpanel.js";
import Header from "../components/Header.js";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import logo from '../assets/logo.png';

const Messages = () => {
    return (
        <div className="flex h-screen bg-gray-100">
                <LeftPanel />
            <main className="ml-[16.666%] flex-1 p-8 space-y-6 h-screen overflow-y-auto mr-[50px]">
                <div className='mb-[32px] '>
                <Header />
                </div>
                <div className="flex items-center justify-between">    
                    <div className="flex flex-col">
                        <h1 className='text-black font-PSB lg:text-lg 2xl:text-2xl'>
                        General Messages
                        </h1>
                        <div className='flex flex-row'>
                        <h2 className='font-PSB text-gray-500 lg:text-sm'>
                            Office ID: 
                        </h2>
                        <h2 className='font-PSB lg:text-sm ml-2'>
                            SL324790723
                        </h2>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                        <SendRoundedIcon className='text-gray-500 -rotate-45 ml-[5px] mb-[5px]' />
                        </button>
                        <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                        <LoginRoundedIcon className='text-gray-500 rotate-90' />
                        </button>
                        <div className='2xl:h-[50px] w-[2px] bg-gray-200'></div>
                        <button className="bg-white border border-gray-300 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                        <ContactlessRoundedIcon className='text-gray-500 -rotate-90' />
                        </button>
                        <button className="w-[170px] h-[40px] 2xl:w-[150px] 2xl:h-[50px] border border-gray-300 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
                        <FilterAltRoundedIcon className="mr-2 text-[#B01E1D]" />
                        <span className="font-PB">Filter By</span>
                        <ArrowDropDownRoundedIcon className="text-[#B01E1D]" style={{ fontSize: "2rem" }} />
                        </button>
                        <button className="w-[170px] h-[40px] 2xl:w-[200px] 2xl:h-[50px] border border-gray-300 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
                        <CalendarMonthRoundedIcon className="mr-2 text-[#B01E1D]" />
                        <span className="font-PB">22 Mar 2024</span>
                        <ArrowDropDownRoundedIcon className="text-[#B01E1D]" style={{ fontSize: "2rem" }} />
                        </button>
                        <div className='2xl:h-[50px] w-[2px] bg-gray-200'></div>
                        <button className="bg-info text-[#0f5666] font-PB p-[10px] h-[50px] w-[300px] rounded-lg flex items-center justify-center space-x-2">
                        <ErrorRoundedIcon className="text-[#0f5666]" />
                        <span className="text-[14px]">PO Cash Limit : &#8377;2,50,000.00</span>
                        </button>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <div className='h-[2px] w-full bg-gray-200'></div>
                </div>
                <div className='grid grid-cols-10 gap-4'>
                    <div className='col-span-7 bg-white h-[500px] 2xl:h-[700px] rounded-md border border-gray-300 p-5'>
                        <div className='flex flex-col justify-between h-full'>
                            <div >
                                <div className='flex flex-row justify-between'>
                                    <div className='ml-4'>
                                        <h2 className='text-md font-PSB'>Today</h2>
                                        <h3 className='text-md text-gray-400 font-PSB '>Date: </h3>
                                    </div>
                                    <div className="bg-red-200 w-[200px] h-[40px] p-2 rounded-full flex flex-row items-center border border-gray-300 font-PSB text-[14px] justify-around text-center ">
                                    <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/>5 Announcements
                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex justify-center mt-5'>
                                        <div className='h-px w-[400px] bg-gray-200 '></div>
                                    </div>
                                    <div className="bg-gray-100 text-gray-400 w-[150px] h-[40px] p-2 rounded-full flex flex-row items-center border border-gray-300 font-PSB text-[14px] justify-around text-center ">
                                        <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/>23 New Chats
                                    </div>
                                    <div className='flex justify-center mt-5'>
                                        <div className='h-px w-[420px] bg-gray-200'></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center ">
                                    <input
                                    type="text"
                                    className="form-input w-full h-[40px] 2xl:w-full 2xl:h-[50px] pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-italic"
                                    placeholder="Message"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 h-[500px] 2xl:h-[700px] bg-white rounded-md border border-gray-300 p-5 '>
                        <div className='flex flex-col space-y-3 '>
                            <div>
                            <h2 className='text-md font-PSB mt-3'>All members (212)</h2>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4 '>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                                </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4'>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                                </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4'>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                                </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4'>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4'>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4'>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row '>
                                <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden ">
                                    <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                                </div> 
                                <div className='ml-4'>
                                    <h2 className='text-md font-PSB'>Samvith Raj</h2>
                                    <h3 className='text-md text-gray-400 font-PSB '>ID: 923045734</h3>
                                </div>
                                </div>
                                <div className='flex space-x-4'>
                                    <button className="bg-white p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                                    <SendRoundedIcon className='text-gray-400 -rotate-45'  fontSize='large'/>
                                    </button>
                                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                                    <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-center '>
                                <div className='h-px w-full bg-gray-200'></div>
                            </div>
                            <button className="w-full h-[40px]  2xl:h-[50px] border border-k1 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
                                <PeopleRoundedIcon className="mr-2 text-[#B01E1D]" />
                                <span className="font-PB">View All Members</span>
                            </button>
                        </div> 
                    </div>
                </div>
            </main>
        </div>        
);
};

export default Messages;