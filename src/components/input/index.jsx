import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// components
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

// styles
const StyledInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: (props) => (props.error ? "red" : props.secundaryColor)
    },
    "& label": {
      color: (props) => props.primaryColor
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: (props) => (props.error ? "red" : props.secundaryColor)
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: (props) => `2px solid ${props.primaryColor}`
    },
    "& .MuiInputBase-input:focus": {
      color: (props) => props.primaryColor
    },
    "& .MuiInputBase-root": {
      color: (props) => props.primaryColor
    },
    "& .MuiInput-underline:before": {
      borderBottom: (props) => `1px solid ${props.primaryColor}`
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: (props) => props.secundaryColor
      }
    }
  }
})(TextField);

const StyledFormControl = withStyles({
  root: {
    "&": {
      margin: (props) => props.margin
    }
  }
})(FormControl);

const InputComponent = ({
  text,
  value,
  error,
  name,
  type,
  primaryColor,
  secundaryColor,
  margin,
  onChange
}) => {
  return (
    <StyledFormControl error={error ? true : false} margin={margin}>
      <StyledInput
        label={text}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        primaryColor={primaryColor}
        secundaryColor={secundaryColor}
        error={error ? true : false}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </StyledFormControl>
  );
};

InputComponent.defaultProps = {
  errors: null,
  primaryColor: "#000",
  secundaryColor: "#fff",
  margin: "0"
};

InputComponent.prototypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  secundaryColor: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputComponent;
