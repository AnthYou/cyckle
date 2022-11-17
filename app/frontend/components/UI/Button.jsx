import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  // type BtnColor = primary | secondary | alternate
  const { color, children, className, btnProps } = props;
  const btnClasses = `${classes.Button} ${classes[color]} ${className}`;

  return <button className={btnClasses} {...btnProps}>{children}</button>
}

export default Button;
