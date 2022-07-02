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
    <div className="mt-3 flex items-center gap-x-3">
      <PinAvatar url={postedBy?.image} />
      <PinUsername>{postedBy.userName}</PinUsername>
    </div>
  );
};

export default PinAuthor;
