import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../styles/home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <div className='content'>
      <Banner src='image-src-1.png' alt='fôret' opacity={0.4} text={'Chez vous, partout et ailleurs'} />
      <div className='gallery'>
        {galleryData.map(item => (
          <Link to={`/location/${item.id}`} key={item.id}>
            <Card title={item.title} src={item.cover} alt='Photo du logement' />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
