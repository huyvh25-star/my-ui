import Header from "../pages/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      {/* HEADER */}
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
