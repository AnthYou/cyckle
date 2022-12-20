import React from "react";
import { Bike } from "@/utils/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./BikeShowCard.module.scss";

const BikeShowCard = ({
  name,
  pricePerDayCents,
  photoUrls,
  size,
  city,
  averageRating,
}: Bike) => {
  const photoUrl = photoUrls
    ? photoUrls[0] || "https://via.placeholder.com/500"
    : "https://via.placeholder.com/500";
  const price = pricePerDayCents / 100;

  return (
    <div className={classes.BikeShowCard} style={{backgroundImage: `url(${photoUrl})`}}>
      <div className={classes.BikeShowCard__overlay}>
        <div className="flex justify-between items-center">
          <h1>{name}</h1>
          <h1>{price}€/j</h1>
        </div>
        <p>Taille {size}</p>
        <div className="flex justify-between items-center">
          <p>📍 {city}</p>
          <div className="flex items-center">
            <p className="mb-0 mr-1 text-yellow-500">{averageRating.toFixed(1)}</p>
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={i < averageRating ? "text-yellow-500" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeShowCard;
