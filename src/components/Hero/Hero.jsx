import React from 'react';

import { images } from '../../constants';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="mt-16"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center h-screen flex-col md:flex-row">
        <div className="text-center md:mr-10">
          <h1 className="text-6xl font-bold">AARON STERN</h1>
          <p className="text-2xl font-light">Student, Front-End Developer</p>
        </div>
        <div className="mt-6 md:mt-0 md:ml-10 overflow-hidden h-96 w-96 rounded-full ">
          <img className="object-cover" src={images.profile} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
