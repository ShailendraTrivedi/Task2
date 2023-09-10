import React from "react";
import { Formik, Form } from "formik";
import { RequistionDetailsSchema } from "../schema";
import Input from "../helpers/Input";
import Select from "../helpers/Select";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Non Binary", label: "Non Binary" },
];
const urgencyOptions = [
  { value: "Urgent", label: "Urgent" },
  { value: "Immediate joining", label: "Immediate joining" },
  { value: "Relaxed", label: "Relaxed" },
];

const RequistionDetails = ({ handleNext, setAllData }) => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          openings: "",
          gender: "",
          urgency: "",
        }}
        validationSchema={RequistionDetailsSchema}
        onSubmit={(values) => {
          setAllData((prevData) => ({
            ...prevData,
            requistionDetails: values, 
          }));
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-5">
            <Input
              id="title"
              type="text"
              name="title"
              label="Requisition Title"
            />
            <Input
              id="openings"
              type="text"
              name="openings"
              label="Number of Openings"
            />
            <Select
              id="gender"
              name="gender"
              label="Select Gender"
              error={errors.gender}
              touched={touched.gender}
              options={genderOptions}
            />
            <Select
              id="urgency"
              name="urgency"
              label="Select Urgency"
              error={errors.urgency}
              touched={touched.urgency}
              options={urgencyOptions}
            />
            <div className="flex justify-end gap-5">
              <button
                type="submit"
                className="p-2 w-[10rem] bg-red-500 text-white rounded-lg"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequistionDetails;
