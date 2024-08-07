import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { GoDotFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Card = ({ icon: Icon, bgColor, title, description}) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/home');
    }
    return   (
    <div className='flex h-[180px] w-[375px] border border-gray-300 bg-white rounded-md' onClick={handleClick}>
      <span className={`w-[5px] ${bgColor}`}></span>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
          <div className={`h-[40px] w-[40px] ${bgColor} p-2 rounded-md ml-[20px] mt-[20px] flex justify-center`}>
            <Icon className="text-white" fontSize="medium" />
          </div>
          <div className='h-[35px] w-[90px] bg-[#C5FFF4] rounded-[70px] mt-[20px] ml-[140px] flex justify-center items-center'>
            <GoDotFill className='text-lg text-[#0F5133] mr-[3px]' />
            <h3 className='font-PSB text-sm text-[#0F5133]'>Active</h3>
          </div>
          <button className='h-[40px] w-[40px] border border-[#F7F7F9] bg-[#F7F7F9] mt-[18px] ml-[20px] mr-[20px] rounded-md'>
            <ArrowOutwardIcon className='mt-[-3px]' />
          </button>
        </div>
        <div className='ml-[20px] mt-[15px] mb-[5px]'>
          <h2 className='font-PB text-lg'>{title}</h2>
        </div>
        <div>
          <h3 className='text-sm text-gray-400 font-PSB ml-[20px]'>{description}</h3>
        </div>
      </div>
    </div>
  );
}
export default Card;