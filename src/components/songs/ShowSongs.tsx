"use client";
import { useSongContext } from "@/contexts/SongContext";
import React from "react";
import SongCard from "./SongCard";
import Loader from "../shared/Loader";

export default function ShowSongs() {
  const { songs, isError, isLoading } = useSongContext();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h2 className="text-4xl font-bold my-8">Top Songs For You</h2>
      <div className="grid grid-cols-6 gap-y-6">
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
