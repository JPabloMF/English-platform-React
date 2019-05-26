import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup";
import InputComponent from "../components/input";
import ButtonComponent from "../components/button";

const SignIn = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputComponent
        text="Email"
        value={values.email}
        error={errors.email}
        name="email"
        type="email"
        onChange={handleChange}
      />
      <InputComponent
        text="Password"
        value={values.password}
        error={errors.password}
        name="password"
        type="password"
        onChange={handleChange}
      />
      <ButtonComponent
        text="Sing In"
        type="submit"
        variant="contained"
        color="primary"
      />
    </form>
  );
};

SignIn.defaultProps = {
  disabled: false,
  type: "button",
  variant: "contained",
  color: "primary"
};

SignIn.prototypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required(),
  password: Yup.string("Invalid password")
    .min(5)
    .max(20)
    .required()
});

export default withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validateOnChange: false,
  validationSchema,
  handleSubmit: (values) => {}
})(SignIn);
