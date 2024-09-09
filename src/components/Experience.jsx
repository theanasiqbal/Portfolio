

import React from 'react';
import experienceData from '../mydata/experienceData';

const Experience = () => {
  return (
    <div className='max-w-[1200px] flex flex-col items-center justify-center mx-auto md:mt-10 max-md:px-5' id='experience'>
      <h2 className='primary-color text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-gray-600 md:pb-2'>
        Work Experience
      </h2>
      <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {experienceData.map((experience, index) => (
        <div key={index} className='p-5 bg-[#161616] rounded-xl md:w-1/2 text-white mt-3'>
          <h1 className='text-xl md:text-3xl primary-color font-semibold md:tracking-wide'>
            {experience.title}
          </h1>
          <div className='md:flex w-full md:items-center md:justify-between mt-2'>
            <h3 className='font-medium md:text-xl whitespace-nowrap'>
              {experience.company}
            </h3>
            <span className='font-light whitespace-nowrap max-md:mt-3'>
              {experience.duration}
            </span>
          </div>
          <div className='mt-5 max-md:text-sm'>
            {experience.responsibilities.map((task, taskIndex) => (
              <p key={taskIndex}>- {task}</p>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Experience;
