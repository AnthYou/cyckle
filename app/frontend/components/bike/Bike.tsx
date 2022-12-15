import React from 'react';
import { Bike } from '@/utils/interfaces';

const Bike = ({pricePerDayCents, name, city, photoUrls, owner}: Bike) => {
  const photoUrl = photoUrls ? photoUrls[0] || 'https://via.placeholder.com/500' : 'https://via.placeholder.com/500';
  const price = pricePerDayCents / 100;

  return (
    <div className="bike">
      <div className="bike__image">
        <img src={photoUrl} alt={name} />
      </div>
      <div className="bike__info">
        <h3>{name}</h3>
        <p>{city}</p>
        <p>{price}€/j</p>
        <p>{owner.firstName}</p>
      </div>
    </div>
  )
}

export default Bike;
