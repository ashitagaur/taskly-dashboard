import { forwardRef, InputHTMLAttributes } from "react";
const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...rest }, ref) => (
  <input
    ref={ref}
    className={`border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...rest}
  />
));
export default Input;
