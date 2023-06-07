import React from 'react';
import images from '../../constants/images'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about us spoon" className='spoon__img' />
        <p className="p__opensans">
          Gericht is a modern fine dining restaurant dedicated to providing exceptional dining experiences through innovative cuisine, locally-sourced ingredients, and attentive service.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about us knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about us spoon" className='spoon__img' />
        <p className="p__opensans">
          Founded in 2005 by acclaimed chef Kevin Luo, Gericht has been a fixture in the local dining scene for over a decade. From its humble beginnings as a small bistro, Gericht has grown to become one of the city's premier fine dining destinations, renowned for its innovative cuisine and sophisticated atmosphere.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
