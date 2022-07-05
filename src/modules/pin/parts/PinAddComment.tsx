import Button from "components/button";
import { LocalStorage } from "constants/localStorage";
import { useState } from "react";
import { client } from "utils/client";
import { v4 as uuidv4 } from "uuid";
import PinAvatar from "./PinAvatar";

interface PinAddCommentProps {
  id: string;
  fetchPinDetail: () => void;
}

const PinAddComment = ({ id, fetchPinDetail }: PinAddCommentProps) => {
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");
  const handleAddNewComment = () => {
    if (comment) {
      client
        .patch(id)
        .setIfMissing({ comments: [] })
        .insert("after", "comments[-1]", [
          {
            comment,
            _key: uuidv4(),
            postedBy: { _type: "postedBy", _ref: user.uid },
          },
        ])
        .commit()
        .then(() => {
          fetchPinDetail();
          setComment("");
        });
    }
  };

  return (
    <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
      <div className="flex flex-1 gap-x-3 items-center">
        <PinAvatar url={user?.photoURL} />
        <input
          type="text"
          placeholder="Add new comment..."
          className="flex-1 border-[1px] h-12 px-5 border-gray92 rounded-3xl"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <Button onClick={handleAddNewComment}>Add new</Button>
    </div>
  );
};

export default PinAddComment;
