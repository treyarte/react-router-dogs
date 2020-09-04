import React from 'react';
import DogPreview from './DogPreview';
import './DogList.css';
import { v4 as uuid } from 'uuid';

const DogList = ({ dogs }) => {
  return (
    <div className='dogs-list'>
      {dogs.map((dog) => (
        <DogPreview dog={dog} key={uuid()} />
      ))}
    </div>
  );
};

export default DogList;
