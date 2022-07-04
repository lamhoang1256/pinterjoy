import PinAvatar from "./parts/PinAvatar";
import PinUsername from "./parts/PinUsername";

interface PinCommentsProps {
  comments: {
    _key: string;
    comment: string;
    postedBy: {
      _id: string;
      image: string;
      userName: string;
    };
  }[];
}

const PinComments = ({ comments }: PinCommentsProps) => {
  return (
    <div className="mt-3">
      <h3>Comments</h3>
      {comments?.map((comment) => (
        <div className="flex items-center gap-x-3 mt-2" key={comment?._key}>
          <PinAvatar url={comment?.postedBy?.image} />
          <div>
            <PinUsername>{comment?.postedBy?.userName}</PinUsername>
            <span>{comment?.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PinComments;
