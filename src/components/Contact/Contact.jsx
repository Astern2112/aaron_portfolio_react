import React from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const socials = [
    {
      name: "Instagram",
      img: images.instagram,
      url: "https://www.instagram.com/aaron__stern/",
    },
    {
      name: "Github",
      img: images.github,
      url: "https://github.com/Astern2112",
    },
    {
      name: "Linkedin",
      img: images.linkedin,
      url: "https://www.linkedin.com/in/aaron-stern-38a105199/",
    },
    {
      name: "Email",
      img: images.envelope,
      url: "mailto:sternaarond@gmail.com",
    },
  ];
  return (
    <motion.div
      initial={{ x: "200vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <section id="Contact" className="p-6">
        <h2 className="text-center text-3xl font-bold">Contact</h2>
        <div className="flex flex-row justify-center ">
          {socials.map((i) => {
            return (
              <a
                key={i.name}
                href={i.url}
                type=""
                target="_blank"
                rel="noreferrer"
                className="m-4"
              >
                <img src={i.img} alt={i.name} className="h-12 w-12" />
              </a>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
