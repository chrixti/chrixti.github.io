import React, { useState, useEffect } from 'react';
import items from '../components/Data';
import Menu from '../components/Menu';
import '../style/home.css';
import img1 from '../assets/moi.png';
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa';

function Home() {
    const [menuItem, setMenuItem] = useState(items);
    const [textIndex, setTextIndex] = useState(0);

    const texts = ["is a programmer", "is a designer", "wants to eat lasagna", "enjoys cooking", "loves to travel", "hikes often"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1500); // change every 1.5 seconds

        return () => clearInterval(interval);
    }, []);

    const ProjectsSection = () => {
        return (
            <section id='projects' className="Projects">
                <div className='section-separator'>
                    <span className='section-title'>02. Projects</span>
                </div>
                <Menu menuItem={menuItem} />
            </section>
        );
    };

    const ResumeSection = () => {
        return (
            <section id='resume' className="Resume">
                <div className='section-separator'>
                    <span className='section-title'>03. Resume</span>
                </div>
                <a href="your-resume-link" target="_blank" rel="noopener noreferrer" className='resbubble'>
                    <FaFileAlt className="icon" /> View My Full Resume
                </a>
            </section>
        );
    };

    const AboutSection = () => {
        return (
            <section id='about' className="about">
                <div className='section-separator'>
                    <span className='section-title'>01. About</span>
                </div>
                <div className="about-container">
                    <div className="about-wrapper">
                        <div className="about-photo">
                            <img src={img1} alt='photo of me' className='about-photo-img' />
                        </div>
                        <div className='about-text-box'>
                            <div className='div-block-6'>
                                <h1 className='about-text-heading'>Christine Lam</h1>
                                <div className='about-text-block'> Currently...learning how to play pickle ball</div>
                            </div>
                            <p className='about-text-p'>
                                Hi! I'm Christine (she/her) and I'm studying Computer Science with a minor in Psychology at Barnard College of Columbia University in the City of New York.  I grew up in China and NYC (if you're ever in Chinatown, I recommend trying Kong Sihk Tong!)
                            </p>
                            <p className='about-text-p'>
                                I enjoy learning about new advancements and different fields in tech but what matters to me most when it comes to technology is accessibility and inclusion. With a background in design, my goal is to contribute to the development of user-centered technology that breaks down barriers, ensuring that digital products are accessible to everyone, regardless of language or background.
                            </p>
                            <p className='about-text-p'>
                                When I'm not busy programming and building things, you can usually find me doing art, playing video games, or going on a side quest to learn something new!
                            </p>
                            <div className='about-links'> 
                                <a href="https://github.com/chrixti" target="_blank" rel="noopener noreferrer" className='abtbubble'>
                                    <FaGithub className="icon" />GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/lchris08/" target="_blank" rel="noopener noreferrer" className='abtbubble'>
                                    <FaLinkedin className="icon" />LinkedIn
                                </a>
                                <a href="mailto:lchristine9138@gmail.com" target="_blank" rel="noopener noreferrer" className='abtbubble'>
                                    <FaEnvelope className="icon" /> Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <div>
            <div id='intro' className='intro-section'>
                <div className='intro-container'>
                    <div className='intro-text'>
                        <p className='tiny'>00. Welcome</p>
                        <h1 className='name'>Christine</h1>
                        <h1 className='name changing-text'>{texts[textIndex]}</h1>
                        <div className='description'>Christine Lam is dedicated to creating technical solutions that make a positive difference in the world.</div>
                    </div>
                </div>
            </div>
            <AboutSection />
            <ProjectsSection />
            <ResumeSection />
        </div>
    );
};

export default Home;
