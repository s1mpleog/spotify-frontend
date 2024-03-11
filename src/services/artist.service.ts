import { IArtistApiResponse } from "@/types/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPopularArtist = async () => {
  const response = await fetch(`${BACKEND_URL}/artists/all`, {
    method: "GET",
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  return responseBody as IArtistApiResponse;
};
