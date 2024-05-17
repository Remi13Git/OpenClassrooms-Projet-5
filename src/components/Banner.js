import React from 'react';
import '../styles/banner.scss';

const Banner = ({ src, alt, opacity, text }) => {
  return (
    <div className='banner'>
        <img className='banner__img' src={src} alt={alt} style={{ opacity: opacity }} ></img>
        <div className='banner__text'>{text}</div>
    </div>
  );
};

export default Banner;