import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const About = () => {
  const tools = [
    { name: 'Java', img: images.java },
    { name: 'HTML/CSS', img: images.html },
    { name: 'CSS', img: images.css },
    { name: 'JavaScript', img: images.javaScript },
    { name: 'TypeScript', img: images.typeScript },
    { name: 'React', img: images.react },
    { name: 'Sass', img: images.sass },
    { name: 'Tailwind', img: images.tailwind },
    { name: 'Git', img: images.git },
    { name: 'Figma', img: images.figma },
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
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>
          <p className="text-lg font-light">
            Hi I'm Aaron! I am Thai/Croatian junior Computer Science student at
            Dickinson College. With a strong technical skill set, including
            proficiency in
            <span className="font-medium text-torea-bay-600"> Java</span>,{' '}
            <span className="font-medium text-torea-bay-600"> HTML</span>,{' '}
            <span className="font-medium text-torea-bay-600"> CSS</span>,
            <span className="font-medium text-torea-bay-600"> JavaScript</span>,{' '}
            <span className="font-medium text-torea-bay-600"> TypeScript</span>,{' '}
            <span className="font-medium text-torea-bay-600"> React</span>, and{' '}
            <span className="font-medium text-torea-bay-600"> R</span>. I am
            constantly seeking new challenges to expand my abilities.{' '}
          </p>
          <br />
          <p className="text-lg font-light">
            My passion for technology is demonstrated through my experience as a
            {` `}
            <span className="font-medium text-torea-bay-600">
              Frontend Engineer Intern
            </span>{' '}
            at Vendii, TAO BIN, my participation in the AT&T Summer Learning
            Academy Externship and my personal projects. I am{' '}
            <span className="font-medium text-torea-bay-600">
              {' '}
              currently seeking an internship opportunity for the summer of 2023
              as a software engineer intern, web developer intern, or frontend
              intern.
            </span>{' '}
            I am also open to exploring analyst and project management roles. In
            addition to my technical expertise, I have a strong background in
            finance, which I developed through my internship as a{' '}
            <span className="font-medium text-torea-bay-600">
              Finance Intern
            </span>{' '}
            at Gaysorn Property Co. Ltd. Furthermore, I am fluent in English,
            Thai and have an intermediate level of Chinese.
          </p>
          <br />
          <p className="text-lg font-light">
            Outside of academics, I am a varsity swimmer and co-founder of a
            voluntary Life-Saving service, a program that teaches kids
            throughout Thailand lifesaving and swimming skills. I am also a big
            fan of Formula One. The high-speed, high-tech and high-stakes nature
            of the sport has always fascinated me.
          </p>
          <p></p>
        </div>
        <div>
          <h2 className="my-4 text-center text-2xl font-bold">
            Tools and Technologies
          </h2>
          <div className="flex flex-wrap justify-center">
            {tools.map((i) => {
              return (
                <div
                  id={i.name}
                  key={i.name}
                  className="m-5 flex items-center justify-center text-center"
                >
                  <img className="mx-4 h-16 w-16" src={i.img} alt={i.name} />
                  <p className="mt-2 text-lg font-medium"> {i.name}</p>
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
