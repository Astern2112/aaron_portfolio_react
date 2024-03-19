import { motion } from "framer-motion";
import React from "react";
import { images } from "../../constants";

const About = () => {
  const tools = [
    { name: "Java", img: images.java },
    { name: "Python", img: images.python },
    { name: "JavaScript", img: images.javaScript },
    { name: "TypeScript", img: images.typeScript },
    { name: "HTML", img: images.html },
    { name: "CSS", img: images.css },
    { name: "Sass", img: images.sass },
    { name: "Tailwind", img: images.tailwind },
    { name: "React", img: images.react },
    { name: "Vue", img: images.vue },
    { name: "Figma", img: images.figma },
    { name: "Git", img: images.git },
    { name: "SQL", img: images.sql },
  ];

  return (
    <motion.div
      initial={{ x: "200vw" }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section id="About" className="px-8 py-12">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>

          <p className="text-lg font-light">
            Hi there! I'm Aaron Stern, a passionate and driven computer science
            student in my final year at Dickinson College. I have a strong
            foundation in frontend and back-end development and thrive in
            dynamic environments where I can leverage my technical skills and
            creativity to bring ideas to life.
          </p>
          <br></br>
          <p className="text-lg font-light">
            During my academic and professional journey, I've gained hands-on
            experience in various areas of software development. In my previous
            role as a Full-Stack Developer Intern at The Brooker Group Plc, I
            played a pivotal role in developing and maintaining the frontend of
            Brooker's new generative AI platform, implementing cutting-edge
            technologies such as Vue.js, Vuetify, and AWS Amplify.
          </p>
          <br></br>
          <p className="text-lg font-light">
            Before that, as a Frontend Software Engineer Intern at TAO BIN, I
            worked with a talented team to enhance the user interface of the
            company's web application, utilizing technologies like React,
            TypeScript, and Material-UI.
          </p>
          <br></br>
          <p className="text-lg font-light">
            When I'm not coding, you can find me swimming laps in the pool,
            perfecting my swing on the golf course with friends, or immersing
            myself in the thrilling world of Formula One. I also enjoy staying
            up-to-date with the latest tech trends and innovations and
            constantly seek opportunities to learn and grow personally and
            professionally. I'm excited about the endless possibilities that the
            world of technology offers and am passionate about exploring new
            avenues in this ever-evolving field.
          </p>
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
