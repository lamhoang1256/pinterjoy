import { useState } from "react";
import { IPin } from "interfaces";
import Button from "components/button";
import IconRedirect from "components/icons/IconRedirect";
import IconDownload from "components/icons/IconDownload";
import { path } from "constants/path";
import PinAuthor from "modules/pin/PinAuthor";
import PinTitle from "modules/pin/PinTitle";

interface PinProps {
  data: IPin;
}

const Pin = ({ data }: PinProps) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { _id, image, destination, title, postedBy, save } = data;
  const [pinHovered, setPinHovered] = useState(false);

  return (
    <div
      className="transition-all duration-500 ease-in-out"
      onMouseEnter={() => setPinHovered(true)}
      onMouseLeave={() => setPinHovered(false)}
    >
      <div className="relative">
        <img className="rounded-lg" src={image.asset.url} alt="" />
        {pinHovered && (
          <div className="absolute inset-0 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <a
                href={`${image.asset.url}?dl=`}
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-8 h-8 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
              >
                <IconDownload />
              </a>
              <Button className=" text-white bg-rede7 h-8 px-5 rounded-2xl">
                {save ? `${save?.length} Save` : "0 Save"}
              </Button>
            </div>
            <Button
              to={`${path.detail}/${_id}`}
              className="max-w-[160px] bg-white text-[#111111] flex items-center gap-x-2 h-9 px-4 rounded-3xl"
            >
              <IconRedirect /> <span className="font-semibold text-sm">{destination}</span>
            </Button>
          </div>
        )}
      </div>
      <PinTitle className="text-sm font-semibold mt-2 line-clamp-2">{title}</PinTitle>
      <PinAuthor postedBy={postedBy} />
    </div>
  );
};

export default Pin;
