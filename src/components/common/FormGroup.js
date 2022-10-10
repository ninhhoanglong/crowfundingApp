import React from "react";

const FormGroup = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col mb-4 select-none lg:mb-5 gap-y-2 lg:gap-y-3">
      {children}
    </div>
  );
};

export default FormGroup;
