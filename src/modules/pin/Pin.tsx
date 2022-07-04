/* eslint-disable @typescript-eslint/naming-convention */
import ButtonAction from "components/button/ButtonAction";
import ButtonDelete from "components/button/ButtonDelete";
import ButtonSave from "components/button/ButtonSave";
import IconDownload from "components/icons/IconDownload";
import IconRedirect from "components/icons/IconRedirect";
import IconTrash from "components/icons/IconTrash";
import Image from "components/image/Image";
import { LocalStorage } from "constants/localStorage";
import { path } from "constants/path";
import { IPin } from "interfaces";
import PinAuthor from "modules/pin/PinAuthor";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PinProps {
  data: IPin;
}

const Pin = ({ data }: PinProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");
  const { _id, image, destination, postedBy, save } = data;
  const [pinHovered, setPinHovered] = useState(false);

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
        <Image className="rounded-lg w-full" url={image.asset.url} alt="pin" />
        {pinHovered && (
          <div className="absolute inset-0 p-3 flex flex-col justify-between bg-gray-900 bg-opacity-70">
            <div className="flex items-center justify-between">
              <ButtonAction url={`${image.asset.url}?dl=`}>
                <IconDownload />
              </ButtonAction>
              <ButtonSave save={save} id={_id} />
            </div>
            <div className="flex items-center justify-between">
              <ButtonAction url={destination} target="_blank">
                <IconRedirect />
              </ButtonAction>
              {postedBy?._id === user?.uid && (
                <ButtonDelete id={_id}>
                  <IconTrash />
                </ButtonDelete>
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
