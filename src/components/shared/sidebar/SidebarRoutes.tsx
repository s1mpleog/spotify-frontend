"use client";
import React from "react";
import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  {
    name: "Home",
    href: "/",
    icon: MdHomeFilled,
  },
  {
    name: "Search",
    href: "/search",
    icon: IoSearch,
  },
];

export default function SidebarRoutes() {
  const pathname = usePathname();
  return (
    <div className="space-y-6">
      {sidebarLinks.map((link) => (
        <Link
          href={link.href}
          className="flex items-start justify-start px-3 gap-2"
          key={link.name}
        >
          <link.icon
            className={cn(
              "text-gray-400 ",
              pathname === link.href && "text-white fill-current"
            )}
            size={25}
          />
          <p
            className={cn(
              "text-lg font-medium text-gray-400",
              pathname === link.href && "text-white"
            )}
          >
            {link.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
