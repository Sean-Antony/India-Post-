import React from 'react';
import LeftPanel from '../components/LoginLeftPanel';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { GoDotFill } from "react-icons/go";
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import { BiSolidMessageDots } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import logo from '../assets/logo.png';

const Features = () => {
  return (
    <div className='bg-[#F7F7F9] flex'>
          <div className='flex flex-col'>
            <LeftPanel/>
          </div>
          <div className='flex-1 flex flex-col'>
            <div className='flex items-center justify-between p-4 mt-[10px] mr-[80px] ml-[70px]'>
              <img 
                src={logo}
                alt='India Post Logo' 
                className='h-[100px] w-auto'
              />
              <div className='flex space-x-4'>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-PSB py-3 px-5 rounded-md flex items-center">
                  <ErrorRoundedIcon className='mr-2' />
                  Quick Access
                </button>
                <button type="button" className="border border-[#B01E1D] bg-[#F7F7F9] text-black font-PSB py-3 px-5 rounded-md flex items-center">
                  <HelpRoundedIcon className='mr-2' />
                  Contact Help
                </button>
                <div className='flex justify-center'>
                  <div className='h-[50px] w-px bg-gray-300'></div>
                </div>
                <button type="button" className='border border-gray-300 bg-white py-3 px-3 rounded-md flex items-center'>
                <BiSolidMessageDots className='text-[25px] text-gray-400'/>
                </button>
                <button type="button" className='border border-gray-300 bg-white py-3 px-3 rounded-md flex items-center'>
                <FaBell className='text-[25px] text-gray-400'/>
                </button>
              </div>
            </div>
            <div className='flex justify-center'>
                  <div className='h-px w-[1200px] bg-gray-300 mb-[30px]'></div>
            </div>
            <div className='flex flex-col justify-between px-[90px] space-y-4'>
              <h2 className='font-PB text-lg '>Welcome Back, Samvith</h2>
              <div className='flex flex-row justify-between'>
                <card className='flex h-[180px] w-[375px] justify-between items-center border border-gray-300 rounded-md bg-white'>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden ml-[40px] mr-[-60px] mt-[-60px]">
                  <img className="h-full w-full object-cover" src={logo} alt='Profile' />
                  </div> 
                  <div className='flex flex-col space-y-5'>
                    <div>
                    <h2 className='text-lg font-PSB'>Samvith Raj</h2>
                    <h3 className='text-sm text-gray-400 font-PSB'>ID: 923045734</h3>
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-400 font-PSB'>Office ID</h3>
                    <h2 className='text-lg font-PSB'>SP2908512653</h2>
                    </div>
                  </div>
                  <button type="button" className='bg-white py-2 px-3 rounded-md flex items-center text-gray-500 mr-[20px] ml-[-60px] mt-[-80px]'>
                  <MoreHorizRoundedIcon fontSize='large'/>
                  </button>
                </card>
                <card className='flex h-[180px] w-[800px] justify-between items-center border border-gray-300 rounded-md bg-white'>
                  <div className='flex flex-row justify-between space-x-[80px] ml-[50px]'>
                    <div className='flex flex-col justify-between space-y-5'>
                      <div>
                        <h3 className='text-sm text-gray-400 font-PSB'>Postal Network</h3>
                        <h2 className='text-lg font-PSB'>Ahmedabad NSH</h2>
                      </div>
                      <div>
                        <h3 className='text-sm text-gray-400 font-PSB'>Counter No</h3>
                        <h2 className='text-lg font-PSB'>1</h2>
                      </div>                     
                    </div>
                    <div className='flex flex-col justify-between space-y-5'>
                      <div>
                        <h3 className='text-sm text-gray-400 font-PSB'>Email ID</h3>
                        <h2 className='text-lg font-PSB'>samvith12@gmail.com</h2>
                      </div>
                      <div>
                        <h3 className='text-sm text-gray-400 font-PSB '>Phone</h3>
                        <h2 className='text-lg font-PSB '>+91 9832472384</h2>
                      </div>                     
                    </div>
                    <div className='flex flex-col justify-between space-y-5'>
                    <div>
                        <h3 className='text-sm text-gray-400 font-PSB'>Bio</h3>
                        <h2 className='text-lg font-PSB'>Counter Manager</h2>
                      </div>
                      <div>
                        <h3 className='text-sm text-gray-400 font-PSB '>Location</h3>
                        <h2 className='text-lg font-PSB '>Ahmedabad</h2>
                      </div>                     
                    </div>
                  </div>
                </card>                
              </div>
            </div>
            <div className='flex justify-center '>
              <div className='h-px w-[1200px] bg-gray-300 mt-[30px] mb-[15px]'></div>
            </div>
            <div className='flex items-center justify-between mr-[90px] mb-[15px]'>
            <div className='flex flex-col justify-between px-[90px]'>
              <h2 className='font-PB text-lg '>Services</h2>
              <div className='flex flex-row'>
              <h3 className='text-md text-gray-400 font-PSB '>Counter No:</h3>
              <h3 className='text-md font-PB ml-1'>1</h3>
              </div>
            </div>
              <div>
              <button className="bg-info text-[#0f5666] font-PB p-[10px] h-[50px] w-[150px] rounded-lg flex items-center space-x-2">
                <CalendarMonthRoundedIcon className="text-[#0f5666] ml-[10px]" />
                <span className="text-[13px] pt-[4px]">22 Mar 2024</span>
              </button>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4 ml-[90px] mr-[70px] '>
              <div className='mb-2'>
                <card className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md'>
                  <span className='w-[5px] bg-[#B01E1D]'></span>
                  <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                  <div className=" h-[40px] w-[40px] bg-[#B01E1D] p-2 rounded-md ml-[20px] mt-[20px] flex justify-center"> 
                    <MailRoundedIcon className="text-white" fontSize="medium" /> 
                  </div>
                  <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
                    <GoDotFill className='text-lg text-[#0F5133] mr-[3px]'/>
                    <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
                  </div>
                  <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
                    <ArrowOutwardIcon className='mt-[-3px]'/>
                  </button>
                  </div>
                  <div className='ml-[20px] mt-[15px] mb-[5px]'>
                    <h2 className='font-PB text-lg'>Mail</h2>
                  </div>
                  <div>
                    <h3 className='text-sm text-gray-400 font-PSB ml-[20px]'>Effortlessly send and recieve mail seamless tracking and delivery</h3>
                  </div>
                  </div>
                </card>
              </div>
              <div>
              <card className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md'>
                  <span className='w-[5px] bg-[#FCA61F]'></span>
                  <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                  <div className=" h-[40px] w-[40px] bg-[#FCA61F] p-2 rounded-md ml-[20px] mt-[20px] flex justify-center"> 
                    <LanguageIcon className="text-white" fontSize="medium" /> 
                  </div>
                  <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
                    <GoDotFill className='text-lg text-[#0F5133] mr-[3px]'/>
                    <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
                  </div>
                  <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
                    <ArrowOutwardIcon className='mt-[-3px]'/>
                  </button>
                  </div>
                  <div className='ml-[20px] mt-[15px] mb-[5px]'>
                    <h2 className='font-PB text-lg'>International Mail</h2>
                  </div>
                  <div>
                    <h3 className='text-sm text-gray-400 font-PSB ml-[20px]'>Expand your reach globally with secure international mail services</h3>
                  </div>
                  </div>
                </card>
              </div>
              <div>
              <card className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md'>
                  <span className='w-[5px] bg-[#7288FF]'></span>
                  <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                  <div className=" h-[40px] w-[40px] bg-[#7288FF] p-2 rounded-md ml-[20px] mt-[20px] flex justify-center"> 
                    <ArticleIcon className="text-white" fontSize="medium" /> 
                  </div>
                  <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
                    <GoDotFill className='text-lg text-[#0F5133] mr-[3px]'/>
                    <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
                  </div>
                  <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
                    <ArrowOutwardIcon className='mt-[-3px]'/>
                  </button>
                  </div>
                  <div className='ml-[20px] mt-[15px] mb-[5px]'>
                    <h2 className='font-PB text-lg'>Finance & Insurance</h2>
                  </div>
                  <div>
                    <h3 className='text-sm text-gray-400 font-PSB ml-[20px]'>Manage your finances and protect your shipment with ease</h3>
                  </div>
                  </div>
                </card>
              </div>
              <div>
              <card className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md'>
                  <span className='w-[5px] bg-[#bf6ef1]'></span>
                  <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                  <div className=" h-[40px] w-[40px] bg-[#bf6ef1] p-2 rounded-md ml-[20px] mt-[20px] flex justify-center"> 
                    <CreditCardRoundedIcon className="text-white" fontSize="medium" /> 
                  </div>
                  <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
                    <GoDotFill className='text-lg text-[#0F5133] mr-[3px]'/>
                    <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
                  </div>
                  <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
                    <ArrowOutwardIcon className='mt-[-3px]'/>
                  </button>
                  </div>
                  <div className='ml-[20px] mt-[15px] mb-[5px]'>
                    <h2 className='font-PB text-lg'>E-Payments</h2>
                  </div>
                  <div>
                    <h3 className='text-sm text-gray-400 font-PSB ml-[20px] mr-[20px]'>Conviniently handle payments for postage and other services online</h3>
                  </div>
                  </div>
                </card>
              </div>
              <div>
              <card className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md'>
                  <span className='w-[5px] bg-[#6cedc4]'></span>
                  <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                  <div className=" h-[40px] w-[40px] bg-[#6cedc4] p-2 rounded-md ml-[20px] mt-[20px] flex justify-center"> 
                    <TimelineRoundedIcon className="text-white" fontSize="medium" /> 
                  </div>
                  <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
                    <GoDotFill className='text-lg text-[#0F5133] mr-[3px]'/>
                    <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
                  </div>
                  <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
                    <ArrowOutwardIcon className='mt-[-3px]'/>
                  </button>
                  </div>
                  <div className='ml-[20px] mt-[15px] mb-[5px]'>
                    <h2 className='font-PB text-lg'>Product Sales</h2>
                  </div>
                  <div>
                    <h3 className='text-sm text-gray-400 font-PSB ml-[20px]'>Explore a wide range of postal products and services tailored to your needs</h3>
                  </div>
                  </div>
                </card>
              </div>
              <div>
              <card className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md'>
                  <span className='w-[5px] bg-[#8a76fc]'></span>
                  <div className='flex flex-col'>
                  <div className='flex flex-row justify-between'>
                  <div className=" h-[40px] w-[40px] bg-[#8a76fc] p-2 rounded-md ml-[20px] mt-[20px] flex justify-center"> 
                    <FileCopyRoundedIcon className="text-white" fontSize="medium" /> 
                  </div>
                  <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
                    <GoDotFill className='text-lg text-[#0F5133] mr-[3px]'/>
                    <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
                  </div>
                  <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
                    <ArrowOutwardIcon className='mt-[-3px]'/>
                  </button>
                  </div>
                  <div className='ml-[20px] mt-[15px] mb-[5px]'>
                    <h2 className='font-PB text-lg'>Compare & Book</h2>
                  </div>
                  <div>
                    <h3 className='text-sm text-gray-400 font-PSB ml-[20px]'>Find the best postal services for your requirements and book with confidence</h3>
                  </div>
                  </div>
                </card>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Features;