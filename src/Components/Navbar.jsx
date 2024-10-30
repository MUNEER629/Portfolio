
import React, { useRef, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import underline from '../assets/line.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import open from '../assets/open.png';
import close from '../assets/close.png';

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Muneersadhik_resume.pdf';
    link.download = 'Muneersadhik_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='navbar'>
     
      <div className='nav-logo'>
     <p>Portfolio</p>
      </div>
      
      <img src={open} onClick={openMenu} alt='' className='nav-mob-open'/>
      
      <ul ref={menuRef} className="navmenu">
        <img src={close} onClick={closeMenu} alt='' className='nav-mob-close'/>

        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setmenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setmenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setmenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setmenu("work")}>Projects</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setmenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      
      <button onClick={handleResumeDownload}>Resume</button>
    </div>
  );
};

export default Navbar;
