import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import ManDoor from "@/images/login.svg";
import Input from "../UI/Input";
import { loginUser } from "@/store/actions/auth";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { messageActions } from "@/store/slices/message-slice";
import useInput from "@/hooks/use-input";

const Login = () => {
  const dispatch = useAppDispatch();
  const { message: error } = useAppSelector((state) => state.message);

  const validateEmail = (email: string) =>
    email.trim() !== "" && email.includes("@");
  const validatePassword = (password: string) => password.length >= 6;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(validatePassword);

  const isValid = enteredEmailIsValid && enteredPasswordIsValid;

  useEffect(() => {
    dispatch(messageActions.clearMessage());

    return () => {
      dispatch(messageActions.clearMessage());
    };
  }, [dispatch]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(loginUser({ email: enteredEmail, password: enteredPassword }));
    resetPasswordInput();
  };

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
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            placeholder="raymond@cyckle.com"
            required={true}
          />
          {enteredEmailHasError && (
            <p className="text-red-500">
              Veuillez entrer une adresse mail valide.
            </p>
          )}
          <Input
            id="password"
            type="password"
            label="Mot de passe"
            name="password"
            placeholder="******"
            value={enteredPassword}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            required={true}
          />
          {enteredPasswordHasError && (
            <p className="text-red-500">
              Votre mot de passe doit comporter au moins 6 caractères.
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col items-center justify-center gap-4">
            <Button color="primary" className="mt-5" disabled={!isValid}>
              S'inscrire
            </Button>
            <p>
              Vous n'avez pas encore de compte ?{" "}
              <Link to="/signup">Inscrivez-vous</Link>
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
};

export default Login;
