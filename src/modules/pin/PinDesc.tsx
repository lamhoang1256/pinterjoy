interface PinDescProps {
  children: React.ReactNode;
}

const PinDesc = ({ children }: PinDescProps) => {
  return <p className="mt-2">{children}</p>;
};

export default PinDesc;
