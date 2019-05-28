import React from "react";
import PropTypes from "prop-types";

// components
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
        primaryColor="#fff"
        secundaryColor="#0abde3"
        margin="10px 0"
        onChange={handleChange}
      />
      <InputComponent
        text="Password"
        value={values.password}
        error={errors.password}
        name="password"
        type="password"
        primaryColor="#fff"
        secundaryColor="#0abde3"
        margin="10px 0 50px 0"
        onChange={handleChange}
      />
      <ButtonComponent
        text="Sing In"
        type="submit"
        variant="contained"
        color="white"
        bgcolor="gradientblue"
        padding="10px"
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
