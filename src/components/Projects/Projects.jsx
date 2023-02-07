import React from 'react';
import './Projects.scss';
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
      <section id="Projects" className="projects-container">
        <h2 className="header">PROJECTS</h2>
        <div className="projects-wrapper">
          {projectList.map((p) => {
            return (
              <div key={p.name} id={p.name} className="project-card">
                <div className="project-image-container">
                  {/* <a href={p.website}> */}
                  <img
                    className="project-image"
                    src={p.img}
                    alt=""
                    loading="lazy"
                  />
                  {/* </a> */}
                </div>
                <div className="project-description">
                  <p className="project-title">{p.name}</p>
                  <ul className="project-tags">
                    {p.tags.map((t) => {
                      return (
                        <li key={`${p.img}-${t}`} className="p-tag">
                          {t}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="project-links-container">
                    <a href={p.website} className="project-link">
                      <FaGithub className="project-link-icon" size={22} />
                    </a>
                    <a href={p.website} className="project-link">
                      <FaExternalLinkAlt
                        className="project-link-icon"
                        size={18}
                      />
                    </a>
                  </div>
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
