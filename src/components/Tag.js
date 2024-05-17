import React from 'react';
import '../styles/tag.scss';

const Tag = ( { text}) => {
    return (
      <div className='tag'>{text}</div>
    );
  };
  
  export default Tag;