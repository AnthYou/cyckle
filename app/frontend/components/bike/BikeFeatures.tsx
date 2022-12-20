import React from "react";
import { Bike, translateBikeGender } from "@/utils/interfaces";

const BikeFeatures = ({
  brand,
  model,
  releaseYear,
  color,
  gender,
  size,
  isElectric,
  batteryLife,
  weight,
  groupset,
}: Bike) => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h2 className="mb-4">Caractéristiques</h2>
      <table className="w-full">
        <tbody>
          <tr>
            <td>Marque</td>
            <td className="text-right">{brand}</td>
          </tr>
          <tr>
            <td>Modèle</td>
            <td className="text-right">{model}</td>
          </tr>
          <tr>
            <td>Année</td>
            <td className="text-right">{releaseYear}</td>
          </tr>
          <tr>
            <td>Couleur</td>
            <td className="text-right">{color}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td className="text-right">{translateBikeGender(gender)}</td>
          </tr>
          <tr>
            <td>Taille</td>
            <td className="text-right">{size}</td>
          </tr>
          <tr>
            <td>Électrique</td>
            <td className="text-right">{isElectric ? "Oui" : "Non"}</td>
          </tr>
          {isElectric && (
            <tr>
              <td>Autonomie</td>
              <td className="text-right">{batteryLife} km</td>
            </tr>
          )}
          <tr>
            <td>Poids</td>
            <td className="text-right">{weight} kg</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td className="text-right">{groupset}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BikeFeatures;
