import React from "react";
import Chevron from "./Chevron";
import AuthButton from "./AuthButton";
import UserIcon from "../UserIcon";

export default function Navbar() {
  const user = false;
  return (
    <div className="flex py-4 w-full items-center justify-between my-4 px-10">
      <div>
        <Chevron />
      </div>
      <div>{user ? <UserIcon /> : <AuthButton />}</div>
    </div>
  );
}
