import { InputUnstyledTypeMap } from "@mui/base";
import React, { ForwardedRef } from "react";

import classes from "./Input.module.scss";

interface InputProps {
  id: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type, label, name, placeholder }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={classes.Input}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
