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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
         Beatae, earum ad. Quisquam molestias consectetur ab quod impedit. Iste fugit doloribus commodi? Aspernatur similique laudantium obcaecati qui. Harum nobis, architecto quia consequuntur magni dignissimos odit libero, ullam atque labore vitae commodi nemo. Totam a ducimus quisquam quia aliquam provident blanditiis pariatur.
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
