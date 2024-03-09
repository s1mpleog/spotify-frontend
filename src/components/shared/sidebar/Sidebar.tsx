import React from "react";
import SidebarRoutes from "./SidebarRoutes";
import SidebarLibrary from "./SidebarLibrary";

export default function Sidebar() {
  return (
    <div
      className="flex flex-col z-50 w-[360px] items-start h-screen
     space-y-2 justify-start"
    >
      <div className="py-5 w-full mx-1 my-1 rounded-md bg-black/30">
        <SidebarRoutes />
      </div>
      <div className="flex-1 mx-1 my-1 bg-black/30 w-full p-3 rounded-md">
        <SidebarLibrary />
      </div>
    </div>
  );
}
