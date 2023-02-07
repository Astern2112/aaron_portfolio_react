import React from 'react';

import './Hero.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-container">
          <div className="title">
            <h1 className="title-heading">AARON STERN</h1>
            <p className="title-animated-words">Student, Front-End Developer</p>
          </div>
          <div className="profile-image-container">
            <img src={images.profile} alt="" className="profile-img" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
