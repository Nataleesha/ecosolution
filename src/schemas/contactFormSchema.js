import * as Yup from "yup";

export const schema = Yup.object({
  fullName: Yup.string()
    .matches("[A-Za-z]+[A-Za-z]", "Wrong Fullname")
    .required("Enter Fullname"),
  email: Yup.string().email("Wrong Email").required("Enter Email"),
  phone: Yup.string()
    .matches("^[0-9]{12}$", "Wrong Phone")
    .required("Enter Phone"),
  message: Yup.string(),
});
