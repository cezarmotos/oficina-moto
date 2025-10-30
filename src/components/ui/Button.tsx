import React from "react";

type ButtonVariant = "brand" | "outline" | "ghost" | "green" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  className: styleClass = "",
  children,
  variant = "brand",
  size = "md",
  ...props
}) => {
  const base = [
    "inline-flex items-center justify-center rounded-lg font-semibold",
    "transition-colors transition-transform duration-200",
    "hover:scale-105 active:scale-95",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-60 disabled:cursor-not-allowed",
  ];

  const variants: Record<ButtonVariant, string> = {
    brand: "bg-[#d90429] text-white hover:bg-[#ef233c] focus:ring-[#ef233c]",
    outline:
      "bg-transparent border-2 border-[#d90429] text-[#d90429] hover:bg-[#ef233c] hover:text-white hover:border-[#ef233c] focus:ring-[#ef233c]",
    ghost: "bg-transparent text-[#2b2d42] hover:bg-black/10 focus:ring-black/20",
    green: "bg-[#28bc34] text-white hover:brightness-95 focus:ring-[#28bc34]",
    dark: "bg-[#2b2d42] text-white hover:brightness-110 focus:ring-[#2b2d42]",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  const classes = [base.join(" "), variants[variant], sizes[size], styleClass]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
