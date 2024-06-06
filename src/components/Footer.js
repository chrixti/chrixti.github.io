import React from 'react';
import '../style/home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="made-by">
                <p>Built by Christine with React.js</p>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/lchris08/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/chrixti" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:lchristine9138@gmail.com" className="email-link">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
