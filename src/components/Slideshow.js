import React, { useState } from 'react';

const Slideshow = ({ locationData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === locationData.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? locationData.pictures.length - 1 : prevIndex - 1));
  };

  return (
    <div className='carrousel'>
      {locationData.pictures.map((picture, index) => (
        <img
          key={index}
          className={`carrousel__image ${index === activeIndex ? 'active' : 'inactive'}`}
          src={picture}
          alt={`Présentation ${index + 1}`}
        />
      ))}
      {locationData.pictures.length > 1 && (
        <div className='chevron__container'>
          <i className='fa-solid fa-chevron-left' onClick={handlePreviousClick}></i>
          <i className='fa-solid fa-chevron-right' onClick={handleNextClick}></i>
        </div>
      )}
      {locationData.pictures.length > 1 && (
        <p className='image__counter'>{`${activeIndex + 1}/${locationData.pictures.length}`}</p>
      )}
    </div>
  );
};

export default Slideshow;
