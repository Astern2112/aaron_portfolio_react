import React from 'react';
import { images } from '../../constants/';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      name: 'Rick and Morty Wiki',
      img: images.rickAndMorty,
      tags: ['React', 'Tailwind', 'React Query', 'React Router'],
      type: 'Mobile App',
      description:
        'A Wiki page for the tv show rick and morty using the rick and morty API. Contains information for Characters, Episodes and Locations up until season 3',
      website: 'https://rickandmorty-wiki-aaron.netlify.app/',
      github: 'https://github.com/Astern2112/rick-and-morty-wiki',
    },
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

    // {
    //   name: 'Open AI Chat GPT Clone',
    //   img: images.chatGPTClone,
    //   tags: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'Express', 'OpenAI'],
    //   type: 'Web App',
    //   description:
    //     "A clone of ChatGPT made by open AI. Built using open AI's public API specifically the text-davinci-003 Model. ",
    //   website: 'https://open-ai-chat-clone.vercel.app/',
    //   github: 'https://github.com/Astern2112/openAiChatClone/tree/main',
    // },
    {
      name: 'Todo App',
      img: images.todoApp,
      tags: ['React', 'Tailwind'],
      type: 'React App',
      description: 'Simple todo app where you can add and delete todos',
      website: 'https://todo-app-aaron21.netlify.app/',
      github: 'https://github.com/Astern2112/react-todo-app',
    },
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
                <div className="relative shadow-sm">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className=" aspect-auto w-full rounded-md object-cover"
                  />
                </div>
                <p className="mt-2 flex justify-between  text-lg font-medium">
                  {p.name}
                  <span className="flex items-center">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <FaGithub size={22} className=" mr-2 hover:scale-110" />
                    </a>
                    <a href={p.website} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt
                        size={18}
                        className=" hover:scale-110"
                      />
                    </a>
                  </span>
                </p>
                <div className="mt-2 text-sm text-torea-bay-400">
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
