import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import img2 from '../assets/logo.png';
import '../style/home.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };



    return (
        <nav>
            <div className="logo">
                <HashLink to="/#intro" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} onClick={closeMenu}>
                    <img src={img2} alt="Logo" />
                </HashLink>
            </div>

            <div className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
                <FaBars />
            </div>

            <div className={`close-button ${isOpen ? '' : 'hidden'}`} onClick={closeMenu}>
                <FaTimes />
            </div>

            <ul className={`nav-links ${isOpen ? 'show-nav' : ''}`}>
                <li>
                <HashLink to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }onClick={closeMenu}> 01. about </HashLink>
                </li>
                <li>
                <HashLink to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }onClick={closeMenu}> 02. projects </HashLink>
                </li>
                <li>
                <HashLink to="/#resume" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }onClick={closeMenu}> 03. resume </HashLink>
                </li>
                <li><NavLink to='https://chrixti.webflow.io' className="uxui-design-button" onClick={closeMenu}>design</NavLink></li>
            </ul>

        </nav>
    );
};

export default Navbar;

