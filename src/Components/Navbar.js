import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, HashRouter,
    NavLink, useLocation}
from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
    open: { opacity: 1, rotate:40, x:-9, scaleY: (1.4), y:10 },
    closed: { opacity: 1,  },
  }
  const variant2 = {
    opens: { opacity: 0, x:-12 },
    closeds: { opacity: 1,  },
  }
  const variant3 = {
    opened: { opacity: 1, rotate:-40, x:9, y:-12, scaleY: (1.4), },
    closed: { opacity: 1,  },
  }

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
<motion.div className='topBar' animate={click ? "opens" : "closeds"}
      variants={variant2} onClick={handleClick}></motion.div>
<motion.div className='midBar' animate={click ? "open" : "closed"}
      variants={variants} onClick={handleClick}></motion.div>
<motion.div animate={click ? "opened" : "closed"} 
variants={variant3} onClick={handleClick} className='botBar'></motion.div>
        <div className='navbar-container'>
          <Link to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
             className='navbar-logo' onClick={closeMobileMenu}>
            BURGER

          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/'
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
             className='nav-links' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/order'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pickup
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </NavLink>
            </li>

            <li className='nav-item'>
              <Link
                to='infoSec'
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hours/Location
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;