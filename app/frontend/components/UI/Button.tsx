import React from "react";
import classes from "./Button.module.scss";

type ButtonColor = "primary" | "secondary" | "alternate";

interface ButtonProps {
  color: ButtonColor;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  color,
  className,
  children,
  onClick,
  disabled,
}: ButtonProps): JSX.Element => {
  let btnClasses = `${classes.Button} ${classes[color]}`;

  if (className) {
    btnClasses = `${classes.Button} ${classes[color]} ${className}`;
  }

  return (
    <button className={btnClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
