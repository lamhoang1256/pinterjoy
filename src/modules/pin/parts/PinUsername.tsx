interface PinUsernameProps {
  children: React.ReactNode;
}

const PinUsername = ({ children }: PinUsernameProps) => {
  return <h4 className="font-semibold">{children}</h4>;
};

export default PinUsername;
