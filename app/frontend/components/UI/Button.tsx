import React from "react";
import classes from "./Button.module.scss";

type ButtonColor = "primary" | "secondary" | "alternate";
interface ButtonProps {
  color: ButtonColor;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ color, className, children }: ButtonProps): JSX.Element => {
  let btnClasses = `${classes.Button} ${classes[color]}`;

  if (className) {
    btnClasses = `${classes.Button} ${classes[color]} ${className}`;
  }

  return <button className={btnClasses}>{children}</button>;
};

export default Button;
