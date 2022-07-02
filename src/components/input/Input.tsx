import classNames from "utils/className";

interface InputProps {
  type?: string;
  className?: string;
  placeholder?: string;
  name: string;
}

const Input = ({ type, className, placeholder, name, ...props }: InputProps) => {
  return (
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className={classNames("p-4 border-[1px] border-gray92 outline-none rounded-md", className)}
      {...props}
    />
  );
};

Input.defaultProps = {
  className: "",
  type: "",
  placeholder: "",
};

export default Input;
