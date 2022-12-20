import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useHttp from "@/hooks/use-http";
import { Bike } from "@/utils/interfaces";
import LoadingSpinner from "../UI/LoadingSpinner";
import BikeShowCard from "../bike/BikeShowCard";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const heightToString = (height: number) => {
  const meters = Math.floor(height / 100);
  const centimeters = height % 100;
  return `${meters}m${centimeters}`;
};

const BikeDetails = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [bike, setBike] = useState<Bike>();
  const { isLoading, error, sendRequest: fetchBike } = useHttp();

  useEffect(() => {
    fetchBike(
      {
        url: `/api/v1/bikes/${params.id}`,
      },
      (responseJson) => {
        const fetchedBike: Bike = responseJson.data;
        setBike(fetchedBike);
      }
    );
  }, [fetchBike]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      <button className="mb-5" onClick={() => navigate(-1)}>
        ↩︎ Revenir aux résultats
      </button>
      {bike && (
        <>
          <BikeShowCard {...bike} />
          <div className="my-4">
            <h2 className="mb-4">Le mot du propriétaire</h2>
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <img
                src={
                  bike.owner.photoUrl ||
                  `https://ui-avatars.com/api/?name=${bike.owner.firstName}+${bike.owner.lastName}`
                }
                alt={`Photo de ${bike.owner.firstName} ${bike.owner.lastName}`}
                className="w-full sm:w-1/4 rounded-xl r-4"
              />
              <div className="w-full">
                <p>{bike.description}</p>
                <ul className="mb-4">
                  <li>Taille : {heightToString(bike.owner.height)}</li>
                  <li>Langues : Français</li>
                  <li>Taux de réponse : 100%</li>
                  <li>Délai de réponse : quelques heures</li>
                </ul>
                <Button color="secondary">Contacter {bike.owner.firstName}</Button>
              </div>
            </div>
          </div>
          <div className="my-4">
            <h2 className="mb-4">Ce qu'en ont pensé les locataires</h2>
            {bike.reviews.length === 0 && (
              <p className="text-center">Aucun avis pour le moment</p>
            )}
            {bike.reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <img
                      src={review.user.photoUrl || `https://ui-avatars.com/api/?name=${review.user.firstName}+${review.user.lastName}`}
                      alt={`Photo de ${review.user.firstName} ${review.user.lastName}`}
                      className="h-20 w-20 rounded-full"
                    />
                    <p className="m-0 font-bold">{review.user.firstName}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={i < review.rating ? "text-yellow-500" : ""}
                      />
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <p>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BikeDetails;
