import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidePanel = ({ children }) => {
  const { pathname } = useLocation;
  return (
    <>
      <div className="">
        <div className="flex">
          <div>
            <ul>
              <li><Link to="/adminDashboard">Dashboard</Link></li>
              <li><Link to="/adminMedicine">Medicine</Link></li>
              <li><Link to="/adminOrder">Order</Link></li>
            </ul>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
