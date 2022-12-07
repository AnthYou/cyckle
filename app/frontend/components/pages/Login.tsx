import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from "../UI/Button";
import ManDoor from "@/images/login.svg";
import Input from "../UI/Input";
import { Credentials, loginUser } from '@/store/actions/auth';
import { useAppDispatch } from '@/hooks/redux';

const defaultValues: Credentials = {
  email: "",
  password: ""
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<Credentials>(defaultValues);
  const isValid = formValues.email.includes("@") && formValues.password.length >= 6;

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(loginUser(formValues));
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  return (
    <>
      <h1>Connectez-vous</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <form onSubmit={handleFormSubmit} className="w-full sm:w-1/2">
          <Input
            id="email"
            type="text"
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="raymond@cyckle.com"
            required={true}
          />
          <Input
            id="password"
            type="password"
            label="Mot de passe"
            name="password"
            placeholder="******"
            value={formValues.password}
            onChange={handleInputChange}
            required={true}
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <Button color="primary" className="mt-5" disabled={!isValid}>
              S'inscrire
            </Button>
            <p>
              Vous n'avez pas encore de compte ? <Link to="/signup">Inscrivez-vous</Link>
            </p>
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
}

export default Login;
