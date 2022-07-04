interface ActionSaveProps {
  children: React.ReactNode;
  handleOnClick?: () => void;
}

const ActionSave = ({ children, handleOnClick, ...props }: ActionSaveProps) => {
  return (
    <button
      type="button"
      className="text-white bg-linearRed h-8 px-5 rounded-2xl"
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

ActionSave.defaultProps = {
  handleOnClick: () => {},
};

export default ActionSave;
