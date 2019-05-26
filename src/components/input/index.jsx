import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const InputComponent = ({ text, value, error, name, type, onChange }) => {
  return (
    <FormControl error={error ? true : false}>
      <InputLabel>{text}</InputLabel>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

InputComponent.defaultProps = {
  errors: null
};

InputComponent.prototypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputComponent;
