import clsx from "clsx";

export default function Button({
  children,
  variant = "solid",
  size = "md",
  color = "blue",
  disabled = false,
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center min-w-20 justify-center cursor-pointer font-medium rounded-sm transition-all duration-200 focus:outline-none";

  const sizeClasses = {
    sm: "text-sm px-2 py-1.5",
    md: "text-base px-2.5 py-2",
    lg: "text-lg px-3 py-2",
  };

  const variantClasses = {
    solid: {
      blue: "bg-blue-500 text-white hover:bg-blue-600",
      red: "bg-red-500 text-white hover:bg-red-600",
      green: "bg-green-500 text-white hover:bg-green-600",
      yellow: "bg-yellow-500 text-white hover:bg-yellow-600",
      default: "bg-slate-950 text-white hover:opacity-80",
    },
    outline: {
      blue: "border border-blue-500 text-blue-500 hover:bg-blue-200",
      red: "border border-red-500 text-red-500 hover:bg-red-200",
      green: "border border-green-500 text-green-500 hover:bg-green-200",
      yellow: "border border-yellow-500 text-yellow-500 hover:bg-yellow-200",
      default:
        "bg-slate-50 text-black hover:bg-slate-100 border-1 border-slate-200",
    },
  };

  const buttonClass = clsx(
    baseStyles,
    sizeClasses[size],
    variantClasses[variant][color],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  console.log("button : ", children, " : css :  ", buttonClass);

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
