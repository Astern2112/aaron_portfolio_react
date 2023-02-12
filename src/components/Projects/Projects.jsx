import React from 'react';
import { images } from '../../constants/';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      name: 'Stock Tracker App',
      img: images.project1,
      tags: ['HTML', 'CSS', 'JavaScript'],
      type: 'Full-Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vel amet autem porro! Pariatur, ipsa voluptate amet ipsum, laudantium, possimus sapiente eligendi quis repellat eos vero aliquid. Perspiciatis, neque? Blanditiis?',
      website: '',
      github: '',
    },
    {
      name: 'Todo App',
      img: images.project2,
      tags: ['HTML', 'CSS', 'React'],
      type: 'Web App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vel amet autem porro! Pariatur, ipsa voluptate amet ipsum, laudantium, possimus sapiente eligendi quis repellat eos vero aliquid. Perspiciatis, neque? Blanditiis?',
      website: '',
      github: '',
    },
    {
      name: 'Project 3',
      img: images.project3,
      tags: ['Java'],
      type: 'Mobile App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vel amet autem porro! Pariatur, ipsa voluptate amet ipsum, laudantium, possimus sapiente eligendi quis repellat eos vero aliquid. Perspiciatis, neque? Blanditiis?',
      website: '',
      github: '',
    },
    {
      name: 'Project 4',
      img: images.project4,
      tags: ['Java'],
      type: 'Mobile App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vel amet autem porro! Pariatur, ipsa voluptate amet ipsum, laudantium, possimus sapiente eligendi quis repellat eos vero aliquid. Perspiciatis, neque? Blanditiis?',
      website: '',
      github: '',
    },
  ];

  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <section id="Projects" className="bg-white p-4">
        <h2 className="text-3xl text-center md:text-left font-bold mb-4">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {projectList.map((p) => {
            return (
              <div key={p.name} className="mb-4">
                <div className="relative">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-sm"
                  />
                </div>
                <p className="text-lg font-medium mt-2  flex justify-between">
                  {p.name}
                  <span className="flex items-center">
                    <a href={p.website}>
                      <FaGithub
                        size={22}
                        className="mr-2 hover:text-gray-500 text-gray-900"
                      />
                    </a>
                    <a href={p.website}>
                      <FaExternalLinkAlt
                        size={18}
                        className="hover:text-gray-500 text-gray-900"
                      />
                    </a>
                  </span>
                </p>
                <div className="mt-2 text-sm text-gray-700">
                  <ul className="inline-flex">
                    {p.tags.map((t) => {
                      return (
                        <li key={`${p.img}-${t}`} className="mr-2">
                          {t}
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
