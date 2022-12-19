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
      {isLoading && <div className="spin"></div>}
      {error && <p>{error}</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} {...bike} />
        ))}
      </div>
    </>
  );
};

export default AvailableBikes;
