import { forwardRef, InputHTMLAttributes } from "react";
const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...rest }, ref) => (
  <input
    ref={ref}
    className={`bg-black border border-gray-600 rounded px-3 py-2 w-full focus:outline-none text-white ${className}`}
    {...rest}
  />
));
export default Input;
