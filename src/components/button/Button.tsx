/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import classNames from "utils/className";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = ({ to, type, children, className, ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to}>
        <button
          type={type}
          className={classNames("h-[50px] font-semibold px-4 bg-[#eee]", className)}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classNames("font-semibold h-[50px] px-4 bg-[#eee]", className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  to: "",
  className: "",
};

export default Button;
