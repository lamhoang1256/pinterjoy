interface ButtonActionProps {
  url?: string;
  children: React.ReactNode;
}

const ButtonAction = ({ url, children, ...props }: ButtonActionProps) => {
  return (
    <a
      href={url}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="w-10 h-10 rounded-md bg-linearRed flex items-center justify-center text-white"
      {...props}
    >
      {children}
    </a>
  );
};

ButtonAction.defaultProps = {
  url: "",
};

export default ButtonAction;
