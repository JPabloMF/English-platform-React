import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// styles
const StyledButton = withStyles({
  root: {
    background: (props) =>
      props.bgcolor === "gradientblue"
        ? "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
        : "#fff",
    color: (props) => (props.color ? props.color : "#000"),
    margin: (props) => (props.margin ? props.margin : "0"),
    padding: (props) => (props.padding ? props.padding : "0")
  }
})(Button);

const ButtonComponent = ({
  text,
  name,
  type,
  variant,
  color,
  bgcolor,
  margin,
  padding,
  disabled,
  onClick
}) => {
  return (
    <StyledButton
      name={name}
      type={type}
      variant={variant}
      color={color}
      bgcolor={bgcolor}
      margin={margin}
      padding={padding}
      onClick={() => (onClick ? onClick() : null)}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

ButtonComponent.defaultProps = {
  disabled: false,
  type: "button",
  variant: "contained",
  color: "#000",
  bgcolor: "#fff",
  margin: "0",
  padding: "5px"
};

ButtonComponent.prototypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default ButtonComponent;
