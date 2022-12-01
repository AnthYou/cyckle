import React, { ForwardedRef } from "react";

import classes from "./Input.module.scss";

interface InputProps {
  id: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  name: string;
  min?: string;
  max?: string;
  placeholder?: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type,
      label,
      name,
      min,
      max,
      placeholder,
      value,
      onChange,
      required,
    }: InputProps,
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
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          ref={ref}
          required={required}
        />
      </div>
    );
  }
);

export default Input;
