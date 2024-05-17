import React from 'react';
import '../styles/card.scss';

const Card = ({ src, alt, title }) => {
    const handleClick = () => {
      };
  return (
    <div className='card__container' onClick={handleClick}>
        <img className='card__img' src={src} alt={alt} ></img>
        <div className='card__title'>{title}</div>
    </div>
  );
};

export default Card;