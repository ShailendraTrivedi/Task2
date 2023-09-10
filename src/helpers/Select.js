// Select.js
import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = ({ id, name, label, error, touched, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xl">
        {label}
      </label>
      <Field
        as="select"
        id={id}
        name={name}
        className={`border-2 rounded-xl p-2 px-4 focus:outline-none ${
          error && touched ? "border-red-500" : "border-gray-500"
        } `}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <div className="text-red-700">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Select;
