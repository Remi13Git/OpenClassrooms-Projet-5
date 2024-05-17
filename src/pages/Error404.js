import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/error404.scss';

const Error404 = () => {
  return (
    <div className='container'>
      <h1 className='container__h1'>404</h1>
      <p className='container__p'>Oups! La page que vous demandez n'existe pas.</p>
      <div className='container__link'><Link to="/">Retourner sur la page d'accueil</Link></div>
    </div>
    
  );
};

export default Error404;