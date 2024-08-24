import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

function LeftPanel({currentStep}) {
  const steps = [
    {
      label: 'Register/Login ID',
      icon: <LoginRoundedIcon />,
      completedIcon: <CheckCircleRoundedIcon />,
    },
    {
      label: 'Choose your services',
      icon: <EmailRoundedIcon />,
      completedIcon: <CheckCircleRoundedIcon />,
    },
    {
      label: 'Instructions and Features',
      icon: <CreateRoundedIcon />,
      completedIcon: <CheckCircleRoundedIcon />,
    },
  ];
  return (
    <div className="flex flex-col h-screen bg-k1 text-white p-4 md:p-8 lg:w-1/4 lg:min-w-[300px] hidden lg:block">
      <div className="flex flex-col flex-grow items-center justify-between">
        <div className="flex flex-col items-center mb-8">
          <img src="logo.png" alt="India Post Logo" className="w-20 mb-4" />
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-center">Welcome to India Post</h1>
          <p className="text-sm md:text-base mb-8 xl:mb-24 2xl:mb-40 text-center">
            You are just a few steps away from <br /> accessing the India Post system.
          </p>
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <div className="flex flex-col align-left" key={index}>
                <p className='text-xs md:text-sm font-PM opacity-70 ml-10'>{`STEP ${index + 1}`}</p>
                <span
                  className={`flex items-center gap-x-2 md:gap-x-4 mt-2 font-PSB ${
                    index === currentStep ? 'text-yellow-500' : ''
                  } ${
                    index < currentStep ? 'text-yellow-500' : ''
                  }`}
                >
                  <span className={`${index < currentStep ? 'text-green-500' : ''}`}>
                  {index < currentStep ? step.completedIcon : step.icon}
                  </span>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col align-left mb-2 xl:mt-[100px] 2xl:mt-[250px]">
          <p className="text-sm md:text-sm font-PM opacity-70 mb-2">New Updates available! v_4.9.3</p>
          <h3 className="text-sm md:text-sm py-1 font-PSB">Update Now</h3>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
