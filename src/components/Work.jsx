import React from 'react'
import proj1 from '../mydata/weather.png'
import proj2 from '../mydata/Docs.png'
import proj3 from '../mydata/bgchanger.png'
import proj4 from '../mydata/bootstrap.png'
import proj5 from '../mydata/shoe.png'
import proj6 from '../mydata/Swiggy.png'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
            <p className='text-gray-400'>Check out some of my recent projects</p>
        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative'>
                <img src={proj1} alt='Project 1' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Weather App</span>
                <div className='pt-8 text-center'>
                    <a href="https://weather-locator-app.netlify.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative'>
                <img src={proj2} alt='Project 2' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Docs Mini</span>
                <div className='pt-8 text-center'>
                    <a href="https://docs-mini-web.netlify.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative'>
                <img src={proj3} alt='Project 3' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Bg-Changer</span>
                <div className='pt-8 text-center'>
                    <a href="https://the-bg-changer.netlify.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative'>
                <img src={proj4} alt='Project 4' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Marketing Website</span>
                <div className='pt-8 text-center'>
                    <a href="https://marketier.netlify.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative'>
                <img src={proj5} alt='Project 5' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Shoe Landing Page</span>
                <div className='pt-8 text-center'>
                    <a href="https://shoe-factory.netlify.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>

                </div>

            </div>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center   h-[200px] bg-cover relative'>
                <img src={proj6} alt='Project 6' />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>Swiggy Html & Css</span>
                <div className='pt-8 text-center'>
                    <a href="https://the-swiggy-clone.netlify.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Live
                        </button>
                    </a>
                </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Work