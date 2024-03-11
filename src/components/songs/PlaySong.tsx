import Image from "next/image";
import React from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface PlaySongProps {
  song: {
    url: string;
  };
  poster: string;
  name: string;
  artist: string;
}

export default function PlaySong({
  song,
  artist,
  name,
  poster,
}: PlaySongProps) {
  const { url } = song;
  return (
    <div className="flex items-center shadow-md justify-center py-2 w-full bg-black">
      <div className="flex items-center px-10 justify-start gap-3">
        <Image
          className="rounded-md object-cover max-w-[100px] max-h-[100px] object-center"
          src={poster}
          alt={name}
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <p className="font-medium text-lg">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
      <div className="flex-1 px-20">
        <AudioPlayer
          style={{ backgroundColor: "black", animation: "ease-in-out" }}
          showDownloadProgress={false}
          src={url}
          footer={true}
        />
      </div>
    </div>
  );
}
