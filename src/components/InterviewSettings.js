import { Form, Formik } from "formik";
import React from "react";
import { InterviewSettingSchema } from "../schema";
import Input from "../helpers/Input";
import Select from "../helpers/Select";

const mode = [
  { value: "Online", label: "Online" },
  { value: "Offline", label: "Offline" },
];
const duration = [
  { value: "Short", label: "Short" },
  { value: "Medium", label: "Medium" },
  { value: "Long", label: "Long" },
];
const language = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
];

const InterviewSettings = ({ handlePrev, setAllData }) => {
  return (
    <div>
      <Formik
        initialValues={{
          mode: "",
          duration: "",
          language: "",
        }}
        validationSchema={InterviewSettingSchema}
        onSubmit={(values) => {
          setAllData((prevData) => ({
            ...prevData,
            interviewSetting: values,
          }));
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-5">
            <Select
              id="mode"
              name="mode"
              label="Interview Mode"
              error={errors.mode}
              touched={touched.mode}
              options={mode}
            />
            <Select
              id="duration"
              name="duration"
              label="Interview Duration"
              error={errors.duration}
              touched={touched.duration}
              options={duration}
            />
            <Select
              id="language"
              name="language"
              label="Interview Language"
              error={errors.language}
              touched={touched.language}
              options={language}
            />
            <div className="flex justify-end gap-5">
              <button
                onClick={handlePrev}
                className="p-2 w-[10rem] bg-gray-300 rounded-lg"
              >
                Prev
              </button>
              <button
                type="submit"
                className="p-2 w-[10rem] bg-red-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InterviewSettings;
