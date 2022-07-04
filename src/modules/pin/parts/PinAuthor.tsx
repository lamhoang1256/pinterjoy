import { path } from "constants/path";
import { Link } from "react-router-dom";
import PinAvatar from "./PinAvatar";
import PinUsername from "./PinUsername";

interface PinAuthorProps {
  postedBy: {
    _id: string;
    image: string;
    userName: string;
  };
}

const PinAuthor = ({ postedBy }: PinAuthorProps) => {
  return (
    <Link
      to={`${path.profile}/${postedBy?._id}`}
      className="mt-3 flex items-center gap-x-3"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <PinAvatar url={postedBy?.image} />
      <PinUsername>{postedBy?.userName}</PinUsername>
    </Link>
  );
};

export default PinAuthor;
