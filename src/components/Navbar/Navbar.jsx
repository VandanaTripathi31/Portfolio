import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import theme_pattern from '../../assets/theme_pattern-removebg-preview.png';
import underline from '../../assets/nav_underline-removebg-preview.png';
import menu_open from '../../assets/menu_open.png';
import menu_close from '../../assets/menu_close.png';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMneu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />
      <img src={menu_open} onClick={openMenu} alt=""className='nav-mob-open' />
      <img src={theme_pattern} alt="Theme Pattern" className="service" />

      {/* Navigation Menu */}
      <ul  ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMneu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink
            className={`anchor-link ${menu === 'home' ? 'active' : ''}`}
            href="#home"
          >
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === 'skills' ? 'active' : ''}`}
            offset={50}
            href="#services"
          >
            <p onClick={() => setMenu('skills')}>Skills</p>
          </AnchorLink>
          {menu === 'skills' && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === 'projects' ? 'active' : ''}`}
            offset={50}
            href="#work"
          >
            <p onClick={() => setMenu('projects')}>Projects</p>
          </AnchorLink>
          {menu === 'projects' && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === 'education' ? 'active' : ''}`}
            offset={50}
            href="#education"
          >
            <p onClick={() => setMenu('education')}>Education</p>
          </AnchorLink>
          {menu === 'education' && <img src={underline} alt="Underline" />}
        </li>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === 'contact' ? 'active' : ''}`}
            offset={50}
            href="#contact"
          >
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt="Underline" />}
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect"><AnchorLink
            className={`anchor-link ${menu === 'contact' ? 'active' : ''}`}
            offset={50}
            href="#contact"
          >
            {/* <p onClick={() => setMenu('contact')}>Contact</p> */}
          Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
