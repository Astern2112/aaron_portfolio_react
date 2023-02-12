import React from 'react';
import { images } from '../../constants/';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      name: 'Stock Tracker App',
      img: images.stockHome,
      tags: ['React', 'Bootstrap', 'Axios', 'Apex Charts'],
      type: 'React App',
      description:
        'A stock tracker app that you can track stock prices, market news and company news. Built with React... still in progress',
      website: 'https://stock-tracker-app-24aa5.web.app/',
      github: 'https://github.com/Astern2112/stock-tracker-app',
    },
    {
      name: 'Todo App',
      img: images.todoApp,
      tags: ['React', 'Tailwind'],
      type: 'React App',
      description: 'Simple todo app where you can add and delete todos',
      website: 'https://todo-app-aaron21.netlify.app/',
      github: 'https://github.com/Astern2112/react-todo-app',
    },
    // {
    //   name: 'Project 3',
    //   img: images.project3,
    //   tags: ['Java'],
    //   type: 'Mobile App',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vel amet autem porro! Pariatur, ipsa voluptate amet ipsum, laudantium, possimus sapiente eligendi quis repellat eos vero aliquid. Perspiciatis, neque? Blanditiis?',
    //   website: '',
    //   github: '',
    // },
    // {
    //   name: 'Project 4',
    //   img: images.project4,
    //   tags: ['Java'],
    //   type: 'Mobile App',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vel amet autem porro! Pariatur, ipsa voluptate amet ipsum, laudantium, possimus sapiente eligendi quis repellat eos vero aliquid. Perspiciatis, neque? Blanditiis?',
    //   website: '',
    //   github: '',
    // },
  ];

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <section id="Projects" className=" p-4">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-left">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          {projectList.map((p) => {
            return (
              <div key={p.name} className="mb-4">
                <div className="relative shadow-sm ">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="max-h-80 w-full rounded-sm object-cover"
                  />
                </div>
                <p className="mt-2 flex justify-between  text-lg font-medium">
                  {p.name}
                  <span className="flex items-center">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <FaGithub
                        size={22}
                        className=" mr-2 hover:text-torea-bay-900"
                      />
                    </a>
                    <a href={p.website} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt
                        size={18}
                        className=" hover:text-torea-bay-900"
                      />
                    </a>
                  </span>
                </p>
                <div className="mt-2 text-sm text-torea-bay-400">
                  <ul className="inline-flex">
                    {p.tags.map((t) => {
                      return (
                        <li key={`${p.img}-${t}`} className="mr-2">
                          • {t}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
