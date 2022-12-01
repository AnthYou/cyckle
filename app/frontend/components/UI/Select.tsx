import React from "react";

import classes from "./Select.module.scss";

export interface SelectOptions {
  id: number;
  label: string;
  value: string;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: SelectOptions[];
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  required?: boolean;
}

const Select = ({ id, name, label, options, value, onChange, required }: SelectProps) => {
  return (
    <div className={classes.Select}>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange} required={required}>
        {options.map(option => (<option key={option.id} value={option.value}>{option.label}</option>))}
      </select>
    </div>
  );
};

export default Select;
