import React from "react";
import UserAvatar from "./UserAvatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import LogoutButton from "./LogoutButton";

export default function UserIcon() {
  return (
    <Popover>
      <PopoverTrigger>
        <UserAvatar />
      </PopoverTrigger>
      <PopoverContent className="max-w-48 mr-10 mt-2 flex flex-col space-y-4 items-start justify-center">
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "w-full",
          })}
          href="/user/profile"
        >
          Profile
        </Link>
        <LogoutButton className="w-full rounded-md" variant="outline" />
      </PopoverContent>
    </Popover>
  );
}
