import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useHttp from "@/hooks/use-http";
import { Bike } from "@/utils/interfaces";
import LoadingSpinner from "../UI/LoadingSpinner";

const BikeDetails = () => {
  const params = useParams<{ id: string }>();

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
      {bike && (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{bike.name}</h1>
          <p className="text-xl">{bike.description}</p>
        </div>
      )}
    </>
  );
};

export default BikeDetails;
