import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((dog) => dog.name.toLowerCase() === name);
  if (!dog) return Redirect('/');
  return (
    <div className='dogs'>
      <div className='dog'>
        <h2>{dog.name}</h2>
        <span>Age: {dog.age}</span>
        <img src={dog.src} alt='dog' />
        <ul className='facts'>
          {dog.facts.map((fact, index) => (
            <li className='fact' key={index}>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DogDetails;
