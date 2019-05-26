import React from 'react';
import PropTypes from "prop-types";
import InputComponent from "../../components/input";
import ButtonComponent from "../../components/button";

const SignInForm = ({ values, errors, handleChange, handleSubmit }) => {
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

SignInForm.prototypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
};

export default SignInForm;