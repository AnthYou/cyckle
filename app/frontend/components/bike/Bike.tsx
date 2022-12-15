import React from 'react';
import { Bike } from '@/utils/interfaces';
import classes from './Bike.module.scss';

const Bike = ({pricePerDayCents, name, city, photoUrls, owner}: Bike) => {
  const photoUrl = photoUrls ? photoUrls[0] || 'https://via.placeholder.com/500' : 'https://via.placeholder.com/500';
  const price = pricePerDayCents / 100;

  return (
    <div className={classes.Bike}>
      <img src={photoUrl} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{city}</p>
        <p>{price}€/j</p>
        <p>{owner.firstName}</p>
      </div>
    </div>
  )
}

export default Bike;
