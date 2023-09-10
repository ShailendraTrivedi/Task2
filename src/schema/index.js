import * as Yup from "yup";

export const RequistionDetailsSchema = Yup.object().shape({
  title: Yup.string().required("*Title is required !"),
  openings: Yup.number().required("*Enter a valid number !"),
  gender: Yup.string().required("*Gender is required !"),
  urgency: Yup.string().required("*Urgency is required !"),
});

export const JobDetailSchema = Yup.object().shape({
  title: Yup.string().required("*Job Title is required !"),
  details: Yup.string().required("*Job Details is required !"),
  location: Yup.string().required("*Job Location is required !"),
});

export const InterviewSettingSchema = Yup.object().shape({
  mode: Yup.string().required("*Interview Mode is required !"),
  duration: Yup.string().required("*Interview Duration is required !"),
  language: Yup.string().required("*Interview Location is required !"),
});
