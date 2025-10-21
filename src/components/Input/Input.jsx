import clsx from "clsx";

const Input = ({ placeholder = "name", color = "slate", className }) => {
  const baseStyles =
    "w-full px-3 py-2 outline-1  text-gray-900 rounded-2xl focus:outline-none focus:ring-2 ";
  const colors = {
    blue: "outline-blue-500 focus:ring-blue-500",
    slate: "outline-slate-500 focus:ring-slate-500",
    red: "outline-red-500 focus:ring-red-500",
  };
  const inputStyles = clsx(baseStyles, colors[color], className);

  return (
    <input className={inputStyles} type="text" placeholder={placeholder} />
  );
};

export default Input;
