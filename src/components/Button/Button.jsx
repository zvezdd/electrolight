import React from "react";
import classes from "./Button.module.css";

export default function ({ children, onClick, isActive, ...props }) {
  return (
    <div>
      <button
        {...props}
        className={isActive ? `${classes.button} ${classes.active}` : classes.button}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
