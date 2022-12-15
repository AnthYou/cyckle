import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import ManDoor from "@/images/login.svg";
import Input from "../UI/Input";
import Select, { SelectOptions } from "../UI/Select";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { SignupParams, signupUser } from "@/store/actions/auth";
import { messageActions } from "@/store/slices/message-slice";
import useInput from "@/hooks/use-input";

const genderOptions: SelectOptions[] = [
  { id: 1, label: "Homme", value: "male" },
  { id: 2, label: "Femme", value: "female" },
  { id: 3, label: "Non-binaire", value: "non-binary" },
];

const Signup = () => {
  const dispatch = useAppDispatch();
  const { message: error } = useAppSelector((state) => state.message);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((email: string) => email.trim() !== "" && email.includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((password: string) => password.length >= 6);
  const {
    value: enteredPasswordConfirmation,
    isValid: enteredPasswordConfirmationIsValid,
    hasError: enteredPasswordConfirmationHasError,
    valueChangeHandler: passwordConfirmationChangedHandler,
    inputBlurHandler: passwordConfirmationBlurHandler,
    reset: resetPasswordConfirmationInput,
  } = useInput(
    (passwordConfirmation: string) => passwordConfirmation === enteredPassword
  );
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((firstName: string) => firstName.length >= 3);
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((lastName: string) => lastName.length >= 2);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: enteredPhoneHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((phone: string) => phone.length >= 10);
  const {
    value: enteredHeight,
    isValid: enteredHeightIsValid,
    hasError: enteredHeightHasError,
    valueChangeHandler: heightChangedHandler,
    inputBlurHandler: heightBlurHandler,
    reset: resetHeightInput,
  } = useInput((height: number) => height >= 100 && height <= 250);
  const {
    value: enteredGender,
    isValid: enteredGenderIsValid,
    hasError: enteredGenderHasError,
    valueChangeHandler: genderChangedHandler,
    inputBlurHandler: genderBlurHandler,
    reset: resetGenderInput,
  } = useInput(
    (gender: string) =>
      genderOptions.map((object) => object.value).includes(gender),
    "male"
  );

  const isValid =
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredGenderIsValid &&
    enteredHeightIsValid &&
    enteredPhoneIsValid &&
    enteredPasswordIsValid &&
    enteredPasswordConfirmationIsValid;

  useEffect(() => {
    dispatch(messageActions.clearMessage());

    return () => {
      dispatch(messageActions.clearMessage());
    };
  }, [dispatch]);

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const formParams: SignupParams = {
      user: {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        gender: enteredGender,
        height: enteredHeight,
        phone: enteredPhone,
        password: enteredPassword,
      },
    };

    dispatch(signupUser(formParams));
    resetPasswordInput();
    resetPasswordConfirmationInput();
  };

  return (
    <>
      <h1>Inscrivez-vous</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <form onSubmit={handleForm} className="w-full sm:w-1/2">
          <Input
            id="firstName"
            type="text"
            label="Prénom"
            name="firstName"
            placeholder="Raymond"
            value={enteredFirstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            required={true}
          />
          {enteredFirstNameHasError && (
            <p className="text-red-500">
              Votre prénom doit comporter au moins 3 caractères.
            </p>
          )}
          <Input
            id="lastName"
            type="text"
            label="Nom de famille"
            name="lastName"
            placeholder="Poulidor"
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            required={true}
          />
          {enteredLastNameHasError && (
            <p className="text-red-500">
              Votre nom de famille doit comporter au moins 2 caractères.
            </p>
          )}
          <Select
            id="gender"
            name="gender"
            label="Genre"
            options={genderOptions}
            value={enteredGender}
            onChange={genderChangedHandler}
            onBlur={genderBlurHandler}
            required={true}
          />
          {enteredGenderHasError && (
            <p className="text-red-500">Vous devez renseigner un genre.</p>
          )}
          <Input
            id="height"
            type="number"
            label="Taille (en cm)"
            name="height"
            placeholder="150"
            min="100"
            max="200"
            value={enteredHeight}
            onChange={heightChangedHandler}
            onBlur={heightBlurHandler}
            required={true}
          />
          {enteredHeightHasError && (
            <p className="text-red-500">
              Votre taille doit être comprise entre 100 et 250 cms (entre 1m et
              2,5m).
            </p>
          )}
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
            id="phone"
            type="tel"
            label="Numéro de téléphone"
            name="phone"
            value={enteredPhone}
            onChange={phoneChangedHandler}
            onBlur={phoneBlurHandler}
            placeholder="06 01 02 03 04"
            required={true}
          />
          {enteredPhoneHasError && (
            <p className="text-red-500">
              Veuillez entrer un numéro de téléphone valide.
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
          <Input
            id="passwordConfirmation"
            type="password"
            label="Confirmation du mot de passe"
            name="passwordConfirmation"
            placeholder="******"
            value={enteredPasswordConfirmation}
            onChange={passwordConfirmationChangedHandler}
            onBlur={passwordConfirmationBlurHandler}
            required={true}
          />
          {enteredPasswordConfirmationHasError && (
            <p className="text-red-500">
              Les deux mots de passe ne correspondent pas. Vérifiez votre
              saisie.
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col items-center justify-center gap-4">
            <Button color="primary" className="mt-5" disabled={!isValid}>
              S'inscrire
            </Button>
            <p>
              Vous avez déjà un compte ?{" "}
              <Link to="/login">Identifiez-vous</Link>
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

export default Signup;
