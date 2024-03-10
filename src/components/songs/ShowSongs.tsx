"use client";
import { useSongContext } from "@/contexts/SongContext";
import React from "react";
import SongCard from "./SongCard";
import { Loader2 } from "lucide-react";

export default function ShowSongs() {
  const { songs, isError, isLoading } = useSongContext();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen overflow-hidden -mt-[120px]">
        <Loader2 className="animate-spin duration-200" />
      </div>
    );
  }

  return (
    <>
      <h2 className="px-10 text-4xl font-bold my-8">Top Songs For You</h2>
      <div className="px-10 grid grid-cols-6 gap-y-6">
        {songs?.songs.map((song) => (
          <SongCard
            href={song._id}
            key={song._id}
            title={song.title}
            poster={song.poster.url}
            artist={song.artist.name}
          />
        ))}
      </div>
    </>
  );
}
