import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import img2 from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="logo">
                <Link to="/">
                    <img src={img2} alt="Logo" />
                </Link>
            </div>

  

            <div className="social-links">
                <a href="https://www.linkedin.com/in/lchris08/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/chrixti" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </div>

            <div className="email-link">
                <a href="mailto:your-email@example.com">lchristine9138@gmail.com</a>
            </div>

            <div className="made-by">
                <p>Made by Christine 2023 with React.js</p>
            </div>
        </footer>
    );
};

export default Footer;
