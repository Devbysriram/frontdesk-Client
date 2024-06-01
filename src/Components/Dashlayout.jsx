import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";

const Dashlayout = () => {
  return (
    <>
      <DashHeader />
      <div className="dashcontainer">
        <Outlet />
      </div>
    </>
  );
};

export default Dashlayout;
