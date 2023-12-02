import { Formik, ErrorMessage } from "formik";
import ActionButton from "src/components/ActionButton/ActionButton";

import { schema } from "src/schemas/contactFormSchema";

import {
  AppForm,
  Label,
  FormField,
  FormInput,
  Error,
} from "./ContactForm.styled";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        console.log("Form has been submitted");
        resetForm();
      }}
    >
      {({ errors }) => (
        <AppForm>
          <FormField>
            <Label htmlFor="fullName">* Full name:</Label>
            <FormInput
              className={errors.fullName ? "error" : ""}
              name="fullName"
              id="fullName"
              type="text"
              placeholder="John Rosie"
            ></FormInput>
            <ErrorMessage component={Error} name="fullName" />
          </FormField>

          <FormField>
            <Label htmlFor="email">* E-mail:</Label>
            <FormInput
              className={errors.email ? "error" : ""}
              name="email"
              id="email"
              type="text"
              placeholder="johnrosie@gmail.com"
            ></FormInput>
            <ErrorMessage component={Error} name="email" />
          </FormField>

          <FormField>
            <Label htmlFor="phone">* Phone:</Label>
            <FormInput
              className={errors.phone ? "error" : ""}
              name="phone"
              id="phone"
              type="text"
              placeholder="380961234567"
            ></FormInput>
            <ErrorMessage component={Error} name="phone" />
          </FormField>

          <FormField>
            <Label htmlFor="message">Message:</Label>
            <FormInput
              className="form-textarea"
              component="textarea"
              name="message"
              id="message"
              placeholder="Your message"
            ></FormInput>
          </FormField>

          <ActionButton type="submit">Send</ActionButton>
        </AppForm>
      )}
    </Formik>
  );
};

export default ContactForm;
