import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useHttp from "@/hooks/use-http";
import { Bike } from "@/utils/interfaces";
import LoadingSpinner from "../UI/LoadingSpinner";
import BikeShowCard from "../bike/BikeShowCard";
import BikeReview from "../bike/BikeReview";
import BikeOwnerCard from "../bike/BikeOwnerCard";

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
            <BikeOwnerCard {...bike} />
          </div>
          <div className="my-4">
            <h2 className="mb-4">Ce qu'en ont pensé les locataires</h2>
            {bike.reviews.length === 0 && (
              <p className="text-center">Aucun avis pour le moment</p>
            )}
            {bike.reviews.map((review) => (
              <BikeReview key={review.id} {...review} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BikeDetails;
