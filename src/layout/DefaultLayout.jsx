import React from "react";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* HEADER */}
      <Header />

      {/* BODY: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <Sidebar className="w-64 bg-white border-r border-gray-200" />

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
