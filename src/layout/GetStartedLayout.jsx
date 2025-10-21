import { Outlet } from "react-router-dom";
const GetStartedLayout = () => {
  return (
    <div>
      {/* BODY: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        {/* <Sidebar className="w-64 bg-white border-r border-gray-200" /> */}

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

export default GetStartedLayout;
