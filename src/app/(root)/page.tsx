import ShowArtist from "@/components/artists/ShowArtist";
import SongPlayer from "@/components/shared/SongPlayer";
import ShowSongs from "@/components/songs/ShowSongs";

export default function Home() {
  return (
    <>
      <div className="py-4 px-10">
        <ShowSongs />
        <ShowArtist />
      </div>
      <div className="flex absolute inset-x-0">
        <SongPlayer />
      </div>
    </>
  );
}
