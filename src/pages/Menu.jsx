import { NavLink } from "react-router-dom";
import { Home, Boxes, Settings } from "lucide-react";

const icons = {
  home: Home,
  boxes: Boxes,
  settings: Settings,
};

const Menu = ({ routers = [] }) => {
  return (
    <aside className="w-[18%] min-w-[220px] bg-white border-r border-gray-200 shadow-sm h-screen py-4">
      <h2 className="text-lg font-semibold text-gray-800 px-6 mb-4">Menu</h2>

      <nav className="flex flex-col">
        {routers.map((item, index) => {
          const Icon = icons[item.icon] || Boxes;

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-2.5 rounded-lg mx-2 my-1 transition-all duration-200
                ${
                  isActive
                    ? "bg-green-100 text-green-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Menu;
