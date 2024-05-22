import React, { useState } from 'react';
import '../styles/dropdown.scss';
import Collapse from '../components/Collapse';

const Dropdown = ({ title, text, style }) => {
    const [dropdownToggleClass, setDropdownToggleClass] = useState('');
  
    return (
      <div className='dropdown' style={style}>
          <div className='dropdown__container'>
              <div className='dropdown__title'>{title}</div>
              <Collapse setDropdownToggleClass={setDropdownToggleClass} />
          </div>
          <div className={`dropdown__toggle ${dropdownToggleClass}`}>{text}</div>
      </div>
    );
};

export default Dropdown;
