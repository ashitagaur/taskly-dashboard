import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  label?: string;
}

// Using forwardRef for better compatibility with RHF
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", icon, label, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 disabled:opacity-50 ${className}`}
        {...props}
      >
        {icon && <span>{icon}</span>}
        {label && <span>{label}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
