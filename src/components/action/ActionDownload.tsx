interface ActionDownloadProps {
  url: string;
  children: React.ReactNode;
}

const ActionDownload = ({ url, children, ...props }: ActionDownloadProps) => {
  return (
    <a
      href={url}
      className="action-linearRed"
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...props}
    >
      {children}
    </a>
  );
};

export default ActionDownload;
