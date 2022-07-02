interface PinTitleProps {
  children: React.ReactNode;
  className?: string;
}

const PinTitle = ({ children, className }: PinTitleProps) => {
  return <h2 className={className}>{children}</h2>;
};

PinTitle.defaultProps = {
  className: "",
};

export default PinTitle;
