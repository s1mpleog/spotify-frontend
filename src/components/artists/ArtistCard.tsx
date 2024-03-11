import React from "react";
import Image from "next/image";
import Loader from "../shared/Loader";
import Link from "next/link";

interface ArtistCardProps {
  isLoading: boolean;
  name: string;
  image: string;
  href: string;
}

export default function ArtistCard({
  isLoading,
  name,
  image,
  href,
}: ArtistCardProps) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Link
      href={`artist/${href}`}
      className="flex flex-col items-start justify-center w-[200px] hover:opacity-80 transition-all duration-200"
    >
      <div className="bg-[#181818] p-4 rounded-md shadow-md">
        <div className="">
          <Image
            className="rounded-full shadow-2xl shadow-black object-cover w-[150px] h-[150px] max-w-[150px] max-h-[150px]"
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <div className="my-3 pl-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-400">Artist</p>
        </div>
      </div>
    </Link>
  );
}
