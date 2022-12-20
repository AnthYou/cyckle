import React from "react";
import { Bike } from "@/utils/interfaces";
import Button from "../UI/Button";

const heightToString = (height: number) => {
  const meters = Math.floor(height / 100);
  const centimeters = height % 100;
  return `${meters}m${centimeters}`;
};

const BikeOwnerCard = ({ description, owner }: Bike) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4">
      <img
        src={
          owner.photoUrl ||
          `https://ui-avatars.com/api/?name=${owner.firstName}+${owner.lastName}`
        }
        alt={`Photo de ${owner.firstName} ${owner.lastName}`}
        className="w-full sm:w-1/4 rounded-xl r-4"
      />
      <div className="w-full">
        <p>{description}</p>
        <ul className="mb-4">
          <li>Taille : {heightToString(owner.height)}</li>
          <li>Langues : Français</li>
          <li>Taux de réponse : 100%</li>
          <li>Délai de réponse : quelques heures</li>
        </ul>
        <Button color="secondary">Contacter {owner.firstName}</Button>
      </div>
    </div>
  );
};

export default BikeOwnerCard;
