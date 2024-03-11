import ShowArtist from "@/components/artists/ShowArtist";
import ShowSongs from "@/components/songs/ShowSongs";

export default function Home() {
  return (
    <div className="py-4 px-10">
      <ShowSongs />
      <ShowArtist />
    </div>
  );
}
