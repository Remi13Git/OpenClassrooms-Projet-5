import React, { useState } from 'react';
import '../styles/collapse.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Collapse = ({ setDropdownToggleClass }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
      setDropdownToggleClass(!isCollapsed ? 'collapsed' : 'uncollapsed');
    };
  
    return (
      <div className='collapse'>
          <i className={`collapse__icon fa-solid fa-angle-up ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}></i>
      </div>
    );
};

export default Collapse;
