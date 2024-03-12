"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface ArtistSongsProps {
  songs: [
    {
      _id: string;
      file: {
        url: string;
      };
      poster: {
        url: string;
      };
      title: string;
      description: string;
      total_length: string;
      release_date: string;
    }
  ];
}

export default function ArtistSongs({ songs }: ArtistSongsProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const playPrevSong = () => {
    const prevSong = (currentSongIndex - 1) % songs.length;
    setCurrentSongIndex(prevSong);
  };

  return (
    <div className="w-full max-w-6xl relative p-5">
      <p className="text-2xl my-5 font-bold">Popular</p>
      {songs.map((song, i) => (
        <React.Fragment key={song.title}>
          <Link
            href={`/song/${song._id}`}
            className="flex items-center justify-start gap-5 space-y-6 w-full"
          >
            <div className="text-lg font-medium">
              <p>{i + 1}</p>
            </div>
            <div>
              <Image
                className="rounded-md object-cover"
                src={song.poster.url}
                alt={song.title}
                width={70}
                height={70}
              />
            </div>
            <div>
              <p className="font-medium">{song.title}</p>
            </div>
            <div className="absolute right-0 px-5">
              <p className="flex items-end justify-end text-end">
                {song.total_length}
              </p>
            </div>
          </Link>
        </React.Fragment>
      ))}
      <div className="flex-1 bottom-0 fixed max-w-7xl w-full">
        <AudioPlayer
          style={{
            backgroundColor: "black",
            animation: "ease-in-out",
          }}
          showDownloadProgress={false}
          footer={true}
          src={songs[currentSongIndex]?.file.url}
          autoPlay={false}
          showSkipControls={true}
          onClickNext={playNextSong}
          onClickPrevious={playPrevSong}
        />
      </div>
    </div>
  );
}
