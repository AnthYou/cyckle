import React, { useEffect, useState } from "react";
import { Bike } from "@/utils/interfaces";
import useHttp from "@/hooks/use-http";
import BikeCard from "../bike/Bike";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Link } from "react-router-dom";

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
      <h1 className="mb-7">Quel vélo allez-vous louer aujourd'hui ?</h1>
      {isLoading && <LoadingSpinner />}
      {error && <p>{error}</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bikes.map((bike) => (
          <Link key={bike.id} to={`/bikes/${bike.id}`}>
            <BikeCard {...bike} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AvailableBikes;
