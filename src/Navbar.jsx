import './main.css';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi'; // install react-icons if not already

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='navbar'>
      <div className="left">
        <h2 className='title'>Portfolio</h2>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} color="#03B0FD" /> : <FiMenu size={30} color="#03B0FD" />}
      </div>

      {/* Nav Links */}
      <div className={`right ${menuOpen ? 'open' : ''}`}>
        {["mainy", "aboutMey", "skills", "project", "contact"].map((id, idx) => (
          <ScrollLink
            key={idx}
            to={id}
            spy={true}
            smooth={true}
            offset={-140}
            duration={600}
            className='button'
            onClick={closeMenu}
          >
            {id === "mainy" ? "Home" :
             id === "aboutMey" ? "About Me" :
             id === "skills" ? "Skills" :
             id === "project" ? "Projects" : "Contact Me"}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
