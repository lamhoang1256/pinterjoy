interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
