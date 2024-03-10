import Image from "next/image";
import React from "react";

interface ShowArtistProps {
  artist: {
    age: number;
    avatar: {
      url: string;
      public_id: string;
    };
    bio: string;
    country: string;
    gender: string;
    genre: string;
    name: string;
    songs: string[];
    __v: number;
    _id: string;
  };
}

export default function ShowArtist({ artist }: ShowArtistProps) {
  return (
    <div className="flex items-center gap-5 justify-start">
      <div>
        <Image
          className="rounded-full object-cover w-[100px] h-[100px]"
          width={100}
          height={100}
          src={artist?.avatar.url}
          alt={artist.name}
        />
      </div>
      <div className="font-medium">
        <p>Artist</p>
        <p className="text-lg">{artist.name}</p>
      </div>
    </div>
  );
}
