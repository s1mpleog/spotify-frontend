"use client";
import * as artistSerivce from "@/services/artist.service";
import { IArtistApiResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

type ArtistContext = {
  artists: IArtistApiResponse | undefined;
  isLoading: boolean;
  isError: boolean;
};

const ArtistContext = createContext<ArtistContext | undefined>(undefined);

interface ArtistContextProps {
  children: React.ReactNode;
}

export const ArtistContextProvider = ({ children }: ArtistContextProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["top-artists"],
    queryFn: artistSerivce.getPopularArtist,
  });

  const [artists, setArtists] = useState<IArtistApiResponse | undefined>(data);

  useEffect(() => {
    if (isError) {
      setArtists(undefined);
    }
    setArtists(data);
  }, [isError, data]);

  return (
    <ArtistContext.Provider value={{ artists, isError, isLoading }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const context = useContext(ArtistContext);
  return context as ArtistContext;
};
