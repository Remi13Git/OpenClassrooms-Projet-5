import React from 'react';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <img className='footer__logo' src='../logo-white.png' alt='logo'></img>
        <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;