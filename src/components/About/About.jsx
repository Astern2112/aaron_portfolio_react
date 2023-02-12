import React from 'react';
import './About.scss';

import { images } from '../../constants';
import { motion } from 'framer-motion';

const About = () => {
  const tools = [
    { name: 'HTML', img: images.html },
    { name: 'CSS', img: images.css },
    { name: 'JavaScript', img: images.javaScript },
    { name: 'React', img: images.react },
    { name: 'Java', img: images.java },
    { name: 'Sass', img: images.sass },
    { name: 'Git', img: images.git },
    {
      name: 'TypeScript',
      img: images.typeScript,
    },
  ];

  return (
    <motion.div
      initial={{ x: '200vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section id="About" className="about-container">
        <div className="aboutme-wrapper">
          <h2 className="about-header hidden">ABOUT ME</h2>
          <p className="about-description">
            Hi I'm Aaron! I am junior Computer Science student at Dickinson
            College. With a strong technical skill set, including proficiency in
            <span className="text-highlight"> Java</span>,{' '}
            <span className="text-highlight"> HTML</span>,{' '}
            <span className="text-highlight"> CSS</span>,
            <span className="text-highlight"> JavaScript</span>,{' '}
            <span className="text-highlight"> TypeScript</span>,{' '}
            <span className="text-highlight"> React</span>, and{' '}
            <span className="text-highlight"> R</span>. I am constantly seeking
            new challenges to expand my abilities.{' '}
          </p>
          <p className="about-description">
            My passion for technology is demonstrated through my experience as a
            {` `}
            <span className="text-highlight">Frontend Engineer Intern</span> at
            Vendii, TAO BIN, my participation in the AT&T Summer Learning
            Academy Externship and my personal projects showcased bellow. In
            addition to my technical expertise, I have a strong background in
            finance, which I developed through my internship as a{' '}
            <span className="text-highlight">Finance Intern</span> at Gaysorn
            Property Co. Ltd. Furthermore, I am fluent in English, Thai and have
            an intermediate level of Chinese.
          </p>
          <p className="about-description">
            Outside of academics, I am a varsity swimmer and co-founder of a
            voluntary Life-Saving service, a program that teaches kids
            throughout Thailand lifesaving and swimming skills. I am also a big
            Formula One fan.
          </p>
        </div>
        <div className="skills">
          <h2 className="skills-header">Tools and Technologies</h2>
          <div className="tools-container">
            {tools.map((i) => {
              return (
                <div id={i.name} key={i.name} className="tool-box">
                  <img src={i.img} className="tool-img" alt={i.name} />
                  <p className="tool-name">{i.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
