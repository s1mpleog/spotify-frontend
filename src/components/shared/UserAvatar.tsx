"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUserContext } from "@/contexts/UserContext";
import { getInitials } from "@/lib/utils";

export default function UserAvatar() {
  const { user } = useUserContext();

  return (
    <Avatar className="cursor-pointer">
      <AvatarImage className="object-cover" src={user?.user.avatar.url} />
      <AvatarFallback>{getInitials(user?.user.fullName)}</AvatarFallback>
    </Avatar>
  );
}
