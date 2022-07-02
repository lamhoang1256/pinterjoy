/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from "react";
import { IPin } from "interfaces";
import { useNavigate } from "react-router-dom";
import { path } from "constants/path";
import IconRedirect from "components/icons/IconRedirect";
import IconDownload from "components/icons/IconDownload";
import PinAuthor from "modules/pin/PinAuthor";
import ButtonAction from "components/button/ButtonAction";
import ButtonSave from "components/button/ButtonSave";

interface PinProps {
  data: IPin;
}

const Pin = ({ data }: PinProps) => {
  const navigate = useNavigate();
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
        <img className="rounded-lg w-full" src={image.asset.url} alt="pin" />
        {pinHovered && (
          <div className="absolute inset-0 p-3 flex flex-col justify-between bg-gray-900 bg-opacity-70">
            <div className="flex items-center justify-between">
              <ButtonAction url={`${image.asset.url}?dl=`}>
                <IconDownload />
              </ButtonAction>
              <ButtonSave save={save} />
            </div>
            <ButtonAction url={destination}>
              <IconRedirect />
            </ButtonAction>
          </div>
        )}
      </div>
      <PinAuthor postedBy={postedBy} />
    </div>
  );
};

export default Pin;
