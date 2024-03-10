import SingleSong from "@/components/songs/SingleSong";
import React from "react";

interface SingleSongPageProps {
  params: {
    songId: string;
  };
}

export default function SingleSongPage({ params }: SingleSongPageProps) {
  const { songId } = params;
  return (
    <div>
      <SingleSong id={songId} />
    </div>
  );
}
