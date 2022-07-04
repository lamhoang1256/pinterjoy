interface ActionDeleteProps {
  handleOnClick: () => void;
  children: React.ReactNode;
}

const ActionDelete = ({ children, handleOnClick, ...props }: ActionDeleteProps) => {
  return (
    <button
      type="button"
      className="action-linearRed"
      onClick={(e) => {
        e.stopPropagation();
        if (!handleOnClick) return;
        handleOnClick();
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionDelete;
