import React from 'react'

const Experience = () => {
  return (
    <>
    <div className='max-w-[1200px] flex flex-col items-center justify-center mx-auto mt-10' id='skills'>
    <h2 className='primary-color text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-gray-600 md:pb-2'> 
        Work Experience
    </h2>
    <div className='p-4 w-full text-white mt-3'>
    <h1 className='text-xl md:text-3xl primary-color font-semibold md:tracking-wide'>Front-end developer Intern</h1>
    <div className='flex  w-1/3 justify-between mt-2'>
    <h3 className=' font-medium md:text-xl whitespace-nowrap'>Web Microsystems</h3>
    <span className='font-light whitespace-nowrap max-md:ms-10'>March'24 - June'24</span>
    </div>
    <div className='mt-5'>
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