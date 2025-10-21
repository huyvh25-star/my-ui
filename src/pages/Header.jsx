import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full bg-white h-18 flex justify-between items-center px-4 border-b-1 border-black">
      <h1>logo</h1>
      <nav>
        <Link to="/" className="m-2">
          Get Started
        </Link>
        <Link to="/component">Components</Link>
      </nav>
      <div>infomations</div>
    </div>
  );
};

export default Header;
