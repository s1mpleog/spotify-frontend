import SingleArtist from "@/components/artists/SingleArtist";
import React from "react";

interface SingleArtistPageProps {
  params: {
    artistId: string;
  };
}

export default function SingleArtistPage({ params }: SingleArtistPageProps) {
  const { artistId } = params;
  return (
    <div>
      <SingleArtist id={artistId} />
    </div>
  );
}
