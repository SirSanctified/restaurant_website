import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1123 Hughes St, Masvingo, Zimbabwe</p>
        <p className="p__opensans">+263 77 123 8764</p>
        <p className="p__opensans">+263 71 235 0978</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"The best way to find youself is to loose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00AM - 12:00AM</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">07:00AM - 11:00PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">{new Date().getFullYear()} Gericht. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
