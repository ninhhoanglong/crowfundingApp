import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { type = "button", children, className = "" } = props;
  return (
    <button
      className={`flex items-center justify-center py-4 text-base font-semibold rounded-xl text-white p-4 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
