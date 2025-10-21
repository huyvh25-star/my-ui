import { Outlet } from "react-router-dom";
import Menu from "../pages/Menu";
const routers = [{ path: "/component/button", title: "Button" }];

const ComponentLayout = () => {
  return (
    <div className="w-full h-full flex">
      <Menu routers={routers} />
      <Outlet />
    </div>
  );
};

export default ComponentLayout;
