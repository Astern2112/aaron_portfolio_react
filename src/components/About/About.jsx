import React from 'react';
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
    { name: 'TypeScript', img: images.typeScript },
  ];

  return (
    <motion.div
      initial={{ x: '200vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section id="About" className="px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
          <p className="text-lg font-light">
            Hi I'm Aaron! I am junior Computer Science student at Dickinson
            College. With a strong technical skill set, including proficiency in
            <span className="font-medium"> Java</span>,{' '}
            <span className="font-medium"> HTML</span>,{' '}
            <span className="font-medium"> CSS</span>,
            <span className="font-medium"> JavaScript</span>,{' '}
            <span className="font-medium"> TypeScript</span>,{' '}
            <span className="font-medium"> React</span>, and{' '}
            <span className="font-medium"> R</span>. I am constantly seeking new
            challenges to expand my abilities.{' '}
          </p>
          <br />
          <p className="text-lg font-light">
            My passion for technology is demonstrated through my experience as a
            {` `}
            <span className="font-medium">Frontend Engineer Intern</span> at
            Vendii, TAO BIN, my participation in the AT&T Summer Learning
            Academy Externship and my personal projects showcased bellow. In
            addition to my technical expertise, I have a strong background in
            finance, which I developed through my internship as a{' '}
            <span className="font-medium">Finance Intern</span> at Gaysorn
            Property Co. Ltd. Furthermore, I am fluent in English, Thai and have
            an intermediate level of Chinese.
          </p>
          <br />
          <p className="text-lg font-light">
            Outside of academics, I am a varsity swimmer and co-founder of a
            voluntary Life-Saving service, a program that teaches kids
            throughout Thailand lifesaving and swimming skills. I am also a big
            Formula One fan.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold my-4 text-center">
            Tools and Technologies
          </h2>
          <div className="flex flex-wrap justify-center">
            {tools.map((i) => {
              return (
                <div
                  id={i.name}
                  key={i.name}
                  className="flex items-center justify-center m-5 text-center"
                >
                  <img className="w-12 h-12 mx-4" src={i.img} alt={i.name} />
                  <p className="text-lg font-medium mt-2"> {i.name}</p>
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
