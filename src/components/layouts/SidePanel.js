import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidePanel = ({ children }) => {
  const { pathname } = useLocation;
  return (
    <>
      <div className="">
        <div className="">PHARMA LINK</div>
        {children}
      </div>
    </>
  );
};

export default SidePanel;
