import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";

const Button = (props) => {
  const {
    type = "button",
    children,
    className = "",
    isLoading = false,
    ...rest
  } = props;
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin border-b-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      className={classNames(
        "flex items-center justify-center py-4 text-base font-semibold rounded-xl text-white min-h-[56px] p-4",
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
