"use client";
import * as songService from "@/services/song.service";
import { ISong, SongApiResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

type SongContext = {
  songs: SongApiResponse | undefined;
  isLoading: boolean;
  isError: boolean;
};

const songContext = createContext<SongContext | undefined>(undefined);

interface SongContextProviderProps {
  children: React.ReactNode;
}

export const SongContextProvider = ({ children }: SongContextProviderProps) => {
  const {
    data: songData,
    error: songError,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["all-songs"],
    queryFn: songService.getAllSongs,
  });
  const [songs, setSongs] = useState<SongApiResponse | undefined>(songData);

  useEffect(() => {
    if (songError) {
      setSongs(undefined);
    }
    setSongs(songData);
  }, [songError, songData, songs]);

  return (
    <songContext.Provider value={{ songs, isLoading, isError }}>
      {children}
    </songContext.Provider>
  );
};

export const useSongContext = () => {
  const context = useContext(songContext);
  return context as SongContext;
};
