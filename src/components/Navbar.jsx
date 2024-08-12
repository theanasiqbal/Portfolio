import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    
        <div className=' bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

            <h1 className='text-3xl font-bold primary-color ml-4'>Anas Iqbal</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href='#about' className='hover:text-teal-600 font-medium'>About</a></li>
                <li className='p-5'><a href='#skills' className='hover:text-teal-600 font-medium' >Skills</a></li>
                <li className='p-5'><a href='#experience' className='hover:text-teal-600 font-medium' >Work Experience</a></li>
                <li className='p-5'><a href='#work' className='hover:text-teal-600 font-medium' >Projects</a></li>
                <li className='p-5'><a href='#contact' className='hover:text-teal-600 font-medium' >Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'} onClick={handleNav}>
                <h1 className='text-3xl primary-color m-4'>Anas Iqbal</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'><a href='#about' className='hover:text-teal-600'>About</a></li>
                    <li className='p-2'><a href='#skills' className='hover:text-teal-600'>Skills</a></li>
                    <li className='p-2'><a href='#experience' className='hover:text-teal-600 max-md:whitespace-nowrap' >Work Experience</a></li>
                    <li className='p-2'><a href='#work' className='hover:text-teal-600'>Work</a></li>
                    <li className='p-2'><a href='#contact' className='hover:text-teal-600'>Contact</a></li>
                </ul>
            </div>

        </div>
    
  )
}

export default Navbar