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
      <div className="flex h-screen flex-col items-center justify-center md:flex-row">
        <div className="text-center md:mr-10">
          <h1 className="text-6xl font-bold">AARON STERN</h1>
          <p className="text-2xl font-light">Student, Software Developer</p>
        </div>
        <div className="mt-6 h-96 w-96 overflow-hidden rounded-full md:mt-0 md:ml-10 ">
          <img className="object-cover" src={images.profile} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
