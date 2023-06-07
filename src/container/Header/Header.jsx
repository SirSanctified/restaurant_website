import React from 'react';
import images from '../../constants/images';
import {SubHeading} from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>
      For us, the key to fine dining is all about the experience. From the moment you walk through our doors, our attentive staff will be there to ensure that every aspect of your dining experience is perfect, from the food to the ambiance to the service.
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
    
  </div>
);

export default Header;
