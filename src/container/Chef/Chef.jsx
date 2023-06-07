import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title='Chef&#39;s word' />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_qoute">
          <img src={images.quote} alt="qoute" />
          <p className="p__opensans">
            I believe that cooking is an art form, and that every dish is an opportunity to create something unique and beautiful.
          </p>
        </div>
        <p className="p__opensans">
          At Gericht, we are passionate about using the freshest, highest-quality ingredients to create dishes that not only taste amazing, but also delight the senses and inspire the imagination. Whether you're a longtime fan of our restaurant or a first-time guest, we are dedicated to providing you with a dining experience that you will never forget.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="chef sign" />
      </div>
    </div>
  </div>
);

export default Chef;
