import React, { useEffect, useState } from "react";
import { Bike } from "@/utils/interfaces";
import useHttp from "@/hooks/use-http";
import BikeCard from "../bike/Bike";

const AvailableBikes = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const { isLoading, error, sendRequest: fetchBikes } = useHttp();

  useEffect(() => {
    fetchBikes(
      {
        url: "/api/v1/bikes",
      },
      (responseJson) => {
        const fetchedBikes: Bike[] = responseJson.data;
        setBikes(fetchedBikes);
      }
    );
  }, [fetchBikes]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {bikes.map((bike) => (
        <BikeCard key={bike.id} {...bike} />
      ))}
    </>
  );
};

export default AvailableBikes;
