import React from "react";
import Banner from "../layout/Banner";
import { keySellingPoints } from "@/utils/constants";
import KeySellingPoint from "../layout/KeySellingPoint";

const Home = () => {
  return (
    <>
      <Banner />
      {keySellingPoints.map((ksp) => (
        <KeySellingPoint
          id={ksp.id}
          key={ksp.id}
          title={ksp.title}
          content={ksp.content}
          image={ksp.image}
        />
      ))}
    </>
  );
};

export default Home;
