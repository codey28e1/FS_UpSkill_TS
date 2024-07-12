import type { ComponentPropsWithoutRef } from "react";
import React from "react";
type input = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;
const Input: React.FC<input> = (props) => {
    const {label, id} = props
  return (
    <div className="control">
        <label htmlFor={id}>{label}</label>
        <input {...props} />
    </div>
  )
}

export default Input