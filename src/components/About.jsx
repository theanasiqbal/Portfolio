import React from 'react'
import aboutImg from '../assets/about.jpg'


const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>  
        <div className='mt-4 md:mt-0 text-left flex '>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>
                Hi ! I'm <span className='primary-color font-semibold'>Anas Iqbal</span>, a passionate Frontend Developer specializing in HTML, CSS, JavaScript, and React. I love creating responsive, interactive web applications and bringing animations to life with tools like Framer Motion. I'm always learning and exploring new tech trends.<br/>

                In my free time, I dive into design principles, contribute to open-source projects, and enjoy collaborative work. Let's create something amazing together!

                </p>
            </div>
        </div>
        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/>
        </div>  
    </div>
  )
}

export default About