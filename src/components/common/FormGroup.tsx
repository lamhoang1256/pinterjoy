interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="flex flex-col mb-2 lg:mb-[10px] gap-y-2">{children}</div>;
};

export default FormGroup;
