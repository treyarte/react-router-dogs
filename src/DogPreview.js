import React from 'react';
import { Link } from 'react-router-dom';
import './DogPreview.css';

const DogPreview = ({ dog }) => {
  return (
    <div className='dog'>
      <h2>
        <Link to={'/dogs/' + dog.name.toLowerCase()}>{dog.name}</Link>
      </h2>
      <div>Age: {dog.age}</div>
      <img src={dog.src} alt='dog' />
    </div>
  );
};

export default DogPreview;
