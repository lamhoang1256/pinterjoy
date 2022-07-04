import ActionDelete from "components/action/ActionDelete";
import ActionDownload from "components/action/ActionDownload";
import ActionRedirect from "components/action/ActionRedirect";
import ActionSave from "components/action/ActionSave";
import IconDownload from "components/icons/IconDownload";
import IconRedirect from "components/icons/IconRedirect";
import IconTrash from "components/icons/IconTrash";
import Image from "components/image/Image";
import { LocalStorage } from "constants/localStorage";
import { path } from "constants/path";
import { IPin } from "interfaces";
import PinAuthor from "modules/pin/parts/PinAuthor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { client } from "utils/client";
import { v4 as uuidv4 } from "uuid";

interface PinProps {
  data: IPin;
}

const Pin = ({ data }: PinProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, image, destination, postedBy, save } = data;
  const [pinHovered, setPinHovered] = useState(false);
  const checkSave = save?.filter((item: any) => item?.postedBy?._id === user?.uid);
  const alreadySaved = checkSave?.length > 0 ? checkSave : [];

  const handleDeletePin = async () => {
    try {
      await client.delete(_id);
      window.location.reload();
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  const handleSavePin = () => {
    if (alreadySaved?.length === 0) {
      client
        .patch(_id)
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
    <div
      aria-hidden="true"
      role="button"
      className="transition-all duration-500 ease-in-out"
      onMouseEnter={() => setPinHovered(true)}
      onMouseLeave={() => setPinHovered(false)}
      onClick={() => navigate(`${path.detail}/${_id}`)}
    >
      <div className="relative">
        <Image className="rounded-lg w-full" url={image?.asset?.url} alt="pin" />
        {pinHovered && (
          <div className="absolute inset-0 p-3 flex flex-col justify-between bg-gray-900 bg-opacity-70">
            <div className="flex items-center justify-between">
              <ActionDownload url={`${image.asset.url}?dl=`}>
                <IconDownload />
              </ActionDownload>
              <ActionSave handleOnClick={handleSavePin}>
                {save ? `${save?.length} Save` : "0 Save"}
              </ActionSave>
            </div>
            <div className="flex items-center justify-between">
              <ActionRedirect url={destination}>
                <IconRedirect />
              </ActionRedirect>
              {postedBy?._id === user?.uid && (
                <ActionDelete handleOnClick={handleDeletePin}>
                  <IconTrash />
                </ActionDelete>
              )}
            </div>
          </div>
        )}
      </div>
      <PinAuthor postedBy={postedBy} />
    </div>
  );
};

export default Pin;
