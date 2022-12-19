import React from 'react';
import { Bike } from '@/utils/interfaces';
import classes from './Bike.module.scss';

const Bike = ({pricePerDayCents, name, city, size, photoUrls}: Bike) => {
  const photoUrl = photoUrls ? photoUrls[0] || 'https://via.placeholder.com/500' : 'https://via.placeholder.com/500';
  const price = pricePerDayCents / 100;

  return (
    <div className={classes.Bike}>
      <img src={photoUrl} alt={name} />
      <div>
        <h3>{price}€/j</h3>
        <h4>{name}</h4>
        <p>Taille {size}</p>
        <p>📍 {city}</p>
      </div>
    </div>
  )
}

export default Bike;
