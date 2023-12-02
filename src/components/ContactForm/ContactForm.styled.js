import { styled } from "styled-components";
import { tablet, desktop } from "src/variables/breakpoints";
import { Form, Field } from "formik";

export const AppForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 36px 24px;
  background-color: var(--bg-section-color);

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 48px) / 2);
  }
`;

export const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.64px;
  margin-bottom: 8px;
`;

export const FormInput = styled(Field)`
  margin-bottom: 24px;
  padding-bottom: 8px;

  color: inherit;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.72px;

  border: transparent;
  outline: none;
  background-color: inherit;
  border-bottom: 1px solid var(--primary-color);

  &.error {
    border-bottom: 1px solid var(--error);
  }

  &::-webkit-input-placeholder {
    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #bdbdbd;
  }

  &::-ms-input-placeholder {
    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #bdbdbd;
  }

  &::-moz-placeholder {
    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #bdbdbd;
  }

  &.form-textarea {
    resize: none;
    min-height: 124px;
  }
`;

export const Error = styled.p`
  position: absolute;
  top: 70px;
  right: 0;
  color: var(--error);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.48px;
`;

export const SubmitButton = styled.button``;
