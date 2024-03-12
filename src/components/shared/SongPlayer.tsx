"use client";
import { useEffect, useState } from "react";
import { useSongContext } from "@/contexts/SongContext";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface SongPlayerProps {
  poster?: string;
  name?: string;
  song?: string;
  artist?: string;
  showControls?: boolean;
}

export default function SongPlayer({
  artist,
  name,
  song,
  poster,
  showControls = true,
}: SongPlayerProps) {
  const { songs } = useSongContext();

  // Retrieve the currentSongIndex from localStorage or default to 0
  const storedIndex = localStorage.getItem("currentSongIndex");
  const initialIndex = storedIndex ? parseInt(storedIndex, 10) : 0;

  const [currentSongIndex, setCurrentSongIndex] = useState(initialIndex);

  // Update localStorage whenever currentSongIndex changes
  useEffect(() => {
    localStorage.setItem("currentSongIndex", currentSongIndex.toString());
  }, [currentSongIndex]);

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs!?.songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const playPrevSong = () => {
    const prevSong =
      (currentSongIndex - 1 + songs!?.songs.length) % songs!?.songs.length;
    setCurrentSongIndex(prevSong);
  };

  return (
    <div className="z-[9999] bottom-0 fixed w-full px-5 shadow-lg bg-black pt-2">
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center px-10 justify-start gap-3">
          <Image
            className="rounded-md object-cover max-w-[80px] max-h-[80px] object-center"
            src={poster ? poster : songs?.songs[currentSongIndex]?.poster.url!}
            alt={songs?.songs[currentSongIndex]?.title!}
            width={80}
            height={80}
          />
          <div className="flex flex-col">
            <p className="font-medium text-lg">
              {name ? name : songs?.songs[currentSongIndex]?.title}
            </p>
            <p className="text-gray-400">
              {artist ? artist : songs?.songs[currentSongIndex]?.artist?.name}
            </p>
          </div>
        </div>
        <div className="flex-1 w-full mx-auto px-10">
          <AudioPlayer
            style={{
              backgroundColor: "black",
              animation: "ease-in-out",
            }}
            showDownloadProgress={false}
            footer={true}
            src={song ? song : songs?.songs[currentSongIndex]?.file.url}
            autoPlay={false}
            showSkipControls={true}
            onClickNext={showControls ? playNextSong : undefined}
            onClickPrevious={showControls ? playPrevSong : undefined}
          />
        </div>
      </div>
    </div>
  );
}
