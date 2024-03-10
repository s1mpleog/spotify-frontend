import { ISingleSong, ISong, SongApiResponse } from "@/types/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getAllSongs = async () => {
  const response = await fetch(`${BACKEND_URL}/songs/all`, {
    method: "GET",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody as SongApiResponse;
};

export const getSongById = async (id: string) => {
  const response = await fetch(`${BACKEND_URL}/songs/by-id/${id}`, {
    method: "GET",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody as ISingleSong;
};
