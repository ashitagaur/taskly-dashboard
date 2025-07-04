import { forwardRef, ButtonHTMLAttributes } from "react";
const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", ...rest }, ref) => (
  <button
    ref={ref}
    className={`px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition ${className}`}
    {...rest}
  />
));
export default Button;
