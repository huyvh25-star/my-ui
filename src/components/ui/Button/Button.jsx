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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none";

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const variantClasses = {
    solid: {
      blue: "bg-blue-500 text-white hover:bg-blue-600",
      red: "bg-red-500 text-white hover:bg-red-600",
      green: "bg-green-500 text-white hover:bg-green-600",
    },
    outline: {
      blue: "border border-blue-500 text-blue-500 hover:bg-blue-50",
      red: "border border-red-500 text-red-500 hover:bg-red-50",
      green: "border border-green-500 text-green-500 hover:bg-green-50",
    },
  };

  const buttonClass = clsx(
    baseStyles,
    sizeClasses[size],
    variantClasses[variant][color],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
