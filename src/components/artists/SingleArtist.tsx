"use client";
import * as artistService from "@/services/artist.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../shared/Loader";
import Image from "next/image";
import ArtistSongs from "./ArtistSongs";

export default function SingleArtist({ id }: { id: string }) {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["single-artist"],
    queryFn: () => artistService.getArtistById(id),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <div className="flex flex-col items-start justify-start">
        <div className="w-full h-[400px] -z-50">
          <Image
            className="object-cover h-[400px] overflow-hidden absolute top-0 object-center pl-[365px] rounded-md inset-x-0"
            src={data?.artist.avatar.url}
            alt={data?.artist.name}
            width={1980}
            height={400}
            quality={100}
            priority={true}
          />
          <div className="absolute mt-32 ml-8">
            <h3 className="text-4xl md:text-7xl font-extrabold">
              {data.artist.name}
            </h3>
          </div>
        </div>
        <div className="-mt-20 w-full">
          {/* @ts-ignore */}
          <ArtistSongs songs={data.artist.songs} />
        </div>
      </div>
    );
  }
}
