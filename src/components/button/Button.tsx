/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  children: React.ReactNode;
}

const Button = ({ to, type, children, ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to}>
        <button type={type} className="h-[56px] px-4 bg-[#eee]" {...props}>
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button type={type} className="h-[56px] px-4 bg-[#eee]" {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  to: "",
};

export default Button;
