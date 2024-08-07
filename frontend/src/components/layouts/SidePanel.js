import React from "react";
import { Link } from "react-router-dom";

const SidePanel = ({ children }) => {
  return (
    <>
      <div className="">
        <div className="flex">
          <div>
            <ul>
              <li><Link to="/adminDashboard">Dashboard</Link></li>
              <li><Link to="/adminMedicine">Medicine</Link></li>
              <li><Link to="/adminOrder">Order</Link></li>
              <li><Link to="/adminInvoice">Invoice</Link></li>
            </ul>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
