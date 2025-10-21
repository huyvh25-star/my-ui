import { NavLink } from "react-router-dom";
import { Home, Boxes, Github } from "lucide-react";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 
    ${
      isActive
        ? "bg-green-100 text-green-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="w-full bg-white h-16 flex justify-between items-center px-6 border-b border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
        <h1 className="text-xl font-bold text-gray-800">MyUI</h1>
      </div>

      {/* Navigation */}
      <nav className="flex gap-4">
        <NavLink to="/" className={navLinkClass}>
          <Home className="w-5 h-5" />
          <span>Get Started</span>
        </NavLink>

        <NavLink to="/component" className={navLinkClass}>
          <Boxes className="w-5 h-5" />
          <span>Components</span>
        </NavLink>
      </nav>

      {/* GitHub link */}
      <div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-black transition"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
