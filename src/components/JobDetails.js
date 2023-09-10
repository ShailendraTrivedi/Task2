import { Form, Formik } from "formik";
import React from "react";
import { JobDetailSchema } from "../schema";
import Input from "../helpers/Input";

const JobDetails = ({ handlePrev, handleNext, setAllData }) => {
  const handleSubmit = (values) => {
    setAllData((prevData) => ({
      ...prevData,
      jobDetails: values,
    }));
    handleNext();
  };

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          details: "",
          location: "",
        }}
        validationSchema={JobDetailSchema}
        onSubmit={(values) => {
          // console.log(values)
          handleSubmit(values);
        }}
      >
        {() => (
          <Form className="space-y-5">
            <Input id="title" type="text" name="title" label="Job Title" />
            <Input
              id="details"
              type="text"
              name="details"
              label="Job Details"
            />
            <Input
              id="location"
              type="text"
              name="location"
              label="Job Location"
            />
            <div className="flex justify-end gap-5">
              <button
                onClick={handlePrev}
                className="p-2 w-[10rem] bg-gray-300 rounded-lg"
                type="button"
              >
                Prev
              </button>
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

export default JobDetails;
