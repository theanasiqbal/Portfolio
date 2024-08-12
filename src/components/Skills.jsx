import React, { useRef } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import { motion } from "framer-motion"
import { CiCircleCheck } from "react-icons/ci";


const Skills = () => {
    
  return (
    <>
    <div className='max-w-[1200px] flex items-center justify-center mx-auto ' id='skills'>
    <h2 className='primary-color text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-gray-600 md:pb-2'> 
        My  Tech  Stack
    </h2>
    </div>
    <div className='bg-black text-gray-400 md:h-[150px] md:mt-10 max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>

    

    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1, }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(241,101,41,0.3)] hover:drop-shadow-[0_0_30px_rgba(241,101,41,0.7)]'>
        <img src={html} alt='Html' className=''/>
        <p className='mt-2'>HTML</p>
    </motion.div> 
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5, }}
        whileInView={{ opacity: 1, scale: 1, }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(3,155,229,0.3)] hover:drop-shadow-[0_0_30px_rgba(3,155,229,0.7)]'>
        <img src={css} alt='Css'/>
        <p className='mt-2'>CSS</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(255,214,0,0.3)] hover:drop-shadow-[0_0_30px_rgba(255,214,0,0.7)]'>
        <img src={javascript} alt='Javascript'/>
        <p className='mt-2'>JavaScript</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(0,216,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(0,216,255,0.7)]'>
        <img src={react} alt='React'/>
        <p className='mt-2'>React.js</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(0,216,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(0,216,255,0.7)]'>
        <img src={tailwind} alt='Tailwind'/>
        <p className='mt-2'>Tailwind</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(255,225,95,0.3)] hover:drop-shadow-[0_0_30px_rgba(255,225,95,0.7)]'>
        <img src={python} alt='Python'/>
        <p className='mt-2'>Python</p>
    </motion.div>

    

    
    </div>


   

    </>
  )
}

export default Skills