"use client";
import React from "react";
import ArtistCard from "./ArtistCard";
import { useArtistContext } from "@/contexts/ArtistContext";

export default function ShowArtist() {
  const { artists, isLoading } = useArtistContext();
  return (
    <>
      <div className="my-10">
        <h4 className="text-4xl font-bold">Top Artists</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-6">
        {artists?.artist.map((artist) => (
          <ArtistCard
            key={artist._id}
            isLoading={isLoading}
            name={artist.name}
            image={artist.avatar.url}
            href={artist._id}
          />
        ))}
      </div>
    </>
  );
}
