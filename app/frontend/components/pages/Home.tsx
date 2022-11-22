import React from "react";
import Button from "../UI/Button";
import Cyclist from "../../images/biking.svg";

const Home = () => {
  return (
    <div>
      <h1>Et si on louait un vélo ?</h1>
      <p>Louer un vélo entre particuliers n'a jamais été aussi simple.</p>
      <div className="flex">
        <Button color="primary" className="mr-2">Je souhaite louer</Button>
        <Button color="secondary">Je suis propriétaire</Button>
      </div>
      <img src={Cyclist} alt="Cyclist" />
    </div>
  )
};

export default Home;
