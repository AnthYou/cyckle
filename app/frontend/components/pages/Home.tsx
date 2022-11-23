import React from "react";
import Button from "../UI/Button";
import Cyclist from "../../images/biking.svg";
import Blob from "../../images/blob.svg";

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div className="w-full">
        <h1>Et si on louait un vélo ?</h1>
        <p>Louer un vélo entre particuliers n'a jamais été aussi simple.</p>
        <div className="flex">
          <Button color="primary" className="mr-2">Je souhaite louer</Button>
          <Button color="secondary">Je suis propriétaire</Button>
        </div>
      </div>
      <div className="relative">
        <img src={Cyclist} alt="Cyclist" className="w-full absolute" />
        <img src={Blob} alt="Cyclist" className="w-full" />
      </div>
    </div>
  )
};

export default Home;
