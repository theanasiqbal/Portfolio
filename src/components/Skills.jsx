// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../mydata/skillsData'; // Adjust the path based on your folder structure
import images from '../assets/images'; // Import images object

const Skills = () => {
  return (
    <>
      <div className='max-w-[1200px] flex items-center justify-center mx-auto' id='skills'>
        <h2 className='primary-color text-center text-xl md:text-4xl font-bold m-4 border-b-2 border-gray-600 md:pb-2'>
          My Tech Stack
        </h2>
      </div>
      <div className='bg-black text-gray-400 md:h-[150px] md:mt-10 max-w-[1200px] mx-auto grid grid-cols-3  place-items-center md:flex md:justify-between md:items-center'>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center m-4 sm:my-0 w-[35px] md:w-[100px] hover:cursor-pointer 
              drop-shadow-[0_0_16px_${skill.hoverShadow}] 
              hover:drop-shadow-[0_0_30px_${skill.hoverShadowStrong}]`}
            style={{
              filter: `drop-shadow(0px 0px 16px ${skill.hoverShadow})`,
              padding: '2px', 
            }}
          >
            <img
              src={images[skill.imageKey]}
              alt={skill.name}
              className='rounded transition-transform duration-300 ease-in-out'
              style={{
                borderRadius: '8px', 
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              }}
            />
            <p className='mt-2'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
