interface ActionRedirectProps {
  url: string;
  children: React.ReactNode;
}

const ActionRedirect = ({ url, children, ...props }: ActionRedirectProps) => {
  return (
    <a
      onClick={(e) => {
        e.stopPropagation();
      }}
      rel="noreferrer"
      href={url}
      target="_blank"
      className="action-linearRed"
      {...props}
    >
      {children}
    </a>
  );
};

export default ActionRedirect;
