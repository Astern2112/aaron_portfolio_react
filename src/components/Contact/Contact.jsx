import React from 'react';
import './Contact.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  const socials = [
    {
      name: 'Github',
      img: images.github,
      url: 'https://github.com/Astern2112',
    },
    {
      name: 'Linkedin',
      img: images.linkedin,
      url: 'https://www.linkedin.com/in/aaron-stern-38a105199/',
    },
    {
      name: 'Email',
      img: images.envelope,
      url: 'mailto:sternaarond@gmail.com',
    },
  ];
  return (
    <motion.div
      initial={{ x: '200vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <section id="Contact" className="contact-container">
        <h2 className="contact-heading">CONTACT</h2>
        <div className="social-icons">
          {socials.map((i) => {
            return (
              <a
                key={i.name}
                href={i.url}
                type=""
                className="social-icons"
                target="_blank"
                rel="noreferrer"
              >
                <img src={i.img} alt={i.name} className="social-icon" />
              </a>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
