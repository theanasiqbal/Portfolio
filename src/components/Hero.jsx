import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import profile from '../mydata/profile.jpeg'
import pdf from '../mydata/CV.pdf'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>
        <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[300px]'>
            <img src={profile} alt='Profile' className='transition ease-in-out duration-200 rounded-full border-2 shadow-[0px_0px_58px_31px_rgba(17,157,164,0.2)] hover:shadow-[0px_0px_58px_31px_rgba(17,157,164,0.3)] border-x-teal-600 border-y-cyan-700'/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation sequence={["Frontend Dev",1000,
                    "Web designer",1000, 
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}/>
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>My name is Anas Iqbal and I am a fresher in Web development</p>

            <div className='my-8'>
                <a href={pdf} download="My_CV.pdf" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-l from-teal-600 to-cyan-700 text-white font-medium'>Download CV</a>
                <a href='#contact' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-r from-teal-600 to-cyan-700 font-medium text-white hover:border-none'>
                Contact</a>
            </div>

        </div>
    </div>
  )
}

export default Hero
