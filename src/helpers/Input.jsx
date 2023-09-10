import React from "react";
import { ErrorMessage, Field } from "formik";
const Input = ({ id, type, name, label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl">
        {label}
      </label>
      <Field
        id={id}
        required="required"
        name={name}
        type={type}
        className="border-2 border-gray-500 rounded-xl p-2 px-4 focus:outline-none"
      />
      <div className="text-red-700">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Input;
