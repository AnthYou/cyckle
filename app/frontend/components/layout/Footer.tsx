import React from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${classes.Footer}`}>
      <div className="container flex flex-col text-center sm:flex-row sm:text-left">
        <div className={classes.logo}>
          <h3>Cyckle</h3>
          <p>Location de vélos entre particuliers</p>
        </div>
        <div className="flex flex-1 justify-between">
          <ul className="sm:mr-4">
            <li>S'inscrire / se connecter</li>
            <li>Blog</li>
            <li>Nous rejoindre</li>
          </ul>
          <ul>
            <li>Contactez-nous</li>
            <li>F.A.Q.</li>
            <li>Politique de confidentialité</li>
            <li>Mentions légales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
