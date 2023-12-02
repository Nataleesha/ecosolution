import * as Yup from "yup";

export const schema = Yup.object({
  fullName: Yup.string()
    .matches("^([^0-9]*)$", "Wrong Fullname")
    .required("Enter Fullname"),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Wrong Email")
    .required("Enter Email"),
  phone: Yup.string()
    .matches("^[0-9]{12}$", "Wrong Phone")
    .required("Enter Phone"),
  message: Yup.string(),
});
