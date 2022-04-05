import React, { useState } from "react";

export function useForm(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(`[${name}]: ${value}`);
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInput,
  };
}

export const CustomForm = (props) => {
  return <form>{props.children}</form>;
};
