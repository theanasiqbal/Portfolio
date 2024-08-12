import React from 'react'

const Experience = () => {
  return (
    <>
    <div className='max-w-[1200px] flex flex-col items-center justify-center mx-auto md:mt-10 max-md:px-5' id='experience'>
    <h2 className='primary-color text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-gray-600 md:pb-2'> 
        Work Experience
    </h2>
    <div className='p-5  bg-[#161616] rounded-xl  md:w-1/2 text-white mt-3'>
    <h1 className='text-xl md:text-3xl primary-color font-semibold md:tracking-wide'>Front-end developer Intern</h1>
    <div className='md:flex  w-full md:items-center md:justify-between mt-2'>
    <h3 className=' font-medium md:text-xl whitespace-nowrap'>Web Microsystems</h3>
    <span className='font-light  whitespace-nowrap max-md:mt-3'>March'24 - June'24</span>
    </div>
    <div className='mt-5 max-md:text-sm'>
    <p>- Developed responsive web applications with HTML, CSS, and JavaScript.</p>
    <p>- Created dynamic UIs using React.js.</p>
    <p>- Used Git and GitHub for version control.</p>
    <p>- Designed and optimized web pages for performance and usability.</p>
    <p>- Collaborated in team meetings and code reviews.</p>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Experience