import { Loader2 } from "lucide-react";
import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden -mt-[120px]">
      <Loader2 className="animate-spin duration-200" />
    </div>
  );
}
