import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img2 from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    function handleClick() {
        closeMenu();
        openInNewTab(props.link);
      }

    return (
        <nav>
            <div className="logo">
                <NavLink to="/" onClick={closeMenu}>
                    <img src={img2} alt="Logo" />
                </NavLink>
            </div>

            <div className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
                <FaBars />
            </div>

            <div className={`close-button ${isOpen ? '' : 'hidden'}`} onClick={closeMenu}>
                <FaTimes />
            </div>

            <ul className={`nav-links ${isOpen ? 'show-nav' : ''}`}>
                <li>
                <HashLink to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }onClick={closeMenu}> Projects </HashLink>
                </li>
                <li>
                <NavLink to="/About" onClick={closeMenu}> About </NavLink>
                </li>
                <li> <NavLink to="/Resume" onClick={closeMenu}> Resume </NavLink>
                </li>
                <li><NavLink to='https://chrixti.webflow.io' className="uxui-design-button" onClick={handleClick}> Design </NavLink></li>
            </ul>

        </nav>
    );
};

export default Navbar;

