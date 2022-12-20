import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useHttp from "@/hooks/use-http";
import { Bike } from "@/utils/interfaces";
import LoadingSpinner from "../UI/LoadingSpinner";
import BikeShowCard from "../bike/BikeShowCard";

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
      <button onClick={() => navigate(-1)}>Revenir aux résultats</button>
      {bike && (
        <BikeShowCard {...bike} />
      )}
    </>
  );
};

export default BikeDetails;
