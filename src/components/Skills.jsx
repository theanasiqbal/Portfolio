import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <>
    <div className='max-w-[1200px] flex items-center justify-center mx-auto'>
    <h2 className='text-gray-700 text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-cyan-600 md:pb-2'> 
        My  Tech  Stack
    </h2>
    </div>
    <div className='bg-black text-gray-400 md:h-[150px] md:mt-10 max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center'>

    

    <div className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] '>
        <img src={html} alt='Html' className=''/>
        <p className='mt-2'>HTML</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px]'>
        <img src={css} alt='Html'/>
        <p className='mt-2'>CSS</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px]'>
        <img src={javascript} alt='Html'/>
        <p className='mt-2'>JavaScript</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px]'>
        <img src={react} alt='Html'/>
        <p className='mt-2'>React.js</p>
    </div>
    <div className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px]'>
        <img src={tailwind} alt='Html'/>
        <p className='mt-2'>Tailwind</p>
    </div>

    </div>
    </>
  )
}

export default Skills