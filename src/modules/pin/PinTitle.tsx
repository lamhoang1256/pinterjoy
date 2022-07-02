import { Link } from "react-router-dom";

interface PinTitleProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
}

const PinTitle = ({ children, className, to }: PinTitleProps) => {
  if (to)
    return (
      <Link to={to}>
        <h2 className={className}>{children}</h2>
      </Link>
    );
  return <h2 className={className}>{children}</h2>;
};

PinTitle.defaultProps = {
  className: "",
  to: "",
};

export default PinTitle;
