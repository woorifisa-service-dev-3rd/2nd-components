import React from "react";
import "./DropDown.css";
export const DropDown = ({ children }) => {
  return (
    <div className="dropdown-menue">
      <div className="dropdown-border"></div>
      <div className="dropdown-content">{children}</div>
    </div>
  );
};
