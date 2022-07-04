import { v4 as uuidv4 } from "uuid";
import { client } from "utils/client";
import { LocalStorage } from "constants/localStorage";

interface ButtonSaveProps {
  save: any;
  id: string;
}

const ButtonSave = ({ id, save }: ButtonSaveProps) => {
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");
  let alreadySaved = save?.filter((item: any) => item?.postedBy?._id === user?.uid);
  alreadySaved = alreadySaved?.length > 0 ? alreadySaved : [];

  const handleSavePin = () => {
    if (alreadySaved?.length === 0) {
      client
        .patch(id)
        .setIfMissing({ save: [] })
        .insert("after", "save[-1]", [
          {
            _key: uuidv4(),
            userId: user?.uid,
            postedBy: {
              _type: "postedBy",
              _ref: user?.uid,
            },
          },
        ])
        .commit()
        .then(() => {
          window.location.reload();
        });
    }
  };

  return (
    <button
      type="button"
      className=" text-white bg-linearRed h-8 px-5 rounded-2xl"
      onClick={(e) => {
        e.stopPropagation();
        handleSavePin();
      }}
    >
      {save ? `${save?.length} Save` : "0 Save"}
    </button>
  );
};

export default ButtonSave;
