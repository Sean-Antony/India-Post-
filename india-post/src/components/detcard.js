import React from 'react';
import { ArrowUpward, ArrowDownward, ArrowForward } from '@mui/icons-material';

const Card = ({ icon, title, amount, monthAmount, percentage, isPositive }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md w-full h-full">
      <div className="flex items-center">

        <div className={`p-2 rounded-md bg-${icon.bgColor} text-lg 2xl:text-3xl`}>
            {icon.component}
        </div>
        <div className="ml-3">
          <p className="text-sm 2xl:text-lg font-PSB">{amount}</p>
          <p className="text-sm 2xl:text-md text-gray-500 font-PSB ">{title}</p>
        </div>
      </div>

      <div className="flex flex-row mt-4 justify-between">
        <p className="text-sm text-gray-400 font-PSB">
          This month: <span className="text-k1 font-PSB">{monthAmount}</span>
        </p>

        <div className="flex items-center2xl:min-h-[24px]">
          {percentage !== undefined ? (
            <>
              {isPositive ? (
                <ArrowUpward className="text-green-500" />
              ) : (
                <ArrowDownward className="text-red-500" />
              )}
              <span className={`ml-1 text-sm font-PSB ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {percentage}%
              </span>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <button className="mt-1 2xl:mt-5">
        <div className='w-full h-px bg-gray-200 mb-1 2xl:mb-4'></div>
        <div className="text-sm font-PSB text-gray-600 flex items-center justify-between w-full mb-[-5px] 2xl:mb-0">
          See Details
          <ArrowForward />
        </div>
      </button>
    </div>
  );
};

export default Card;