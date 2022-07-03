import * as yup from "yup";

export const pinSchema = yup.object().shape({
  title: yup.string().required("Please enter your title!"),
  description: yup.string().required("Please enter your description!"),
  destination: yup.string().required("Please enter your destination!"),
  category: yup.string().required("Please choose category!"),
});
