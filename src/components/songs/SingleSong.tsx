"use client";

import * as songService from "@/services/song.service";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import ShowArtist from "./ArtistSong";
import PlaySong from "./PlaySong";

interface SingleSongProps {
  id: string;
}

export default function SingleSong({ id }: SingleSongProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["single-song"],
    queryFn: () => songService.getSongById(id),
  });

  useEffect(() => {
    document.title = `${data?.song.title} by ${data?.song.artist.name}`;

    return () => {
      document.title = "Spotify - Web Player: Music for everyone";
    };
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen overflow-hidden -mt-[120px]">
        <Loader2 className="animate-spin duration-200" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen overflow-hidden -mt-[120px]">
        <p className="text-3xl font-bold">Something went wrong...😩</p>
      </div>
    );
  }

  return (
    <div className="py-10">
      {data && (
        <>
          <div className="flex max-w-7xl mx-auto border-b pb-10 items-end justify-start gap-10">
            <div>
              <Image
                className="rounded-md object-cover max-w-[250px] max-h-[250px]"
                src={data?.song.poster.url}
                alt={data?.song.title}
                width={250}
                height={250}
              />
            </div>
            <div className="space-y-3">
              <p className="font-medium text-lg">song</p>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">
                {data.song.title}
              </h3>
              <div className="flex items-center gap-1">
                <Image
                  className="rounded-full object-cover w-8 h-8"
                  width={30}
                  height={30}
                  src={data.song.artist.avatar.url}
                  alt={data.song.artist.name}
                />
                <p className="font-medium">{data.song.artist.name}</p>
                <li className="mx-1" aria-hidden={true} />
                <p>{data.song.release_date}</p>
                <li className="mx-1" aria-hidden={true} />
                <p>{data.song.total_length}</p>
              </div>
              <div className="max-w-3xl my-6">
                <p className="line-clamp-3 font-medium text-gray-300">
                  {data.song.description}
                </p>
              </div>
            </div>
          </div>
          <div className="my-10 flex items-end justify-end max-w-2xl mx-auto">
            <ShowArtist artist={data?.song.artist} />
          </div>
          <div className="bg-black bottom-1 absolute w-full inset-x-0 z-[100]">
            <PlaySong
              poster={data.song.poster.url}
              name={data.song.title}
              artist={data.song.artist.name}
              song={data.song.file}
            />
          </div>
        </>
      )}
    </div>
  );
}
