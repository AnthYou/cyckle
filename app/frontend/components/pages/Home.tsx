import React from "react";
import Button from "../UI/Button";

const Home = () => {
  return (
    <div>
      <h1>Et si on louait un vélo ?</h1>
      <p>Louer un vélo entre particuliers n'a jamais été aussi simple.</p>
      <div className="flex">
        <Button color="primary" className="mr-2">Je souhaite louer</Button>
        <Button color="secondary">Je suis propriétaire</Button>
      </div>
    </div>
  )
};

export default Home;
