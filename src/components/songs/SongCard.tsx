import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SongCardProps {
  title: string;
  poster: string;
  artist: string;
  href: string;
}

export default function SongCard({
  title,
  poster,
  artist,
  href,
}: SongCardProps) {
  return (
    <Link
      href={`song/${href}`}
      className="flex flex-col w-[200px] hover:opacity-80 transition-all duration-200 text-left px-5 py-3 rounded-md bg-[#181818] shadow-md items-center justify-start space-y-2"
    >
      <div>
        <Image
          className="rounded-md max-w-[170px] max-h-[170px] min-w-[170px] min-h-[170px] object-cover"
          width={170}
          height={170}
          src={poster}
          alt={title}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-400">song by {artist}</p>
    </Link>
  );
}
