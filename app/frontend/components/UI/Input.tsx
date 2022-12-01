import React, { ForwardedRef } from "react";

import classes from "./Input.module.scss";

interface InputProps {
  id: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type, label, name, placeholder, value, onChange }: InputProps,
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
          value={value}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
