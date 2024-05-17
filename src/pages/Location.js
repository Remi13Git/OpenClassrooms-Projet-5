import React, { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import Dropdown from '../components/Dropdown';
import Tag from '../components/Tag';
import '../styles/location.scss';
import { useParams, Navigate } from 'react-router-dom'; 

const Location = () => {
  const { id } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        const location = data.find(item => item.id === id);

        
        // Mettre à jour l'état avec les données de l'emplacement spécifique
        setLocationData(location);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        // Mettre isLoading à false après 2 secondes
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchLocationData();
  }, [id]);
  
  if (isLoading) {
    return (
      <div className='container'>
        <div className='loader'>
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    );
  }

  if (!locationData) {
    return <div className='container'>
    <div className='container__link'><Navigate to="/pages/Error404"></Navigate></div>
  </div>;
  }

  return (
    <div className='logement'>
      <Slideshow locationData={locationData} />
      <div className='data'>
        <div className='data__container'>
          <div className='title-location-tags__container'>
              <div className='title'>{locationData.title}</div>
              <div className='location'>{locationData.location}</div>
              <div className='tags'>
                {locationData.tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
                ))}
              </div>
          </div>
          <div className='host-rating__container'>
              <div className='host__container'>
                <div className='name'>{locationData.host.name}</div>
                <img className='picture' src={locationData.host.picture} alt='Hôte'></img>
              </div>
              <div className='rating__container'>
                {[...Array(parseInt(locationData.rating))].map((_, index) => (
                  <i key={index} className="fa-solid fa-star activ"></i>
                ))}
                {[...Array(5 - parseInt(locationData.rating))].map((_, index) => (
                  <i key={index + parseInt(locationData.rating)} className="fa-solid fa-star inactiv"></i>
                ))}
              </div>
          </div>
        </div>
        <div className='dropdown__container'>
          <Dropdown title={'Description'} text={locationData.description}/>
          <Dropdown title={'Équipements'} text={
          <ul>
              {locationData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
          </ul>
        }/>
        </div>
      </div>
    </div>
  );
};

export default Location;
