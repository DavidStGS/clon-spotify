"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const Onclick = () => {
    //para liego
  };
  return (
    <>
      <div className="flex flex-col">
        <div
          className="
        flex
        items-center
        justify-between
        px-5    
        pt-4 
        "
        >
          <div
            className="
          inline-flex
          items-center
          gap-x-2
          "
          >
            <TbPlaylist className="text-neutral-400" size={26} />
            <p
              className="
            text-neutral-400
            font-medium
            text-mb
            "
            >
              Your Library
            </p>
          </div>
          <AiOutlinePlus
            onClick={Onclick}
            size={20}
            className="
          text-neutral-400
            cursor-pointer
          hover:text-white 
            transition 
          "
          />
        </div>
        <div
          className="
            flex
            flex-col
            gap-y-2
            mt-4
            px-4
          "
        >
          List Of Songs
        </div>
      </div>
    </>
  );
};

export default Library;