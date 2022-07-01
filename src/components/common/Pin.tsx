import Button from "components/button";
import IconRedirect from "components/icons/IconRedirect";
import IconDownload from "components/icons/IconDownload";
import { useState } from "react";

const Pin = () => {
  const [pinHovered, setPinHovered] = useState(false);

  return (
    <div
      className="max-w-[250px] transition-all duration-500 ease-in-out"
      onMouseEnter={() => setPinHovered(true)}
      onMouseLeave={() => setPinHovered(false)}
    >
      <div className="relative">
        <img className="rounded-lg" src="/images/giyu.jpg" alt="" />
        {pinHovered && (
          <div className="absolute inset-0 p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <a
                href="/images/giyu.jpg"
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-8 h-8 rounded-full bg-white bg-opacity-80 flex items-center justify-center"
              >
                <IconDownload />
              </a>
              <Button className=" text-white bg-rede7 h-8 px-5 rounded-2xl">3 Save</Button>
            </div>
            <Button className="max-w-[160px] bg-white text-[#111111] flex items-center gap-x-2 h-9 px-4 rounded-3xl">
              <IconRedirect /> <span className="font-semibold text-sm">youtube.com</span>
            </Button>
          </div>
        )}
      </div>
      <h3 className="text-base mt-2 line-clamp-2">
        Batman: Arkham OriginsBatman: Arkham OriginsBatman: Arkham OriginsBatman: Arkham
        OriginsBatman: Arkham OriginsBatman: Arkham Origins
      </h3>
      <div className="flex items-center gap-2 mt-2">
        <img
          className="w-7 h-7 rounded-full"
          src="https://cdn.dribbble.com/users/8713191/avatars/normal/data?1627916100"
          alt="avatar"
        />
        <span className="text-black4a text-sm">Nguyen Hoang Lam</span>
      </div>
    </div>
  );
};

export default Pin;
