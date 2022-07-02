interface ButtonActionProps {
  url?: string;
  children: React.ReactNode;
  target?: string;
}

const ButtonAction = ({ url, children, target, ...props }: ButtonActionProps) => {
  return (
    <a
      href={url}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-10 h-10 rounded-md bg-linearRed flex items-center justify-center text-white"
      target={target}
      {...props}
    >
      {children}
    </a>
  );
};

ButtonAction.defaultProps = {
  url: "",
  target: "",
};

export default ButtonAction;
