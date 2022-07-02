import classNames from "utils/className";

interface PinAvatarProps {
  url: string;
  className?: string;
}

const PinAvatar = ({ url, className }: PinAvatarProps) => {
  return (
    <img
      src={url}
      alt="avatar"
      className={classNames("w-8 h-8 rounded-full flex-shrink-0", className)}
    />
  );
};

PinAvatar.defaultProps = {
  className: "",
};

export default PinAvatar;
