import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ToastProvider from "@/providers/ToastProvider";
import { UserContextProvider } from "@/contexts/UserContext";
import { SongContextProvider } from "@/contexts/SongContext";
import { ArtistContextProvider } from "@/contexts/ArtistContext";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description:
    "A Next Gneration music player build with latest tech for smooth experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-full bg-base px-4 sm:px-0 ",
          outfit.className
        )}
      >
        <ReactQueryProvider>
          <UserContextProvider>
            <SongContextProvider>
              <ArtistContextProvider>{children}</ArtistContextProvider>
            </SongContextProvider>
          </UserContextProvider>
        </ReactQueryProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
