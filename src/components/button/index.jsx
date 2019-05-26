import React from 'react';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const ButtonComponent = ({
  text,
  name,
  type,
  variant,
  color,
  disabled,
  onClick
}) => {
  return (
    <Button
      name={name}
      type={type}
      variant={variant}
      color={color}
      onClick={() => onClick ? onClick() : null}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  disabled: false,
  type: "button",
  variant: "contained",
  color: "primary"
};

ButtonComponent.prototypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default ButtonComponent;