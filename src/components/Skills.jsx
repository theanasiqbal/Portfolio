import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import { motion } from "framer-motion"


const Skills = () => {
  return (
    <>
    <div className='max-w-[1200px] flex items-center justify-center mx-auto'>
    <h2 className='text-gray-700 text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-cyan-600 md:pb-2'> 
        My  Tech  Stack
    </h2>
    </div>
    <div className='bg-black text-gray-400 md:h-[150px] md:mt-10 max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center'>

    

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
        <img src={css} alt='Html'/>
        <p className='mt-2'>CSS</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(255,214,0,0.3)] hover:drop-shadow-[0_0_30px_rgba(255,214,0,0.7)]'>
        <img src={javascript} alt='Html'/>
        <p className='mt-2'>JavaScript</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(0,216,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(0,216,255,0.7)]'>
        <img src={react} alt='Html'/>
        <p className='mt-2'>React.js</p>
    </motion.div>
    <motion.div 
        whileHover={{scale: 1.1}}
        initial={{ opacity: 0, scale: 0.5,  }}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer drop-shadow-[0_0_16px_rgba(0,216,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(0,216,255,0.7)]'>
        <img src={tailwind} alt='Html'/>
        <p className='mt-2'>Tailwind</p>
    </motion.div>

    

    
    </div>


    {/* Taskbar  */}

    <div className='max-w-[1200px] flex items-center justify-center mx-auto mt-10'>
        <div class="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100">
        <a href="#" class="block w-full h-full">
            <div class="w-full">
                <p class="mb-4 text-2xl font-light text-gray-700 dark:text-white">
                    Task Progress
                </p>
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Design
                    </p>
                    <p>
                        50%
                    </p>
                </div>
                <div class="w-full h-2 mb-4 bg-green-100 rounded-full">
                    <div class="w-1/2 h-full text-xs text-center text-white bg-green-400 rounded-full">
                    </div>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Html
                    </p>
                    <p>
                        90%
                    </p>
                </div>
                <div class="w-full h-2 mb-4 bg-indigo-100 rounded-full">
                    <div class="w-[90%] h-full text-xs text-center text-white bg-indigo-400 rounded-full">
                    </div>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Css
                    </p>
                    <p>
                        90%
                    </p>
                </div>
                <div class="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div class="w-[90%] h-full text-xs text-center text-white bg-blue-400 rounded-full">
                    </div>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        JavaScript
                    </p>
                    <p>
                        80%
                    </p>
                </div>
                <div class="w-full h-2 bg-pink-100 rounded-full">
                    <div class="w-[80%] h-full text-xs text-center text-white bg-pink-400 rounded-full">
                    </div>
                </div>
                <div class="flex items-center mt-3 justify-between text-sm text-gray-400">
                    <p>
                        React
                    </p>
                    <p>
                        80%
                    </p>
                </div>
                <div class="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div class="w-[80%] h-full text-xs text-center text-white bg-blue-400 rounded-full">
                    </div>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Tailwind Css
                    </p>
                    <p>
                        90%
                    </p>
                </div>
                <div class="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div class="w-[90%] h-full text-xs text-center text-white bg-blue-400 rounded-full">
                    </div>
                </div>


                </div>
                </a>
        </div>

        </div>
    </>
  )
}

export default Skills