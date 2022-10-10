import React from "react";
import classNames from "utils/classNames";

const Checkbox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={classNames(
          "inline-flex items-center justify-center p-1 text-white w-5 h-5 border rounded cursor-pointer select-none",
          checked ? "bg-primary" : "border-strock dark:border-text3"
        )}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
        />
        <span className={classNames(checked ? "" : "opacity-0 invisible")}>
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.60078 7.91999L2.48078 4.79999L0.800781 6.47999L5.60078 11.28L15.2008 1.68L13.5208 0L5.60078 7.91999Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div onClick={onClick} className="cursor-pointer">
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
