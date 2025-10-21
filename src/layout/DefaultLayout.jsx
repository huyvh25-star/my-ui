import React from "react";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* HEADER */}
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
