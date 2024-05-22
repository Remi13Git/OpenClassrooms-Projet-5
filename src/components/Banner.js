// Banner.js
import React from 'react';
import '../styles/banner.scss';

const Banner = ({ src, alt, opacity, text, shadow }) => {
  return (
    <div className='banner' style={{ boxShadow: shadow }}>
      <img className='banner__img' src={src} alt={alt} style={{ opacity: opacity }} />
      <div className='banner__text'>{text}</div>
    </div>
  );
};

export default Banner;
