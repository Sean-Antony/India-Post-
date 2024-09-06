import React from 'react';
import { ArrowUpward, ArrowDownward, ArrowForward } from '@mui/icons-material';

const Card = ({ icon, title, amount, monthAmount, percentage, isPositive }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md w-full h-full">
      <div className="flex items-center">

        <div className={`p-2 rounded-md bg-${icon.bgColor} text-3xl`}>
            {icon.component}
        </div>
        <div className="ml-3">
          <p className="text-lg font-PSB">{amount}</p>
          <p className="text-gray-500 font-PSB ">{title}</p>
        </div>
      </div>

      <div className="flex flex-row mt-4 justify-between">
        <p className="text-sm text-gray-400 font-PSB">
          This month: <span className="text-k1 font-PSB">{monthAmount}</span>
        </p>

        <div className="flex items-center min-h-[24px]">
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

      <button className="mt-5">
        <div className='w-full h-px bg-gray-200 mb-4'></div>
        <div className="text-sm font-PSB text-gray-600 flex items-center justify-between w-full">
          See Details
          <ArrowForward />
        </div>
      </button>
    </div>
  );
};

export default Card;