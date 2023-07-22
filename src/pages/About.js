import React from 'react';
import '../style/about.css';
import img1 from '../assets/projectplaceholder.png';


const About = () => {
  return (
    <section className = "about-me-section">
      <div className = "about-container">
        <div className = "about-wrapper">
          <div className = "about-photo">
            <img src = {img1}  width='435' alt='photo of me' className = 'about-photo-img'/>
          </div>
          <div className='about-text-box'>
            <div className='div-block-6'>
              <div className='about-text-block'>profile</div>
              <h1 className='about-text-heading'>Christine Lam</h1>
              <div className='about-text-block'> Currently...learning rock climbing
              </div>
            </div>
            <p className='about-text-p'>Hello there, my name is Christine and I'm from New York City! I'm an undergraduate student at Barnard College of Columbia University in the City of New York where I major in Computer Science with a minor in Psychology.‍<br></br><br></br>During my free time, I immerse myself in a world of my imagination by creating art. If I'm not drawing then I'm online playing video games with friends or trying to learn something new! </p>
          </div>
        </div>
      </div>
      <div className='skills-container'>
      <div className='skills-title'>Skills</div>
        <div className='skills-wrapper'>
          <div className='skills-groups'>
            <div className='skill-group'>
              <div className='title-small'>Design</div>
              <div className='text-block-6'>Figma</div>
              <div className='text-block-6'>AdobeXD</div>
              <div className='text-block-6'>Adobe Photoshop</div>
            </div>
            <div className='skill-group'>
              <div className='title-small'>Technical</div>
              <div className='text-block-6'>Python</div>
              <div className='text-block-6'>Java</div>
              <div className='text-block-6'>HTML & CSS</div>
              <div className='text-block-6'>Javascript</div>
              <div className='text-block-6'>React.js</div>
              <div className='text-block-6'>Swift</div>
            </div>
            <div className='skill-group'>
              <div className='title-small'>Languages</div>
              <div className='text-block-6'>English (fluent)</div>
              <div className='text-block-6'>Mandarin (fluent)</div>
            </div>
            <div className='skill-group'>
              <div className='title-small'>Other</div>
              <div className='text-block-6'>Microsoft Office</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default About;