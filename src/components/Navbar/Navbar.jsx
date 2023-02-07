import React from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import files from '../../constants/files';

import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  return (
    <motion.div
      initial={{ x: '200vw' }}
      animate={{ x: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <div className="header-wrapper">
        <header className="header-container">
          <div className="header-logo">
            <a href="/">AS</a>
          </div>
          <nav className="navbar">
            <ul className="navbar-links">
              <li className="nav-item">
                <a href="#About" className="nav-item-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#Work-Experience" className="nav-item-link">
                  Work Experience
                </a>
              </li>
              <li className="nav-item">
                <a href="#Projects" className="nav-item-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className="nav-item-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href={files.Resume} className="nav-item-link" download>
                  Resume
                </a>
              </li>
              <li className="nav-item nav-burger-menu">
                <a href="/" className="menu-icon-link">
                  <FaBars className="menu-icon" size={28} />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </motion.div>
  );
};

export default Navbar;
