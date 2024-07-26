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
    <div className='max-w-[1200px] flex items-center justify-center mx-auto' id='skills'>
    <h2 className='text-gray-700 text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-cyan-600 md:pb-2'> 
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


    {/* Taskbar  */}

    <motion.div 
        
        
        initial={{ opacity: 0, scale: 0.5,}}
        whileInView={{ opacity: 1, scale: 1,  }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
    className='max-w-[1200px] mx-auto grid grid-cols-1 place-items-center md:flex md:justify-evenly md:items-center mt-10'>
        <div 
            
        className="relative p-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100">
        <a href="#" className="block w-full h-full">
            <div className="w-full">
                <p className="mb-4 text-2xl font-normal text-gray-700 dark:text-white">
                    Skill Proficiency
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Html
                    </p>
                    <p>
                        90%
                    </p>
                </div>
                <div className="w-full h-2 mb-4 bg-indigo-100 rounded-full">
                    <div 
                        
                    className="w-[90%] h-full text-xs text-center text-white bg-orange-400 rounded-full">
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Css
                    </p>
                    <p>
                        90%
                    </p>
                </div>
                <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div className="w-[90%] h-full text-xs text-center text-white bg-blue-400 rounded-full">
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Design
                    </p>
                    <p>
                        50%
                    </p>
                </div>
                <div className="w-full h-2 mb-4 bg-green-100 rounded-full">
                    <div className="w-1/2 h-full text-xs text-center text-white bg-green-400 rounded-full">
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        JavaScript
                    </p>
                    <p>
                        80%
                    </p>
                </div>
                <div className="w-full h-2 bg-pink-100 rounded-full">
                    <div className="w-[80%] h-full text-xs text-center text-white bg-yellow-400 rounded-full">
                    </div>
                </div>
                <div className="flex items-center mt-3 justify-between text-sm text-gray-400">
                    <p>
                        React
                    </p>
                    <p>
                        80%
                    </p>
                </div>
                <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div className="w-[80%] h-full text-xs text-center text-white bg-cyan-400 rounded-full">
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <p>
                        Tailwind Css
                    </p>
                    <p>
                        90%
                    </p>
                </div>
                <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div className="w-[90%] h-full text-xs text-center text-white bg-teal-400 rounded-full">
                    </div>
                </div>
                <div className="flex items-center mt-3 justify-between text-sm text-gray-400">
                    <p>
                        Python
                    </p>
                    <p>
                        40%
                    </p>
                </div>
                <div className="w-full h-2 mb-4 bg-blue-100 rounded-full">
                    <div className="w-[40%] h-full text-xs text-center text-white bg-yellow-400 rounded-full">
                    </div>
                </div>


                </div>
                </a>
        </div>

        {/* SOFT SKILLS */}

        <div 
            
        className="relative p-4 py-5 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl w-60 md:w-72 dark:bg-gray-800 dark:text-gray-100 max-md:mt-4  ">
        <a href="#" className="block w-full h-full">
            <div className="w-full ">
                <p className="mb-4 text-2xl font-normal text-gray-700 dark:text-white">
                    Soft Skills
                </p>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1' />
                    
                    <p>
                    Communication 
                    </p>
                </div>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1' />
                    
                    <p>
                    Problem-Solving 
                    </p>
                </div>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1' />
                    
                    <p>
                    Time Management 
                    </p>
                </div>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1 ' />
                    
                    <p>
                    Adaptibility 
                    </p>
                </div>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1' />
                    
                    <p>
                    Team Work 
                    </p>
                </div>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1' />
                    
                    <p>
                    Attention to Detail
                    </p>
                </div>
                <div className="flex items-center text-sm text-gray-400 md:mt-6">
                    
                    <CiCircleCheck className='text-cyan-600 mr-2 self-start mt-1' />
                    
                    <p>
                    Creativity
                    </p>
                </div>
                
            </div>
            </a>
        </div>
        

        </motion.div>

    </>
  )
}

export default Skills