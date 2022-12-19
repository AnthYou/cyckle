import React from "react";
import { Bike } from "@/utils/interfaces";
import classes from "./Bike.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Bike = ({
  pricePerDayCents,
  name,
  city,
  size,
  averageRating,
  photoUrls,
}: Bike) => {
  const photoUrl = photoUrls
    ? photoUrls[0] || "https://via.placeholder.com/500"
    : "https://via.placeholder.com/500";
  const price = pricePerDayCents / 100;

  return (
    <div className={classes.Bike}>
      <img src={photoUrl} alt={name} />
      <div>
        <h3>{price}€/j</h3>
        <h4>{name}</h4>
        <p className="font-light">Taille {size}</p>
        <div className="flex justify-between items-center">
          <p className="font-light">📍 {city}</p>
          <div className="flex items-center">
            <p className="mr-1 text-yellow-500">{averageRating.toFixed(1)}</p>
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

export default Bike;
