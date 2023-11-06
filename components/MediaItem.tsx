"use client";

import useLoadImages from "@/hooks/useLoadImages";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}
const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImages(data);
  const handleClick = () => {
    if (onClick) {
      onClick(data.id);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="
        flex
        items-center
        gap-x-3
        cursor-pointer
        hover:bg-neutral-800/50
        w-full
        p-2
        rounded-md
    "
    >
      <div
        className="
        relative
        rounded-md
        w-[47px]
        h-[47px]
        overflow-hidden

      "
      >
        <Image
          fill
          src={imageUrl || ""}
          alt=""
          className="object-cover"
        ></Image>
      </div>
      <div
        className="
          flex 
          flex-col 
          overflow-hidden"
      >
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};
export default MediaItem;