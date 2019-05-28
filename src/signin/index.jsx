import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

// components
import SignInForm from "./form";

const SignIn = ({ values, errors, handleChange, handleSubmit }) => {
  return (
    <div className="signin-container">
      <div className="signin-form">
        <SignInForm
          values={values}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <p className="singuptext">
          Don't have an account? <Link to="/Dashboard">Sign Up</Link>
        </p>
        <Link to="/Dashboard" className="signinforgotpass">Forgot your Password?</Link>
        <Link to="/Platform">Provisional entry to platform</Link>
      </div>
      <div className="singin-right">
        <p>ENGLISH PLATFORM</p>
        <p>Improve your future</p>
      </div>
    </div>
  );
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
