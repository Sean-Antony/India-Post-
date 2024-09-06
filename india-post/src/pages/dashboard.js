import React from 'react'
import LeftPanel from "../components/leftpanel.js";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ContactlessRoundedIcon from '@mui/icons-material/ContactlessRounded';
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { RiDiscountPercentFill } from "react-icons/ri";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import { PiChartPieSliceFill } from "react-icons/pi";
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Header from "../components/Header.js";
import Card from "../components/detcard.js";
import logo from '../assets/logo.png';

const Dashboard = () => {
  const percentage = 75;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;
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
              Sales Overview
            </h1>
            <div className='flex flex-row'>
              <h2 className='font-PSB text-gray-500 lg:text-sm'>
                Sales Summary: 
              </h2>
              <h2 className='font-PSB lg:text-sm ml-2'>
                Counter No. 1
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
        <div className='space-y-4'> 
        <div className="grid grid-cols-4 gap-4">
          <div className="h-48 border border-gray-300 rounded-md">
            <Card 
              icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "purple-400" }}
              title="Total Sales" 
              amount="&#8377;3591.52" 
              monthAmount="&#8377;12598.77" 
              percentage="7.67" 
              isPositive={true} 
            />
          </div>
          <div className="h-48 border border-gray-300 rounded-md">
            <Card 
                icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "[#fda71f]" }}
                title="Cash Accepted" 
                amount="&#8377;1591.00" 
                monthAmount="&#8377;9598.77" 
                percentage="2.67" 
                isPositive={true} 
              />
          </div>
          <div className="h-48 border border-gray-300 rounded-md">
            <Card 
                icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "blue-400" }}
                title="Cash Transferred" 
                amount="&#8377;419.00" 
                monthAmount="&#8377;6798.54" 
                percentage="4.67" 
                isPositive={false} 
              />
          </div>
          <div className="h-48 border border-gray-300 rounded-md">
            <Card 
                icon={{ component: <RiDiscountPercentFill className="text-white" />, bgColor: "purple-400" }}
                title="Total Cash Balance" 
                amount="&#8377;3171.00" 
                monthAmount="&#8377;16798.54" 
              />
          </div>
        </div>
        <div className="grid grid-cols-10 gap-4 ">
          <div className="col-span-7 ">
            <div className='grid grid-rows-2 gap-4'>
              <div className='bg-white h-[500px] rounded-md border border-gray-300'>
                <div className='flex p-5 justify-between items-center'>              
                  <div className='flex items-center space-x-4'>
                    <div className="flex bg-k1 h-[50px] w-[50px] rounded-md text-3xl justify-center items-center"> 
                      <PiChartPieSliceFill className="text-white"/> 
                    </div>
                    <div className='flex flex-col'>
                      <h1 className='text-black font-PSB text-lg'>
                        Monthly Sales Data
                      </h1>
                      <div className='flex flex-row'>
                        <h2 className='font-PSB text-md text-gray-400'>
                          Monthly Sales Data:  
                        </h2>
                        <h2 className='font-PSB text-md'>
                          &#8377;12598.77
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <button className="w-[170px] h-[40px] 2xl:w-[150px] 2xl:h-[50px] border border-k1 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
                      <CalendarMonthRoundedIcon className="mr-2 text-k1" />
                      <span className="font-PB">Annual</span>
                      <ArrowDropDownRoundedIcon
                        className=" text-k1 mr-[-5px]"
                        style={{ fontSize: "2rem" }}/>
                    </button>
                    <button className="bg-white border border-k1 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                      <FilterAltRoundedIcon className='text-k1' />
                    </button>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-md border border-gray-300 p-5'>
                <div className='flex justify-between items-center mb-4'>              
                  <div className='flex items-center space-x-4'>
                    <div className="flex bg-k1 h-[50px] w-[50px] rounded-md text-3xl justify-center items-center"> 
                      <PiChartPieSliceFill className="text-white"/> 
                    </div>
                    <div className='flex flex-col'>
                      <h1 className='text-black font-PSB text-lg'>
                        Service Sales/ Payment
                      </h1>
                      <div className='flex flex-row'>
                        <h2 className='font-PSB text-md text-gray-400'>
                          Monthly Sales Data:
                        </h2>
                        <h2 className='font-PSB text-md'>
                          Feb 2024
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <button className="bg-white border border-k1 p-2 w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px] rounded-md flex items-center justify-center">
                      <FilterAltRoundedIcon className='text-k1' />
                    </button>
                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                      <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                    </button>
                  </div> 
                </div>

                <div className='w-full overflow-x-auto'>
                  <table className="w-full bg-white border-collapse font-PB table-fixed">
                    <thead>
                      <tr>
                        <th className="py-4 px-2 border-b text-start text-gray-400">
                          Services
                        </th>
                        <th className="py-4 px-4 border-b text-center text-gray-400">
                          Quantity
                        </th>
                        <th className="py-4 px-4 border-b text-center text-gray-400">
                          Duration
                        </th>
                        <th className="py-4 px-4 border-b text-center text-gray-400">
                          Status
                        </th>
                        <th className="py-4 px-4 border-b text-end text-gray-400">
                          View Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-15">
                        <td className="py-3 px-2 border-b text-start">
                          Bags Received
                        </td>
                        <td className="py-3 px-4 border-b text-center">10</td>
                        <td className="py-3 px-4 border-b text-center">&#8377;866.77</td>
                        <td className="py-3 px-4 border-b text-center">
                          <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-full flex justify-center items-center text-[14px]">
                            <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Success
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b text-end">
                          <MoreHorizRoundedIcon style={{ fontSize: "2rem" }}/>
                        </td>
                      </tr>

                      <tr className="h-15">
                        <td className="py-3 px-2 border-b text-start">
                          Bags Dispatched
                        </td>
                        <td className="py-3 px-4 border-b text-center">15</td>
                        <td className="py-3 px-4 border-b text-center">&#8377;866.77</td>
                        <td className="py-3 px-4 border-b text-center">
                          <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-full flex justify-center items-center text-[14px]">
                            <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Success
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b text-end">
                          <MoreHorizRoundedIcon style={{ fontSize: "2rem" }}/>
                        </td>
                      </tr>

                      <tr className="h-15">
                        <td className="py-3 px-2 border-b text-start">
                          Articles Managed
                        </td>
                        <td className="py-3 px-4 border-b text-center">1200</td>
                        <td className="py-3 px-4 border-b text-center">&#8377;866.77</td>
                        <td className="py-3 px-4 border-b text-center">
                          <button className="bg-[#c4fff5] w-[100px] py-[3px] rounded-full flex justify-center items-center text-[14px]">
                            <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Success
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b text-end">
                          <MoreHorizRoundedIcon style={{ fontSize: "2rem" }}/>
                        </td>
                      </tr>

                      <tr className="h-15">
                        <td className="py-3 px-2 border-b text-start">
                          Pending Bags
                        </td>
                        <td className="py-3 px-4 border-b text-center">4</td>
                        <td className="py-3 px-4 border-b text-center">&#8377;866.77</td>
                        <td className="py-3 px-4 border-b text-center">
                          <button className="bg-[#fef3cc] w-[100px] py-[3px] rounded-full flex justify-center items-center text-[14px]">
                            <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Pending
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b text-end">
                          <MoreHorizRoundedIcon style={{ fontSize: "2rem" }}/>
                        </td>
                      </tr>

                      <tr className="h-15">
                        <td className="py-3 px-2 border-b text-start">
                          Flag Bag
                        </td>
                        <td className="py-3 px-4 border-b text-center">2</td>
                        <td className="py-3 px-4 border-b text-center">&#8377;866.77</td>
                        <td className="py-3 px-4 border-b text-center">
                          <button className="bg-[#ec7876] w-[100px] py-[3px] rounded-full flex justify-center items-center text-[14px]">
                            <FiberManualRecordRoundedIcon style={{ fontSize: "12px" }}/> Flag
                          </button>
                        </td>
                        <td className="py-3 px-4 border-b text-end">
                          <MoreHorizRoundedIcon style={{ fontSize: "2rem" }}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
          <div className="col-span-3">
            <div className='flex flex-col gap-4'>
              <div className='flex h-[350px] bg-white p-5 rounded-md border border-gray-300'>
                <div className='flex flex-col justify-between w-full'>
                  <div className='flex flex-row justify-between items-center'>
                    <div className="flex bg-k1 h-[50px] w-[50px] rounded-md text-3xl justify-center items-center"> 
                      <CreditCardRoundedIcon className="text-white" /> 
                    </div>
                    <div className='flex'>
                      <button className="bg-info text-[#0f5666] font-PB p-[10px] h-[50px] w-[150px] rounded-full flex items-center justify-center space-x-2">
                        <StoreRoundedIcon className="text-[#0f5666]" />
                        <span className="text-[14px]">Counter 1</span>
                      </button>
                    </div>
                  </div>
                  <div >
                    <p className="text-lg font-PSB">&#8377;4050.00</p>
                    <p className="text-gray-500 font-PSB ">Total Transactions</p>
                  </div>
                  <div className='flex justify-center '>
                    <div className='h-[2px] w-full bg-gray-200'></div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='flex flex-col justify-between space-y-7 w-full'>
                      <div >
                        <p className="text-lg font-PSB">&#8377;1209.00</p>
                        <p className="text-gray-500 font-PSB ">Cash in Hand</p>
                      </div>
                      <div>
                        <p className="text-lg font-PSB">&#8377;2100.00</p>
                        <p className="text-gray-500 font-PSB ">Targeted Sales</p>
                      </div>
                    </div>
                      <div class="relative flex justify-center items-center">
                        <svg width="100" height="100" viewBox="0 0 120 120" class="rotate-[-90deg]">
                          <circle
                            cx="60" 
                            cy="60" 
                            r="50"
                            fill="none"
                            stroke="#e6e6e6" 
                            stroke-width="10"
                          />
                          <circle
                            cx="60" 
                            cy="60" 
                            r="50"
                            fill="none"
                            stroke="#00bfa6"
                            stroke-width="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            stroke-linecap="round"
                            style={{
                              transition: 'stroke-dashoffset 0.5s ease-in-out',
                            }}
                          />
                        </svg>

                        <div class="absolute text-center">
                          <h2 class="text-xl font-bold">{percentage}%</h2>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className=' h-[650px] bg-white rounded-md border border-gray-300 p-5'>
                <div className='flex justify-between items-center mb-4'>              
                  <div className='flex items-center space-x-4'>
                    <div className="flex bg-k1 h-[50px] w-[50px] rounded-md justify-center items-center"> 
                      <AccessTimeFilledRoundedIcon className="text-white" fontSize='large'/> 
                    </div>
                    <div className='flex flex-col'>
                      <h1 className='text-black font-PSB text-lg'>
                        Recent Transactions
                      </h1>
                        <h2 className='font-PSB text-md text-gray-400'>
                          22 Mar, 2024
                        </h2>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                      <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                    </button>
                  </div> 
                </div>
                <div className='flex justify-center mb-4'>
                    <div className='h-px w-full bg-gray-200'></div>
                </div>
                <div className='flex flex-col space-y-5'>
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
                    <div>
                      <h2 className='text-md font-PSB'>&#8377;126.00</h2>
                    </div>
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
                    <div>
                      <h2 className='text-md font-PSB'>&#8377;126.00</h2>
                    </div>
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
                    <div>
                      <h2 className='text-md font-PSB'>&#8377;126.00</h2>
                    </div>
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
                    <div>
                      <h2 className='text-md font-PSB'>&#8377;126.00</h2>
                    </div>
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
                    <div>
                      <h2 className='text-md font-PSB'>&#8377;126.00</h2>
                    </div>
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
                    <div>
                      <h2 className='text-md font-PSB'>&#8377;126.00</h2>
                    </div>
                  </div>
                  <button className="w-full h-[40px]  2xl:h-[50px] border border-k1 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
                    <PeopleRoundedIcon className="mr-2 text-[#B01E1D]" />
                    <span className="font-PB">View More Customers</span>
                  </button>
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white h-[550px] border border-gray-300 rounded-md p-5'>
            <div className='flex justify-between items-center mb-4'>              
              <div className='flex items-center space-x-4'>
                <div className="flex bg-k1 h-[50px] w-[50px] rounded-md justify-center items-center"> 
                  <ShoppingBasketRoundedIcon className="text-white" fontSize='large'/> 
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-black font-PSB text-lg'>
                    Bag Details
                  </h1>
                    <h2 className='font-PSB text-md text-gray-400'>
                      Duration: 1 Feb - 1Mar
                    </h2>
                </div>
              </div>
              <div className='flex space-x-4'>
                <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                  <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                </button>
              </div> 
            </div>
            <div className='w-full overflow-x-auto'>
              <table className="w-full h-full bg-white border-collapse font-PB table-fixed">
                <thead>
                  <tr className='h-20'>
                    <th className='py-4 px-2 border-b text-start text-gray-400'>Bagging Status</th>
                    <th className='py-4 px-2 border-b text-end text-gray-400'>Quantities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Articles Bagged</td>
                    <td className='py-4 px-2 border-b text-end'>50</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Articles Not Bagged</td>
                    <td className='py-4 px-2 border-b text-end'>0</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Opened Bags</td>
                    <td className='py-4 px-2 border-b text-end'>10</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Opened Bags</td>
                    <td className='py-4 px-2 border-b text-end'>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='bg-white h-[550px] border border-gray-300 rounded-md p-5'>
            <div className='flex justify-between items-center mb-4'>              
              <div className='flex items-center space-x-4'>
                <div className="flex bg-k1 h-[50px] w-[50px] rounded-md justify-center items-center"> 
                  <PaidRoundedIcon className="text-white" fontSize='large'/> 
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-black font-PSB text-lg'>
                    Payment Types
                  </h1>
                    <h2 className='font-PSB text-md text-gray-400'>
                      Duration: 1 Feb - 1Mar
                    </h2>
                </div>
              </div>
              <div className='flex space-x-4'>
                <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                  <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                </button>
              </div> 
            </div>
            <div className='w-full overflow-x-auto'>
              <table className="w-full h-full bg-white border-collapse font-PB table-fixed">
                <thead>
                  <tr className='h-20'>
                    <th className='py-4 px-2 border-b text-start text-gray-400'>Tender Types</th>
                    <th className='py-4 px-2 border-b text-end text-gray-400'>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Articles Bagged</td>
                    <td className='py-4 px-2 border-b text-end'>50</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Articles Not Bagged</td>
                    <td className='py-4 px-2 border-b text-end'>0</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Opened Bags</td>
                    <td className='py-4 px-2 border-b text-end'>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="w-full h-[40px]  2xl:h-[50px] border border-k1 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
              <span className="font-PB">View More Customers</span>
              <ArrowForwardIosRoundedIcon className="ml-2 text-[#B01E1D]" />
            </button>
          </div>
          <div className='bg-white h-[550px] border border-gray-300 rounded-md p-5'>
            <div className='flex justify-between items-center mb-4'>              
              <div className='flex items-center space-x-4'>
                <div className="flex bg-k1 h-[50px] w-[50px] rounded-md justify-center items-center"> 
                  <CreditCardRoundedIcon className="text-white" fontSize='large'/> 
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-black font-PSB text-lg'>
                    Prepaid Types
                  </h1>
                    <h2 className='font-PSB text-md text-gray-400'>
                      Duration: 1 Feb - 1Mar
                    </h2>
                </div>
              </div>
              <div className='flex space-x-4'>
                <button className='flex items-center justify-center w-[40px] h-[40px] 2xl:w-[50px] 2xl:h-[50px]'>
                  <MoreHorizRoundedIcon className='text-gray-400 ' fontSize='large'/>
                </button>
              </div> 
            </div>
            <div className='w-full overflow-x-auto'>
              <table className="w-full h-full bg-white border-collapse font-PB table-fixed">
                <thead>
                  <tr className='h-20'>
                    <th className='py-4 px-2 border-b text-start text-gray-400'>Prepaid Types</th>
                    <th className='py-4 px-2 border-b text-end text-gray-400'>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Articles Bagged</td>
                    <td className='py-4 px-2 border-b text-end'>50</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Articles Not Bagged</td>
                    <td className='py-4 px-2 border-b text-end'>0</td>
                  </tr>
                  <tr className='h-20'>
                    <td className='py-4 px-2 border-b text-start'>Opened Bags</td>
                    <td className='py-4 px-2 border-b text-end'>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="w-full h-[40px]  2xl:h-[50px] border border-k1 bg-white rounded-lg flex items-center justify-center text-[14px] font-bold">
              <span className="font-PB">View More Customers</span>
              <ArrowForwardIosRoundedIcon className="ml-2 text-[#B01E1D]" />
            </button>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard