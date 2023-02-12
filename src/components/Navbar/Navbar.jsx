import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import files from '../../constants/files';
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

const Navbar = () => {
  const refContainer = useRef();
  const [navbarHeight, setNavbarHeight] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setNavbarHeight(refContainer.current.offsetHeight);
    document.documentElement.style.setProperty(
      '--scroll-padding',
      navbarHeight + 'px'
    );
    console.log(refContainer);
  }, [navbarHeight]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = 'link-underline link-underline-black';

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 w-full bg-torea-bay-50"
      initial={{ x: '200vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
      ref={refContainer}
    >
      <header
        id="Navbar"
        className="bg-white flex items-center justify-between py-4 px-6 shadow-md"
      >
        <div>
          <a
            className={`text-2xl font-bold ${
              isOpen ? 'absolute top-4 z-20' : ''
            }`}
            href="/"
          >
            AS
          </a>
        </div>
        <nav className={`LAPTOP-NAVBAR hidden sm:block`}>
          <ul className={`flex `}>
            <li className="mr-6">
              <a
                href="#About"
                className={`pb-1 hover:animate-pulse hover:text-torea-bay-700`}
              >
                About
              </a>
            </li>
            <li className="mr-6">
              <a
                href="#Work-Experience"
                className={`pb-1 hover:text-torea-bay-700`}
              >
                Work Experience
              </a>
            </li>
            <li className="mr-6">
              <a href="#Projects" className={`pb-1 hover:text-torea-bay-700`}>
                Projects
              </a>
            </li>
            <li className="mr-6">
              <a href="#Contact" className={`pb-1 hover:text-torea-bay-700`}>
                Contact
              </a>
            </li>
            <li className="mr-6">
              <a
                href={files.Resume}
                className={`pb-1 hover:text-torea-bay-700`}
                download
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <nav
          className={`MOBILE-NAVBAR ${
            isOpen
              ? 'absolute top-0 left-0 z-10 flex h-screen w-full justify-center bg-torea-bay-50'
              : 'hidden '
          }`}
        >
          <ul
            className={`flex ${isOpen ? 'flex-col justify-center gap-4' : ''}`}
          >
            <li className="mr-6">
              <a
                href="#About"
                className={`text-5xl ${linkClasses}`}
                onClick={toggleOpen}
              >
                About
              </a>
            </li>
            <li className="mr-6">
              <a
                href="#Work-Experience"
                className={`text-5xl ${linkClasses}`}
                onClick={toggleOpen}
              >
                Work Experience
              </a>
            </li>
            <li className="mr-6">
              <a
                href="#Projects"
                className={`text-5xl ${linkClasses}`}
                onClick={toggleOpen}
              >
                Projects
              </a>
            </li>
            <li className="mr-6">
              <a
                href="#Contact"
                className={`text-5xl ${linkClasses}`}
                onClick={toggleOpen}
              >
                Contact
              </a>
            </li>
            <li className="mr-6">
              <a
                href={files.Resume}
                className={`text-5xl ${linkClasses}`}
                onClick={toggleOpen}
                download
              >
                Resume
              </a>
            </li>
          </ul>
          <button className="absolute right-3 top-1" onClick={toggleOpen}>
            <IoIosClose size={58} />
          </button>
        </nav>
        <button className="sm:hidden" onClick={toggleOpen}>
          <FaBars size={28} />
        </button>
      </header>
    </motion.div>
  );
};

export default Navbar;
