import React, { useState } from 'react';
import LeftPanel from '../components/LoginLeftPanel';
import Card from '../components/card';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import { BiSolidMessageDots } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import logo from '../assets/logo.png';

const Features = () => {
  
  const [currentStep, setCurrentStep] = useState(2);
  
  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-[#F7F7F9]'>
      <LeftPanel currentStep={currentStep}/>
      <div className='flex-1 flex flex-col xl:mx-3'>
        <header className="flex items-center justify-between p-4 lg:mx-16 xl:mr-[80px]">
          <img 
            src={logo}
            alt='India Post Logo' 
            className='h-[100px] w-auto'
          />
          <div className='flex space-x-4'>
            <button type="button" className="border border-k1 bg-[#F7F7F9] text-black font-bold py-2 px-4 rounded-md flex items-center">
              <ErrorRoundedIcon className='mr-2 text-k1' />
               Quick Access
            </button>
            <button type="button" className="border border-k1 bg-[#F7F7F9] text-black font-bold py-2 px-4 rounded-md flex items-center">
              <HelpRoundedIcon className='mr-2 text-k1' />
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
        </header>
        <div className='flex justify-center '>
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
            <div className='grid grid-cols-3 gap-4 ml-[90px] mr-[70px]'>
          <div className='mb-2'>
          <Card
            icon={MailRoundedIcon}
            bgColor="bg-[#B01E1D]"
            title="Mail"
            description="Effortlessly send and receive mail with seamless tracking and delivery."
          />
        </div>
        <div className='mb-2'>
          <Card
            icon={LanguageIcon}
            bgColor="bg-[#FCA61F]"
            title="International Mail"
            description="Expand your reach globally with secure international mail services."
            />
        </div>
        <div className='mb-2'>
          <Card
            icon={ArticleIcon}
            bgColor="bg-[#7288FF]"
            title="Finance & Insurance"
            description="Manage your finances and protect your shipment with ease."
          />
        </div>
        <div className='mb-2'>
          <Card
            icon={CreditCardRoundedIcon}
            bgColor="bg-[#bf6ef1]"
            title="E-Payments"
            description="Conveniently handle payments for postage and other services online."
          />
        </div>
        <div className='mb-2'>
          <Card
            icon={TimelineRoundedIcon}
            bgColor="bg-[#6cedc4]"
            title="Product Sales"
            description="Explore a wide range of postal products and services tailored to your needs."
          />
        </div>
        <div className='mb-2'>
          <Card
            icon={FileCopyRoundedIcon}
            bgColor="bg-[#8a76fc]"
            title="Compare & Book"
            description="Find the best postal services for your requirements and book with confidence."
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;