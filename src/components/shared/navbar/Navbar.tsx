"use client";
import React from "react";
import Chevron from "./Chevron";
import AuthButton from "./AuthButton";
import UserIcon from "../UserIcon";
import { useUserContext } from "@/contexts/UserContext";
import LogoutButton from "../LogoutButton";

export default function Navbar() {
  const { isLoggedIn } = useUserContext();
  return (
    <div className="flex py-4 w-full items-center justify-between my-4 px-10">
      <div>
        <Chevron />
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex items-center justify-center gap-2">
            <LogoutButton variant="default" />
            <UserIcon />
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
    </div>
  );
}
