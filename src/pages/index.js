import React, { useState, useEffect } from 'react';
import items from '../components/Data';
import Menu from '../components/Menu';
import '../style/home.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

function Home() {

    const [menuItem, setMenuItem] = useState(items);
    const [banner, setBanner] = useState(banner1);

    const ProjectsSection = () => {
        return (
            <section id='projects' className="Projects">
                <Menu menuItem={menuItem}/>
            </section>

        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setBanner((currentBanner) => {
            if (currentBanner === banner1) {
              return banner2;
            } else if (currentBanner === banner2) {
              return banner3;
            } else {
              return banner1;
            }
          });
        }, 2000); // change every 2 seconds
      
        return () => clearInterval(interval);
      }, []);      

    return (
        <div>
            <div className='intro-section'>
                <div className = 'intro-container'>
                    <div className='div-block-3'>
                        <div className='intro-text'>
                            <h1 className='name'>Christine</h1>
                            <div className='description'>Dedicated to creating technical solutions that make a positive difference in the world</div>
                        </div>
                        <div className='div-block-4'> <img src={banner} width='349' sizes ='(max-width: 767px) 100vw, 349px' alt = 'banner' class='image-4' /></div>
                    </div>
                </div>
            </div>
           
            <ProjectsSection/>     
        </div>
    );
};

export default Home;

