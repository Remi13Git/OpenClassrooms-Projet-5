import React from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import useWindowWidth from '../hooks/useWindowWidth';
import '../styles/about.scss';

const About = () => {
  const width = useWindowWidth();
  const dropdownStyle = { width: width < 600 ? '90%' : '70%' };

  return (
    <div className='about__container'>
      <Banner src='image-src-2.png' alt='montagne' opacity={0.7} shadow={'none'} />
      <Dropdown title={'Fiabilité'} style={dropdownStyle} text={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
      <Dropdown title={'Respect'} style={dropdownStyle} text={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
      <Dropdown title={'Service'} style={dropdownStyle} text={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
      <Dropdown title={'Sécurité'} style={dropdownStyle} text={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}/>
    </div>
  );
};

export default About;
