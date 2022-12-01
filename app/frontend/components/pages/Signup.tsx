import React from "react";

import Button from "../UI/Button";
import ManDoor from "@/images/login.svg";
import Input from "../UI/Input";

const Signup = () => {
  const handleForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Form submitted");
  };

  return (
    <>
      <h1>Inscrivez-vous</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <form onSubmit={handleForm} className="w-full sm:w-1/2">
          <Input
            id="email"
            type="text"
            label="Email"
            name="email"
            placeholder="raymond@cyckle.com"
          />
          <Input
            id="password"
            type="password"
            label="Mot de passe"
            name="password"
            placeholder="******"
          />
          <Input
            id="password_confirmation"
            type="password"
            label="Confirmation du mot de passe"
            name="password_confirmation"
            placeholder="******"
          />
          <div className="flex items-center justify-center">
            <Button color="primary" className="mt-5">
              S'inscrire
            </Button>
          </div>
        </form>
        <img
          src={ManDoor}
          alt="A man opening a door."
          className="w-full sm:w-1/2"
        />
      </div>
    </>
  );
};

export default Signup;
